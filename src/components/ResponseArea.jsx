import PropTypes from "prop-types";
import ReactJson from "react-json-view";
ResponseArea.propTypes = {
	response: PropTypes.array | PropTypes.object
};

function ResponseArea({ response }) {
	console.log(response);
	return (
		<div className="response-area">
			<ReactJson src={response} theme={"colors"} iconStyle="circle" collapsed={false} />
		</div>
	);
}

export default ResponseArea;
