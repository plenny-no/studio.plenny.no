import { NowRequest } from "@now/node";
import sanityClient from "@sanity/client";
import { createHmac, timingSafeEqual } from "crypto";

const {
	SANITY_API_TOKEN,
	SANITY_PROJECT_ID,
	SANITY_DATASET,
	SHOPIFY_SECRET,
} = process.env;

if (
	SANITY_API_TOKEN === undefined ||
	SANITY_PROJECT_ID === undefined ||
	SANITY_DATASET === undefined ||
	SHOPIFY_SECRET === undefined
) {
	throw new Error("Missing configuration");
}

export const client = sanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	token: SANITY_API_TOKEN,
	useCdn: false,
});

export type ShopifyVariant = {
	id: number;
	product_id: number;
	title: string;
	price: string;
	sku: string;
	compare_at_price: string | null;
	inventory_quantity: number | null;
};

export type ShopifyProduct = {
	id: number;
	title: string;
	vendor: string | null;
	handle: string;
	variants: ShopifyVariant[];
};

export async function isVerifiedRequest(request: NowRequest): Promise<boolean> {
	const hmacHeader = request.headers["x-shopify-hmac-sha256"];

	if (typeof hmacHeader !== "string") return false;

	const bodyChunks: Buffer[] = [];

	return new Promise<boolean>((resolve) => {
		try {
			request
				.on("data", (chunk) => bodyChunks.push(Buffer.from(chunk)))
				.on("end", async () => {
					const rawBody = Buffer.concat(bodyChunks).toString("utf8");

					const hmac = createHmac("sha256", SHOPIFY_SECRET || "");
					hmac.update(rawBody);
					resolve(
						timingSafeEqual(hmac.digest(), Buffer.from(hmacHeader, "base64"))
					);
				});
		} catch {
			resolve(false);
		}
	});
}
