export default {
	name: "internalLink",
	type: "object",
	fields: [
		{
			name: "title",
			type: "string",
			validate: (Rule: any) => Rule.required(),
		},
		{
			name: "url",
			type: "reference",
			to: [
				{ type: "page" },
				{ type: "frontPage" },
				{ type: "store" },
				{ type: "article" },
			],
			validate: (Rule: any) => Rule.required(),
		},
	],
};
