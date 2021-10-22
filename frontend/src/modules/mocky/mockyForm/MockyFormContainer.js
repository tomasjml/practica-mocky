import MockyFormComponent from "./MockyFormComponent";
import { createMocky } from "../service";

const MockyFormContainer = () => {
	const onSave = async data => {
		const mocky = {
			id: "",
			route: "",
			method: data.method,
			headers: data.headers,
			statusCode: data.status,
			contentType: data.contentType,
			body: data.body,
			endpointName: data.name,
			endpointDescription: data.description,
			expirationTime: "Day",
			creationDate: new Date().toISOString(),
			expirationDate: new Date().toISOString(),
			user: {
				username: "admin"
			}
		};
		console.log("Mocky sent in post: ", mocky);
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
