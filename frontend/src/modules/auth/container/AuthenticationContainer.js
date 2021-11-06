import React, { useState } from "react";
import AuthenticationComponent from "../component/AuthenticationComponent";
import { authUser as authenticateUser } from "../service";

const AuthenticationContainer = () => {
	const [token, setToken] = useState("");
	const authUser = async (username, password) => {
		await authenticateUser({ username: username, password: password }).then(data => {
			setToken(data);
			console.log(data);
			console.log(token);
		});
	};

	const onSave = data => {
		authUser(data.username, data.password);
	};

	return (
		<>
			<AuthenticationComponent onSave={onSave} />
		</>
	);
};

export default AuthenticationContainer;
