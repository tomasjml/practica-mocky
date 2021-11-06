import "./App.css";
import MockyFormContainer from "./modules/mocky/mockyForm/MockyFormContainer";
import NavBarContainer from "./modules/NavBar/NavBarContainer";
import { Redirect, Route, Switch } from "react-router-dom";
import MockyTableContainer from "./modules/mocky/mockyTable/MockyTableContainer";
import NoMatchRoute from "./modules/core/components/NoMatchRoute/NoMatchRoute";
import AuthenticationContainer from "./modules/auth/container/AuthenticationContainer";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/auth">
					<AuthenticationContainer />
				</Route>
				<Route exact path="/">
					<Redirect to="/form" />
				</Route>
				<Route exact path="/form">
					<NavBarContainer />
					<MockyFormContainer />
				</Route>
				<Route exact path="/table">
					<NavBarContainer />
					<MockyTableContainer />
				</Route>
				<Route path="*">
					<NoMatchRoute />
				</Route>
			</Switch>
		</>
	);
}

export default App;
