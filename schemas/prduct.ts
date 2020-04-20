export default {
	title: "Product",
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
			title: "Title",
			name: "title",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			title: "Description",
			name: "description",
			type: "textArea",
		},
		{
			title: "Images",
			name: "images",
			type: "array",
			of: [
				{
					type: "illustration",
				},
			],
		},
		{
			title: "SEO Metadata",
			name: "seoMetadata",
			type: "seoMetadata",
		},
		{
			title: "Variants",
			name: "variants",
			type: "array",
			of: [{ type: "reference", to: { type: "variant" } }],
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
		},
		{
			title: "Product ID",
			name: "productId",
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
			title: "Default Price",
			name: "defaultPrice",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			title: "Vendor",
			name: "vendor",
			type: "string",
			description: "This comes from Shopify and cannot be changed",
			readOnly: true,
			fieldset: "shopify",
		},
		{
			title: "Slug",
			name: "slug",
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
			title: "Deleted",
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
