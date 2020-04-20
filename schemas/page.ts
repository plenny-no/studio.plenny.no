export default {
	title: "Page",
	name: "page",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
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
			title: "SEO Metadata",
			name: "seoMetadata",
			type: "seoMetadata",
		},
		{
			title: "Section",
			name: "sections",
			type: "sections",
			validation: (Rule: any) => Rule.required(),
		},
	],
};
