// React
import PropTypes from "prop-types";

//Libraries
// the hoc
import { withTranslation } from "react-i18next";

// Components from Bootstrap 5
import { Card } from "react-bootstrap";

const MockyComponent = ({ t }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{t("welcome")}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {t("anyRequest")}
          </Card.Subtitle>
          <Card.Text>Form will be here</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

MockyComponent.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(MockyComponent);
