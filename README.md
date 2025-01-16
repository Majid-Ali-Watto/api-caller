# Api Caller

## Overview
The `Api Caller` component provides a user interface to configure and make HTTP requests to APIs. Users can choose the request method, specify the URL, provide optional request body data, and view the server's response. This component is an integral part of an interactive API testing and demonstration tool.

---

## Key Features

1. **HTTP Method Selection**:
   - Users can choose from standard HTTP methods (e.g., `GET`, `POST`, `PUT`, `DELETE`).
   - The selected method is managed via the `method` state.

2. **URL Input**:
   - A text input box allows users to specify the API endpoint.
   - The entered URL is managed using the `url` state.

3. **Request Body Configuration**:
   - For methods like `POST` or `PUT`, users can define a request body through the `SectionViewer` component.
   - The request body is stored in the `body` state.

4. **API Request Execution**:
   - A button triggers the API request based on the selected method, URL, and body.
   - The response is displayed dynamically in the `ResponseArea` component.

5. **Response Display**:
   - The server's response is rendered in a dedicated area, making it easy to visualize the result.

---


1. **`Methods`**
   - Dropdown for selecting the HTTP method.
   - Updates the `method` state.

2. **`UrlBox`**
   - Text input for specifying the API endpoint.
   - Updates the `url` state.

3. **`SendButton`**
   - Button to execute the API call.
   - Uses the `method`, `url`, and `body` states to send the request.
   - Updates the `response` state with the server's reply.

4. **`SectionViewer`**
   - Interface for configuring advanced request options, such as the request body.
   - Updates the `url` and `body` states.

5. **`ResponseArea`**
   - Displays the response received from the API.
   - Receives the `response` state as a prop.

---

## States Used
1. **`method`** (`string`): Stores the selected HTTP method. Default: `GET`.
2. **`url`** (`string`): Stores the entered API endpoint. Default: `https://fakestoreapi.com/products`.
3. **`response`** (`object`): Holds the server's response to the API request. Default: `{}`.
4. **`body`** (`object`): Contains the request body data for methods like `POST`. Default: `{}`.

---

## Workflow
1. User selects the HTTP method using the `Methods` dropdown.
2. User specifies the API endpoint in the `UrlBox` input field.
3. Optionally, the user configures a request body via the `SectionViewer` component.
4. User clicks the `SendButton` to execute the request.
5. The response is fetched from the server and displayed in the `ResponseArea`.

---

## Usage Example
This component is designed for API testing and demonstration purposes, making it useful for developers exploring or debugging RESTful APIs. It simplifies crafting requests and viewing responses in real time.

---

## Notes
- Ensure the API endpoint specified in the `url` field is reachable and supports the selected HTTP method.
- Properly handle error responses or timeouts to ensure a smooth user experience.
- Extendable to support additional features like headers, query parameters, or authentication.

---

## Conclusion
The `ApiCallSection` component is a powerful tool for interacting with APIs. Its intuitive interface allows users to quickly configure requests and visualize responses, making it a valuable addition to any developer-focused application.

