import React, { useState } from "react";
import AuthenticationComponent from "../component/AuthenticationComponent";
import { authUser as authenticateUser, setAuthInformation } from "../service";

/**
 * @function AuthenticationContainer
 * @description Container for Authentication Component
 * @param {object} props
 * @returns {object} Authentication Component
 */
const AuthenticationContainer = () => {
	const [response, setResponse] = useState({});

	const authUser = async (username, password) => {
		await authenticateUser({ username: username, password: password }).then(data => {
			setResponse(data);
		});
	};

	const onSave = async data => {
		await authUser(data.username, data.password)
			.then(() => {
				// Register returned data using service
				setAuthInformation(response.username, response.token);
			})
			.then(() => {
				// Redirect to home
				window.location.href = "/form";
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<>
			<AuthenticationComponent onSave={onSave} />
		</>
	);
};

export default AuthenticationContainer;
