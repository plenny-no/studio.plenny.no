export default {
	title: "Store",
	name: "store",
	type: "document",
	fields: [
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
			title: "Store",
		}),
	},
};
