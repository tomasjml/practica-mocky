// React
import PropTypes from "prop-types";

//Libraries
// the hoc
import { withTranslation } from "react-i18next";

// Components from Bootstrap 5
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const MockyFormComponent = ({ t }) => {
  return (
    <>
      <Card border="primary" className="m-5 p-4">
        <Card.Body>
          <Card.Title className="text-center">{t("designMocks")}</Card.Title>
          <Card.Subtitle className="mb-2 text-center text-muted">
            {t("anyRequest")}
          </Card.Subtitle>
          <Form>
            <Row className="g-2">
              <Col md>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("formHTTPStatus")}</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option disabled value>
                      {" "}
                      1xx Informational Response
                    </option>
                    <option value="1">100 - Continue</option>
                    <option disabled value>
                      {" "}
                      2xx Success
                    </option>
                    <option value="2" selected>
                      200 - Ok
                    </option>
                    <option disabled value>
                      {" "}
                      4xx Client Errors
                    </option>
                    <option value="3">404 - Not Found</option>
                    <option disabled value>
                      {" "}
                      5xx Server Errors
                    </option>
                    <option value="4">500 - Internal Server Error</option>
                  </Form.Select>
                  <Form.Text className="text-primary">
                    {t("formHTTPStatusHelp")}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2">
              <Col md>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("formContentType")}</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option value="1">application/json</option>
                    <option value="2">text/html</option>
                    <option value="3">text/js</option>
                    <option value="4">text/css</option>
                    <option value="5">text/json</option>
                    <option value="6">text/plain</option>
                  </Form.Select>
                  <Form.Text className="text-primary">
                    {t("formContentTypeHelp")}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("formCharset")}</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option value="1">UTF-8</option>
                    <option value="2">ISO-8859-1</option>
                    <option value="3">UTF-16</option>
                  </Form.Select>
                  <Form.Text className="text-primary">
                    {t("formCharsetHelp")}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2">
              <Col md>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>{t("formHeaders")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder={
                      '"{\n' + '  "X-Foo-Bar": "Hello World"\n' + '}"'
                    }
                  />
                  <Form.Text className="text-primary">
                    {t("formHeadersHelp")}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2">
              <Col md>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>{t("formResponseBody")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={12}
                    placeholder={
                      '"{\n' +
                      '  "identity": {\n' +
                      '    "id": "b06cd03f-75d0-413a-b94b-35e155444d70",\n' +
                      '    "login": "John Doe"\n' +
                      "  },\n" +
                      '  "permissions": {\n' +
                      '    "roles": [\n' +
                      '      "moderator"\n' +
                      "    ]\n" +
                      "  }\n" +
                      '}"'
                    }
                  />
                  <Form.Text className="text-primary">
                    {t("formHTTPStatusHelp")}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs lg="4">
                <Button variant="primary" type="submit">
                  {t("formSubmit")}
                </Button>
              </Col>
              <Col xs lg="3">
                <Form.Group>
                  <Form.Select aria-label="Default select example" required>
                    <option value="1">Never expire</option>
                    <option value="2">Expire in 1 year</option>
                    <option value="3">Expire in 1 Month</option>
                    <option value="4">Expire in 1 week</option>
                    <option value="5">Expire in 1 day</option>
                    <option value="6">Expire in 1 hour</option>
                    <option value="7">Expire in 1 minute</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

MockyFormComponent.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(MockyFormComponent);
