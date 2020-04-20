export default {
	title: "Internal Link",
	name: "internalLink",
	type: "object",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validate: (Rule: any) => Rule.required(),
		},
		{
			title: "URL",
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
