import "./App.css";
import MockyFormContainer from "./components/mockyForm/MockyFormContainer";
import { Stack } from "react-bootstrap";
import NavBarContainer from "./components/NavBar/NavBarContainer";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Stack gap={3}>
        <MockyFormContainer />
      </Stack>
    </div>
  );
}

export default App;
