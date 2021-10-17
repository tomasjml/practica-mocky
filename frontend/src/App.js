import "./App.css";
import MockyFormContainer from "./modules/mockyForm/MockyFormContainer";
import NavBarContainer from "./modules/NavBar/NavBarContainer";
import { Redirect, Route, Switch } from "react-router-dom";
import MockyTableContainer from "./modules/mockyTable/MockyTableContainer";
import NoMatchRoute from "./modules/core/NoMatchRoute/NoMatchRoute";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route exact path="/">
          <Redirect to="/form" />
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
      </Switch>
    </div>
  );
}

export default App;
