const { SANITY_STUDIO_PREVIEW_TOKEN } = process.env;

export default function resolveProductionUrl(document: any) {
	let url = "";

	switch (document._type) {
		case "frontPage":
			url = "/";
			break;
		case "page":
			url = `/${document.slug.current}`;
			break;
		case "article":
			url = `/blog/${document.slug.current}`;
			break;
		case "product":
			url = `/butikk/${document.slug.current}`;
			break;
		case "variant":
			url = `/butikk/${document.product.slug.current}`;
			break;
		case "store":
			url = "/butikk";
			break;
		case "config":
			url = "/";
			break;
		default:
			url = "/";
			break;
	}

	return `https://plenny.no/api/preview?secret=${SANITY_STUDIO_PREVIEW_TOKEN}&url=${url}`;
}
