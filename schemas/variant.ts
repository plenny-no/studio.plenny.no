export default {
	title: "Variant",
	name: "variant",
	type: "document",
	fieldsets: [
		{
			name: "shopify",
			title: "Data from Shopify",
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
	],
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			title: "SKU",
			name: "sku",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			title: "Product",
			name: "product",
			type: "reference",
			to: [{ type: "product" }],
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			title: "Variant ID",
			name: "variantId",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			title: "Storefront ID",
			name: "storefrontId",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			title: "Price",
			name: "price",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			title: "Compare At Price",
			name: "compareAtPrice",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			title: "Inventory Quantity",
			name: "inventoryQuantity",
			type: "number",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
	],

	preview: {
		select: {
			title: "title",
			productTitle: "product.title",
			subtitle: "sku",
			media: "product.images.0",
		},
		prepare({ title, subtitle, productTitle, media }: any) {
			return {
				title: `${productTitle} ${title}`,
				subtitle,
				media,
			};
		},
	},
};
