import React from "react";
import { objectWrapper } from "./utils";
import Illustration from "./illustration";
import DataTable from "./data-table";

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
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
						annotations: [
							{
								name: "externalLink",
								type: "object",
								fields: [{ name: "url", type: "url" }],
								blockEditor: {
									icon: () => <div>🌍</div>,
								},
							},
							{
								name: "internalLink",
								type: "object",
								fields: [
									{
										name: "url",
										type: "reference",
										to: [
											{ type: "page" },
											{ type: "frontPage" },
											{ type: "store" },
										],
									},
								],
								blockEditor: {
									icon: () => <div>🔗</div>,
								},
							},
						],
					},
				},
				objectWrapper("dataTable", {
					select: {
						rowHeader: "content.rowHeader",
						columnHeader: "content.columnHeader",
						data: "content.data",
					},
					component: DataTable,
				}),
				objectWrapper("illustration", {
					select: {
						imageUrl: "content.asset.url",
						alt: "content.alt",
						caption: "content.caption",
					},
					component: Illustration,
				}),
			],
		},
	],
	preview: {
		prepare: () => ({
			title: "Text Area",
		}),
	},
};
