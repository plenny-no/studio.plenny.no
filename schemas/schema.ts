import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

// Documents
import Product from "./prduct";
import Variant from "./variant";
import Page from "./page";
import FrontPage from "./front-page";
import Config from "./config";

// Sections
import Sections from "./sections";
import TextArea from "./sections/text-area";
import CallToAction from "./sections/call-to-action";

// Types
import Illustration from "./types/illustration";
import Link from "./types/link";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([
		Product,
		Variant,
		Page,
		FrontPage,
		Config,
		Sections,
		TextArea,
		CallToAction,
		Illustration,
		Link,
	]),
});
