import "./App.css";
import MockyContainer from "./components/mocky/MockyContainer";
import { Stack } from "react-bootstrap";
import NavBarContainer from "./components/NavBar/NavBarContainer";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Stack gap={3}>
        <MockyContainer />
      </Stack>
    </div>
  );
}

export default App;
