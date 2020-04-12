export default {
	name: "product",
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
			name: "description",
			type: "textArea",
		},
		{
			name: "images",
			type: "array",
			of: [
				{
					type: "illustration",
				},
			],
		},
		{
			name: "variants",
			type: "array",
			of: [{ type: "reference", to: { type: "variant" } }],
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			name: "productId",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			name: "defaultPrice",
			type: "number",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			name: "vendor",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			name: "handle",
			type: "slug",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			options: {
				source: "title",
				maxLength: 96,
			},
			fieldset: "shopify",
		},
		{
			name: "deleted",
			type: "boolean",
			description: "This indicates that the product is deleted from Shopify",
			readOnly: true,
			fieldset: "shopify",
		},
	],

	preview: {
		select: {
			title: "title",
			media: "images.0",
		},
	},
};
