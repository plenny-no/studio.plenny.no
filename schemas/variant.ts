export default {
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
			name: "title",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			name: "sku",
			title: "SKU",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			name: "product",
			type: "reference",
			to: [{ type: "product" }],
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			name: "variantId",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			name: "storefrontId",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			name: "price",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			name: "compareAtPrice",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
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
