import Params from "./Params";

function ParamsBody({ url, setUrl }) {
	return (
		<Params
			url={url?.split('?')[0]}
			setUrl={setUrl}
		/>
	);
}

export default ParamsBody;
