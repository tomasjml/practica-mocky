import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { getUsername } from "../../auth/service";

/**
 * @function PrivateRouting
 * @param {object} props
 * @returns {object} JSX
 */
const PrivateRoute = ({ Component, ...rest }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		console.log("Window location: ", window.location.pathname);
		const username = getUsername();
		console.log("Username: ", username);
		console.log("Is logged in: ", isLoggedIn);
		if (username) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	return (
		<Route
			{...rest}
			render={props =>
				isLoggedIn ? <Component {...props} /> : <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
			}
		/>
	);
};

PrivateRoute.propTypes = {
	Component: PropTypes.any.isRequired,
	location: PropTypes.object
};

export default PrivateRoute;
