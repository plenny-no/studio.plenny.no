export default {
	name: "page",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},
		{
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "content",
			type: "sections",
		},
	],
};
