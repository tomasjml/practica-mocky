// React
import PropTypes from "prop-types";

//Libraries
// the hoc
import { withTranslation } from "react-i18next";

// Components from Bootstrap 5
import { Button, Card, Form } from "react-bootstrap";

const MockyComponent = ({ t }) => {
  return (
    <>
      <Card border="primary" className="m-3" style={{ width: "64rem" }}>
        <Card.Body>
          <Card.Title className="text-center">{t("designMocks")}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {t("anyRequest")}
          </Card.Subtitle>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

MockyComponent.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(MockyComponent);
