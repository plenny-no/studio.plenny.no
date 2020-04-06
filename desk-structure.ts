import EditIcon from "part:@sanity/base/edit-icon";
import { StructureBuilder as S } from "@sanity/structure";
import { FaShoppingCart, FaTags, FaLayerGroup } from "react-icons/fa";
import JSONpreview from "./previews/json-preview";

const hiddenTypes = ["product", "variant", "page"];

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

export default () =>
	S.list()
		.title("Content")
		.items([
			pages,
			products,
			variants,
			...S.documentTypeListItems().filter(
				(item) => !hiddenTypes.includes(item.getId() as string)
			),
		]);

export const getDefaultDocumentNode = () => {
	return S.document().views([
		S.view.form().icon(EditIcon),
		S.view.component(JSONpreview).title("JSON"),
	]);
};
