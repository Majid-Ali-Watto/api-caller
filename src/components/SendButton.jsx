import PropTypes from "prop-types";
import useFetch from "../utils/Fetch";

SendButton.propTypes = {
	method: PropTypes.string,
	url: PropTypes.string,
	setResponse: PropTypes.func,
	body: PropTypes.object
};

function SendButton({ method, url, setResponse, body }) {
	const { api } = useFetch();
	async function handleSendRequest() {
		try {
			const data = { ...body };
			console.log(data);
			const response = await api[method?.toLowerCase()](url, data); // api.get(url)
			setResponse(response);
		} catch (error) {
			setResponse({ error: error.message });
		}
	}
	return (
		<div>
			<button onClick={handleSendRequest} type="button">
				Send
			</button>
		</div>
	);
}

export default SendButton;
