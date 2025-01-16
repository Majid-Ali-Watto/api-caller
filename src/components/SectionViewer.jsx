import { useState } from "react";
import ParamsBody from "./Params-Body";
import Authorization from "./Authorization";
import HOC from "./HOC";
import Body from "./Body";

function SectionViewer({ url, setUrl, setBody }) {
	const [component, setComponent] = useState(1);
	function handleSelect(event) {
		const selectedComponent = event.target.getAttribute("data-component");
		setComponent(selectedComponent);
	}

	return (
		<div>
			<nav>
				<ul>
					<li data-component="0" onClick={handleSelect}>
						Params
					</li>
					<li data-component="1" onClick={handleSelect}>
						Authorization
					</li>
					<li data-component="-1" onClick={handleSelect}>
						Body
					</li>
				</ul>
			</nav>
			{component == 0 ? <HOC url={url} setUrl={setUrl} comp={ParamsBody} /> : component == 1 ? <HOC comp={Authorization} /> : <HOC comp={Body} setBody={setBody} />}
		</div>
	);
}

export default SectionViewer;
