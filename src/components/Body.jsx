import { useState } from "react";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

function Body({ setBody }) {
	const [json, setJson] = useState({}); // Start with an empty object

	function handleChange(content) {
		if (!content.error) {
			console.dir(content);
			setJson(content);
			setBody(content);
		}
	}

	return <Editor value={json} onChange={handleChange} mode="code" indentation={4} />;
}

export default Body;
