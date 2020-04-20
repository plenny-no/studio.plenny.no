export default {
	title: "Product List",
	name: "productList",
	type: "object",
	fields: [
		{
			title: "Header",
			name: "header",
			type: "string",
		},
		{
			title: "Products",
			name: "products",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "product" }],
					options: { filter: `deleted != true` },
				},
			],
			validation: (Rule: any) => Rule.min(1).required(),
		},
	],
	preview: {
		select: {
			subtitle: "header",
		},
		prepare: ({ subtitle }: { subtitle: string }) => ({
			title: "Product List",
			subtitle,
		}),
	},
};
