import PropTypes from "prop-types";
UrlBox.propTypes = {
	setUrl: PropTypes.func,
	url: PropTypes.string
};
function UrlBox({ url, setUrl }) {
	function handleChangeUrl(event) {
		setUrl(event.target.value);
	}
	return (
		<div>
			<input value={url} type="text" placeholder="Enter a URL here" onChange={handleChangeUrl} />
		</div>
	);
}

export default UrlBox;
