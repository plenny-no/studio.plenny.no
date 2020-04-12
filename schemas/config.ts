export default {
	name: "config",
	type: "document",
	fields: [
		{
			name: "navigation",
			type: "array",
			of: [{ type: "link" }],
		},
		{
			name: "footer",
			type: "object",
			options: { collapsible: true, collapsed: false },
			fieldsets: [
				{ name: "social", title: "Social Media" },
				{ name: "links", title: "Shortcuts" },
			],
			fields: [
				{
					name: "twitter",
					type: "url",
					fieldset: "social",
				},
				{
					name: "instagram",
					type: "url",
					fieldset: "social",
				},
				{
					name: "facebook",
					type: "url",
					fieldset: "social",
				},
				{
					name: "links",
					fieldset: "links",
					type: "array",
					of: [{ type: "link" }],
				},
			],
		},
		{
			name: "advanced",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							title: "Key",
							name: "key",
							type: "string",
							validate: (Rule: any) => Rule.required(),
						},
						{
							title: "Value",
							name: "value",
							type: "string",
						},
					],
					preview: {
						select: {
							title: "key",
						},
					},
				},
			],
		},
	],
};
