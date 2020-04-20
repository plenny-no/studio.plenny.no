export default {
	title: "SEO Metadata",
	name: "seoMetadata",
	type: "object",
	fields: [
		{
			title: "Description",
			name: "description",
			description:
				"Text describing the page that will be displayed on google search results and when sharing the link on social media.",
			type: "string",
			validate: (Rule: any) => Rule.min(50).max(160).required(),
		},
		{
			title: "Image",
			name: "image",
			description:
				"The image used by google and social media platforms when displaying the page.",
			type: "image",
			validate: (Rule: any) => Rule.required(),
		},
	],
};
