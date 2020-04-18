export function objectWrapper(type: string, preview?: object) {
	return {
		name: type,
		type: "object",
		fields: [{ name: "content", type }],
		preview,
	};
}

export type BlockEditorProps<T> = { value?: T };
