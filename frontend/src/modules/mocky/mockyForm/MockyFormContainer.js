import MockyFormComponent from "./MockyFormComponent";
import { createMocky } from "../service";
import NavBarContainer from "../../NavBar/NavBarContainer";
import { getUsername } from "../../auth/service";

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
				username: getUsername()
			}
		};
		// const response = For message of warning or success
		await createMocky(mocky);
	};

	return (
		<>
			<NavBarContainer />
			<MockyFormComponent onSave={onSave} />
		</>
	);
};

export default MockyFormContainer;
