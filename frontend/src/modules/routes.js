import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AuthenticationContainer from "./auth/container/AuthenticationContainer";
import MockyFormContainer from "./mocky/mockyForm/MockyFormContainer";
import MockyTableContainer from "./mocky/mockyTable/MockyTableContainer";
import NoMatchRoute from "./core/components/NoMatchRoute/NoMatchRoute";

const Routes = () => {
	return (
		<Switch>
			<Router>
				<Route exact path="/auth">
					<AuthenticationContainer />
				</Route>
				<Route exact path="/">
					<Redirect to="/auth" />
				</Route>
				<Route exact path="/form">
					<MockyFormContainer />
				</Route>
				<Route exact path="/table">
					<MockyTableContainer />
				</Route>
				<Route path="*">
					<NoMatchRoute />
				</Route>
			</Router>
		</Switch>
	);
};

export default Routes;
