class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "Url Validation Error";
	}
}

class Fetch {
	#baseUrl = "";
	#requestInterceptor = null;
	#responseInterceptor = null;

	constructor(baseUrl = "", requestInterceptor = null, responseInterceptor = null) {
		if (!!baseUrl && typeof baseUrl !== "string") throw new ValidationError("Base URL must be a string");

		this.#baseUrl = baseUrl;
		this.#requestInterceptor = requestInterceptor;
		this.#responseInterceptor = responseInterceptor;
	}

	async #handleRequest(method, key, data = null) {
		let url = `${this.#baseUrl}${key}`;
		let options = {
			method,
			headers: {
				"Content-type": "application/json"
			}
		};

		if (data) {
			options.body = JSON.stringify(data);
		}

		if (this.#requestInterceptor) {
			({ url, options } = await this.#requestInterceptor(url, options));
		}

		try {
			let response = await fetch(url, options);

			if (this.#responseInterceptor) {
				response = await this.#responseInterceptor(response);
			}

			if (!response.ok) {
				console.error(response);
				throw new Error(`${response.status} - ${response.statusText}`);
			}

			return await response.json();
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async get(key) {
		return await this.#handleRequest("GET", key);
	}

	async post(key, data) {
		return await this.#handleRequest("POST", key, data);
	}

	async delete(key) {
		return await this.#handleRequest("DELETE", key);
	}

	async patch(key, data) {
		return await this.#handleRequest("PATCH", key, data);
	}

	async put(key, data) {
		return await this.#handleRequest("PUT", key, data);
	}
}

function useFetch(baseURL) {
	const requestInterceptor = async (url, options) => {
		console.log("Request Interceptor:", { url, options });
		// You can modify the url or options here, e.g., add authentication headers.
		return { url, options };
	};

	const responseInterceptor = async (response) => {
		console.log("Response Interceptor:", response);
		// You can handle specific status codes or modify the response here.
		if (response.status === 401) {
			// Handle unauthorized errors, e.g., refresh tokens or redirect to login.
		}
		return response;
	};

	const api = new Fetch(baseURL, requestInterceptor, responseInterceptor);
	return {
		api
	};
}

export default useFetch;
