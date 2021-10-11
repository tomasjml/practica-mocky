import "./App.css";
import MockyContainer from "./components/mocky/MockyContainer";
import { Container, Stack } from "react-bootstrap";

function App() {
  return (
    <Container fluid="lg">
      <Stack className="col-md-5 mx-auto" gap={3}>
        <MockyContainer />
      </Stack>
    </Container>
  );
}

export default App;
