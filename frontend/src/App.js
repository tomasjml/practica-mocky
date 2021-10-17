import "./App.css";
import MockyFormContainer from "./components/mockyForm/MockyFormContainer";
import { Stack } from "react-bootstrap";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import { Redirect, Route, Switch } from "react-router-dom";
import MockyTableContainer from "./components/mockyTable/MockyTableContainer";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route exact path="/">
          <Redirect to="/form" />
        </Route>
        <Route exact path="/form">
          <Stack gap={3}>
            <MockyFormContainer />
          </Stack>
        </Route>
        <Route exact path="/table">
          <MockyTableContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
