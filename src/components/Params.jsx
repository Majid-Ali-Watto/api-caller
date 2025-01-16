import { useState, useEffect } from "react";

function Params({ url, setUrl }) {
	const [rows, setRows] = useState([]);
	useEffect(() => {
		// Construct the URL with query parameters
		constructUrlWithParams(rows);
	}, [rows, setUrl]);

	function addRow() {
		const newRow = {
			include: true,
			key: "",
			value: "",
			id: Date.now() // Unique ID for each row
		};
		setRows([...rows, newRow]);
	}

	function deleteRow(id) {
		setRows(rows.filter((row) => row.id !== id));
	}

	function handleInputChange(id, field, value) {
		setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
	}

	function constructUrlWithParams(params) {
		console.log("🚀 -> file: Params.jsx:34 -> constructUrlWithParams -> params:", params);

		let str = "";
		let notIncluded = 0;
		params.forEach((element, index) => {
			if (!element.include) {
				notIncluded++;
				return;
			}
			if (index > 0 && str != "") str += "&";
			str += element.key + "=" + element.value;
		});
		console.log(str);

		console.log("🚀 -> file: Params.jsx:64 -> constructUrlWithParams -> str:", str);
		if (str) setUrl(url + "?" + str);
		else if (notIncluded == params.length) setUrl(url);
	}
	function handleIncludeChange(rowSelected) {
		const id = rowSelected.id;
		setRows(rows.map((row) => (row.id === id ? { ...row, ["include"]: !row.include } : row)));
	}

	return (
		<div className="params-table">
			<table>
				<thead>
					<tr>
						<th>
							<input type="checkbox" />
						</th>
						<th>Key</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody id="params-list">
					{rows.map((row) => (
						<tr key={row.id}>
							<td>
								<input type="checkbox" checked={row.include} onChange={() => handleIncludeChange(row)} />
							</td>
							<td>
								<input type="text" value={row.key} onChange={(e) => handleInputChange(row.id, "key", e.target.value)} />
							</td>
							<td>
								<input type="text" value={row.value} onChange={(e) => handleInputChange(row.id, "value", e.target.value)} />
							</td>
							<td>
								<button type="button" onClick={() => deleteRow(row.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button type="button" onClick={addRow}>
				Add Row
			</button>
		</div>
	);
}

export default Params;
