/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { BlockEditorProps } from "./utils";

const wrapper = css`
	display: flex;
	flex-direction: column;

	& > img {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		border-radius: 0.25rem;
	}

	& > caption {
		text-align: center;
		font-size: 0.85rem;
		color: darkgray;
		margin-top: 0.25rem;
	}
`;

type Props = {
	imageUrl?: string;
	alt?: string;
	caption?: string;
};

const Illustration: React.FC<BlockEditorProps<Props>> = ({ value }) => {
	return (
		<figure css={wrapper}>
			<img src={value?.imageUrl} alt={value?.alt} />
			<caption>{value?.caption}</caption>
		</figure>
	);
};

export default Illustration;
