export default {
	title: "Article",
	name: "article",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: "Blurb",
			name: "blurb",
			description:
				"The text used when previewing the article in for example the list of blog posts",
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
			title: "Image",
			name: "image",
			description:
				"The image used when previewing the article in for example the list of blog posts",
			type: "illustration",
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: "Content",
			name: "content",
			type: "textArea",
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: "SEO Metadata",
			name: "seoMetadata",
			type: "seoMetadata",
		},
	],
};
