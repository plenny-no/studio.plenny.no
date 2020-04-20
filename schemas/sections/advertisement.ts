export default {
	title: "Advertisement",
	name: "advertisement",
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
			validation: (Rule: any) => Rule.max(3).min(1).required(),
		},
	],
	preview: {
		select: {
			subtitle: "header",
		},
		prepare: ({ subtitle }: { subtitle: string }) => ({
			title: "Advertisement",
			subtitle,
		}),
	},
};
