import "./App.css";
import MockyFormContainer from "./components/mockyForm/MockyFormContainer";
import { Stack } from "react-bootstrap";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route path="/form">
          <Stack gap={3}>
            <MockyFormContainer />
          </Stack>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
