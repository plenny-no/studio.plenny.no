import { ShopifyProduct, client } from "./_utils";

export async function addOrUpdateProduct(data: ShopifyProduct): Promise<void> {
	const product = {
		_type: "product",
		_id: data.id.toString(),
		title: data.title,
		deleted: false,
		productId: data.id.toString(),
		defaultPrice: ((data.variants || [])[0] || {}).price || undefined,
		vendor: data.vendor || undefined,
		handle: {
			_type: "slug",
			current: data.handle,
		},
	};

	const variants = (data.variants || []).map((variant) => ({
		_type: "variant",
		_id: variant.id.toString(),
		title: variant.title,
		variantId: variant.id.toString(),
		product: {
			_type: "reference",
			_ref: variant.product_id.toString(),
		},
		price: variant.price,
		compareAtPrice: variant.compare_at_price || undefined,
		inventoryQuantity: variant.inventory_quantity || undefined,
		sku: variant.sku,
	}));

	if (
		variants.length === 1 &&
		variants[0].title.toLowerCase() === "default title"
	) {
		variants[0].title = product.title;
	}

	await client
		.transaction()
		.createIfNotExists(product)
		.patch(product._id, (patch) => patch.set(product))
		.commit()
		.then(() =>
			console.log(
				`Successfully created/updated product with id ${product.productId}.`
			)
		)
		.catch((error) =>
			console.error(
				`Unable to create/update product in sanity.\nVariant: ${data}\nError: ${error}`
			)
		);

	await Promise.all(
		variants.map((variant) =>
			client
				.transaction()
				.createIfNotExists(variant)
				.patch(variant._id, (patch) => patch.set(variant))
				.commit()
				.then(() =>
					console.log(
						`Successfully created/updated variant with id ${variant.variantId}.`
					)
				)
				.catch((error) =>
					console.error(
						`Unable to create/update variant in sanity.\nVariant: ${variant}\nError: ${error}`
					)
				)
		)
	);

	await client
		.transaction()
		.patch(product._id, (patch) =>
			patch.set({
				variants: variants.map((variant) => ({
					_type: "reference",
					_ref: variant._id,
					_key: variant._id,
				})),
			})
		)
		.commit()
		.then(() =>
			console.log(
				`Successfully updated ${variants.length} variants on product with id ${product.productId}.`
			)
		)
		.catch((error) =>
			console.error(
				`Unable to update variants on product with id ${product.productId}.\nVariants: ${variants}\nError: ${error}`
			)
		);
}

export async function deleteProduct(
	data: Pick<ShopifyProduct, "id">
): Promise<void> {
	await client
		.patch(data.id.toString())
		.set({ deleted: true })
		.commit()
		.then(() =>
			console.log(`Successfully marked product with id ${data.id} as deleted.`)
		)
		.catch((error) =>
			console.error(
				`Failed to mark product with ${data.id} as deleted.\nError: ${error}`
			)
		);
}
