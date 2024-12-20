import { EditorView, minimalSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { lineNumbers } from "@codemirror/view";
import { xml } from "@codemirror/lang-xml";
import { unifiedMergeView } from "@codemirror/merge";
import target from "./Account.object?raw";
import base from "./Account.object.base?raw";

const host = document.querySelector("#app")!;

new EditorView({
	extensions: [
		minimalSetup,
		EditorState.readOnly.of(true),
		lineNumbers(),
		xml(),
		unifiedMergeView({
			original: base,
			mergeControls: false
		})
	],
	parent: host,
	doc: target
});
