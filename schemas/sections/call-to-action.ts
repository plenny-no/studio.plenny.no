export default {
	name: "callToAction",
	type: "object",
	fields: [
		{
			name: "title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "text",
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
		},
		{
			name: "image",
			type: "illustration",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "link",
			type: "link",
		},
		{
			name: "imageAlignment",
			type: "string",
			options: {
				list: [
					{ title: "Left", value: "left" },
					{ title: "Right", value: "right" },
				],
				layout: "radio",
			},
			validation: (Rule: any) => Rule.required(),
		},
	],
	preview: {
		select: {
			subtitle: "title",
			media: "image",
		},
		prepare: ({ subtitle, media }: { subtitle: string; media: any }) => ({
			title: "Call To Action",
			subtitle,
			media,
		}),
	},
};
