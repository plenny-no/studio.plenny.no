export default {
	name: "externalLink",
	type: "object",
	fields: [
		{
			name: "title",
			type: "string",
			validate: (Rule: any) => Rule.required(),
		},
		{
			name: "url",
			type: "url",
			validate: (Rule: any) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}).required(),
		},
	],
};
