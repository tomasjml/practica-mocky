// React
import PropTypes from "prop-types";

//Libraries
// the hoc
import { withTranslation } from "react-i18next";

// Components from Bootstrap 5
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MockyFormComponent = ({ t }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <>
      <div className="card border-primary m-5 p-4">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="card-title text-center">
                <h3>{t("designMocks")}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card-subtitle mb-2 text-center text-muted">
                {t("anyRequest")}
              </div>
            </div>
          </div>
          <Form>
            <Row className="g-2">
              <Col md>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("formHTTPStatus")}</Form.Label>
                  <Form.Select
                    defaultValue="200"
                    itemRef={register("status", {
                      required: "Required",
                      pattern: {
                        message: "Need to select one option",
                      },
                    })}
                    aria-label="Default select example"
                  >
                    <option disabled value>
                      {" "}
                      1xx Informational Response
                    </option>
                    <option value="100">100 - Continue</option>
                    <option disabled value>
                      {" "}
                      2xx Success
                    </option>
                    <option value="200">200 - Ok</option>
                    <option disabled value>
                      {" "}
                      4xx Client Errors
                    </option>
                    <option value="404">404 - Not Found</option>
                    <option disabled value>
                      {" "}
                      5xx Server Errors
                    </option>
                    <option value="500">500 - Internal Server Error</option>
                  </Form.Select>
                  {errors.status && errors.email.message}
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
              <Col xs lg="3">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(onSubmit);
                  }}
                >
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
        </div>
      </div>
    </>
  );
};

MockyFormComponent.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(MockyFormComponent);
