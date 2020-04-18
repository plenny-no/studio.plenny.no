export default {
	name: "dataTable",
	type: "object",
	fields: [
		{ name: "data", type: "table" },
		{
			name: "rowHeader",
			type: "boolean",
			description:
				"The first row will be displayed as a header for the rest of the rows",
		},
		{
			name: "columnHeader",
			type: "boolean",
			description:
				"The first column will be displayed as a header for the rest of the columns",
		},
	],
};
