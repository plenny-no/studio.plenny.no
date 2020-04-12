export default {
	name: "textArea",
	type: "object",
	fields: [
		{
			name: "text",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "Heading", value: "h2" },
						{ title: "Subheading", value: "h3" },
					],
					lists: [],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
					},
				},
			],
		},
	],
	preview: {
		prepare: () => ({
			title: "Text Area",
		}),
	},
};
