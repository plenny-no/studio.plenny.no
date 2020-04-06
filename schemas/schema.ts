import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

// Documents
import Product from "./prduct";
import Variant from "./variant";
import Page from "./page";

// Sections
import Sections from "./sections";
import TextArea from "./sections/text-area";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([Product, Variant, Page, Sections, TextArea]),
});
