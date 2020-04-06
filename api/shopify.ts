import { NowRequest, NowResponse } from "@now/node";
import { addOrUpdateProduct, deleteProduct } from "./_products";
import { isVerifiedRequest, ShopifyProduct } from "./_utils";

export default async function (
	req: NowRequest,
	res: NowResponse
): Promise<void> {
	if (!isVerifiedRequest(req)) {
		console.error(`Unable to verify request.\n${req}`);
		res.status(403).json({ error: "Unauthenticated." });
		return;
	}

	const shopifyTopic = req.headers["x-shopify-topic"];

	if (req.method !== "POST") {
		res.status(405).json({ error: "Unsupported method." });
		return;
	}

	if (typeof req.body !== "object") {
		console.error(
			`Expected request body to be object, but got "${typeof req.body}". Content: ${
				req.body
			}.`
		);
		res.status(400).json({ error: "Bad request." });
		return;
	}

	switch (shopifyTopic) {
		case "products/create":
		case "products/update":
			await addOrUpdateProduct(req.body as ShopifyProduct);
			break;
		case "products/delete":
			await deleteProduct(req.body as Pick<ShopifyProduct, "id">);
			break;
		default:
			console.error(
				`Unexpected shopify topic. Expected "products/create", but got "${shopifyTopic}."`
			);
			res.status(400).json({ error: "Bad request." });
			return;
	}

	res.json({ status: "ok" });
}
