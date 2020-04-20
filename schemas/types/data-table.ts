export default {
	title: "Data Table",
	name: "dataTable",
	type: "object",
	fields: [
		{
			title: "Data",
			name: "data",
			type: "table",
		},
		{
			title: "Row Header",
			name: "rowHeader",
			type: "boolean",
			description:
				"The first row will be displayed as a header for the rest of the rows",
		},
		{
			title: "Column Header",
			name: "columnHeader",
			type: "boolean",
			description:
				"The first column will be displayed as a header for the rest of the columns",
		},
	],
};
