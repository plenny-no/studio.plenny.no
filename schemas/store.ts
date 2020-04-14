export default {
	name: "store",
	type: "document",
	fields: [
		{
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
