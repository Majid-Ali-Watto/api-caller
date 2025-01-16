import Methods from "./Methods";
import ResponseArea from "./ResponseArea";
import SectionViewer from "./SectionViewer";
import SendButton from "./SendButton";
import UrlBox from "./UrlBox";
import { useState } from "react";

function ApiCallSection() {
	const [method, setMethod] = useState("GET");
	const [url, setUrl] = useState("https://fakestoreapi.com/products");
	const [response, setResponse] = useState({});
	const [body, setBody] = useState({});
	return (
		<>
			<div className="api-call-section">
				<Methods setMethod={setMethod} />
				<UrlBox url={url} setUrl={setUrl} />
				<SendButton method={method} url={url} setResponse={setResponse} body={body} />
			</div>
			<SectionViewer url={url} setUrl={setUrl} setBody={setBody} />
			<ResponseArea response={response || {}} />
		</>
	);
}

export default ApiCallSection;
