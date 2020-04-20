export default {
	title: "Front Page",
	name: "frontPage",
	type: "document",
	fields: [
		{
			title: "Hero",
			name: "hero",
			type: "illustration",
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: "SEO Metadata",
			name: "seoMetadata",
			type: "seoMetadata",
		},
		{
			title: "Sections",
			name: "sections",
			type: "sections",
		},
	],
	preview: {
		prepare: () => ({
			title: "Front page",
		}),
	},
};
