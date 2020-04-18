export default {
	name: "article",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
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
			name: "blurb",
			type: "array",
			of: [
				{
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
					},
				},
			],
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "image",
			type: "illustration",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "content",
			type: "textArea",
			validation: (Rule: any) => Rule.required(),
		},
	],
};
