import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

// Documents
import product from "./prduct";
import variant from "./variant";
import page from "./page";
import frontpage from "./front-page";
import store from "./store";
import config from "./config";
import article from "./article";

// Sections
import sections from "./sections";
import textarea from "./sections/text-area";
import calltoaction from "./sections/call-to-action";
import advertisement from "./sections/advertisement";
import productlist from "./sections/product-list";

// Types
import illustration from "./types/illustration";
import internallink from "./types/internal-link";
import externallink from "./types/external-link";
import dataTable from "./types/data-table";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([
		product,
		variant,
		page,
		frontpage,
		store,
		config,
		article,
		sections,
		textarea,
		calltoaction,
		advertisement,
		productlist,
		illustration,
		internallink,
		externallink,
		dataTable,
	]),
});
