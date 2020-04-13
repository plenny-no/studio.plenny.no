export default {
	name: "advertisement",
	type: "object",
	fields: [
		{
			name: "header",
			type: "string",
		},
		{
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
			media: "image",
		},
		prepare: ({ subtitle }: { subtitle: string }) => ({
			title: "Advertisement",
			subtitle,
		}),
	},
};
