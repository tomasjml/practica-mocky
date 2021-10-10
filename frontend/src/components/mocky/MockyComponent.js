import { Card } from "react-bootstrap";

const MockyComponent = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Mocky</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Any request you need!
          </Card.Subtitle>
          <Card.Text>Form will be here</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MockyComponent;
