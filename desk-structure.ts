import EditIcon from "part:@sanity/base/edit-icon";
import { StructureBuilder as S } from "@sanity/structure";
import {
	FaShoppingCart,
	FaTags,
	FaLayerGroup,
	FaHome,
	FaStore,
	FaCog,
	FaRss,
} from "react-icons/fa";
import JSONpreview from "./previews/json-preview";

const products = S.listItem()
	.title("Products")
	.schemaType("product")
	.icon(FaShoppingCart)
	.child(
		S.documentList()
			.title("Products")
			.filter(`_type == "product" && deleted != true`)
	);

const variants = S.listItem()
	.title("Variants")
	.icon(FaTags)
	.schemaType("variant")
	.child(
		S.documentList()
			.title("Variants")
			.filter(`_type == "variant" && product->deleted != true`)
	);

const pages = S.listItem()
	.title("Pages")
	.icon(FaLayerGroup)
	.schemaType("page")
	.child(S.documentTypeList("page").title("Pages"));

const fronPage = S.listItem()
	.title("Front Page")
	.icon(FaHome)
	.child(
		S.document()
			.schemaType("frontPage")
			.documentId("global-front-page")
			.title("Front Page")
	);

const store = S.listItem()
	.title("Store")
	.icon(FaStore)
	.child(
		S.document().schemaType("store").documentId("global-store").title("Store")
	);

const config = S.listItem()
	.title("Config")
	.icon(FaCog)
	.child(
		S.document()
			.schemaType("config")
			.documentId("global-config")
			.title("Config")
	);

const blog = S.listItem()
	.title("Blog")
	.icon(FaRss)
	.schemaType("article")
	.child(S.documentTypeList("article").title("Articles"));

export default () =>
	S.list()
		.title("Content")
		.items([fronPage, store, pages, blog, products, variants, config]);

export const getDefaultDocumentNode = () => {
	return S.document().views([
		S.view.form().icon(EditIcon),
		S.view.component(JSONpreview).title("JSON"),
	]);
};
