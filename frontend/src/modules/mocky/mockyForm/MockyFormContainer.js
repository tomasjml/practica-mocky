import MockyFormComponent from "./MockyFormComponent";
import { createMocky } from "../service";

const MockyFormContainer = () => {
	const onSave = async data => {
		// {
		// 	"status": 200,
		// 	"contentType": "application/json",
		// 	"charset": "UTF-8",
		// 	"headers": "{ test: 3 }",
		// 	"responseBody": "\"Hai\"",
		// 	"time": "1"
		// }
		// {
		// 	"id": "",
		// 	"route": "",
		// 	"method": "GET",
		// 	"headers": "",
		// 	"statusCode": 200,
		// 	"contentType": "application/json",
		// 	"content": "{test: 1}",
		// 	"body": "",
		// 	"endpointName": "Example post",
		// 	"endpointDescription": "Description",
		// 	"expirationTime": "Day",
		// 	"creationDate": "",
		// 	"expirationDate": "",
		// 	"user": {
		// 	"username": "admin"
		// }
		// }
		const mocky = {
			id: "",
			route: "",
			endpointName: data.name,
			endpointDescription: data.description,
			method: data.method,
			headers: data.headers,
			statusCode: data.status,
			contentType: data.contentType,
			content: data.responseBody,
			creationDate: new Date().toISOString(),
			user: {
				username: "admin"
			}
		};
		const response = await createMocky(mocky);
		console.log(response);
	};

	return (
		<>
			<MockyFormComponent onSave={onSave} />
		</>
	);
};

export default MockyFormContainer;
