import methods from "../assets/methods/methods";
import PropTypes from "prop-types";
Methods.propTypes = {
	setMethod: PropTypes.func
};
function Methods({ setMethod }) {
	function handleChange(event) {
		setMethod(event.target.value);
	}
	return (
		<select onChange={handleChange}>
			{methods.map((method) => (
				<option key={method}>{method}</option>
			))}
		</select>
	);
}

export default Methods;
