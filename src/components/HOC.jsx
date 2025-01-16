import PropTypes from "prop-types";

function HOC(props) {
	return <props.comp url={props.url} setUrl={props.setUrl} setBody={props.setBody} />;
}

HOC.propTypes = {
	comp: PropTypes.func,
	url: PropTypes.string,
	setUrl: PropTypes.func,
	setBody: PropTypes.func
};

export default HOC;
