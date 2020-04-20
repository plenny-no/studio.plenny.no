export default {
	title: "External Link",
	name: "externalLink",
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
			type: "url",
			validate: (Rule: any) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}).required(),
		},
	],
};
