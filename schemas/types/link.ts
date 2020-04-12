export default {
	name: "link",
	type: "object",
	fields: [
		{
			name: "title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "url",
			type: "url",
			validation: (Rule: any) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
					allowRelative: true,
				}).required(),
		},
	],
};
