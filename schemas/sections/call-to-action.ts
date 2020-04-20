export default {
	title: "Call To Action",
	name: "callToAction",
	type: "object",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: "Text",
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
						annotations: [],
					},
				},
			],
		},
		{
			title: "Image",
			name: "image",
			type: "illustration",
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: "Link",
			name: "link",
			type: "internalLink",
		},
		{
			title: "Image Alignment",
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
