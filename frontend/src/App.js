import "./App.css";
import MockyContainer from "./components/mocky/MockyContainer";
import { Container, Stack } from "react-bootstrap";
import NavBarContainer from "./components/NavBar/NavBarContainer";

function App() {
  return (
    <div className="bg-black">
      <NavBarContainer />
      <Container fluid="sm">
        <Stack gap={3}>
          <MockyContainer />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
