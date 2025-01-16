import React, { useState } from "react";

function Authorization() {
	const [authType, setAuthType] = useState("Bearer Token");

	const handleAuthTypeChange = (event) => {
		setAuthType(event.target.value);
	};

	return (
		<div className="token-section">
			<select
				value={authType}
				onChange={handleAuthTypeChange}>
				<option value="Bearer Token">Bearer Token</option>
				<option value="Basic Auth">Basic Auth</option>
				<option value="API Key">API Key</option>
				<option value="OAuth2">OAuth2</option>
			</select>
			{authType === "Bearer Token" && (
				<div className="input-row">
					<label htmlFor="bearer-token">Bearer Token:</label>
					<textarea
						id="bearer-token"
						placeholder="Enter your Bearer Token"></textarea>
				</div>
			)}
			{authType === "Basic Auth" && (
				<>
					<div className="input-row">
						<label htmlFor="username">Username:</label>
						<input
							id="username"
							type="text"
							placeholder="Enter your username"
						/>
					</div>
					<div className="input-row">
						<label htmlFor="password">Password:</label>
						<input
							id="password"
							type="password"
							placeholder="Enter your password"
						/>
					</div>
				</>
			)}
			{authType === "API Key" && (
				<div className="input-row">
					<label htmlFor="api-key">API Key:</label>
					<input
						id="api-key"
						type="text"
						placeholder="Enter your API Key"
					/>
				</div>
			)}
			{authType === "OAuth2" && (
				<>
					<div className="input-row">
						<label htmlFor="client-id">Client ID:</label>
						<input
							id="client-id"
							type="text"
							placeholder="Enter your Client ID"
						/>
					</div>
					<div className="input-row">
						<label htmlFor="client-secret">Client Secret:</label>
						<input
							id="client-secret"
							type="password"
							placeholder="Enter your Client Secret"
						/>
					</div>
				</>
			)}
		</div>
	);
}

export default Authorization;
