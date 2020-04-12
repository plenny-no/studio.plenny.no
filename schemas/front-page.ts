export default {
	name: "frontPage",
	type: "document",
	fields: [
		{
			name: "hero",
			type: "illustration",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "sections",
			type: "sections",
		},
	],
};
