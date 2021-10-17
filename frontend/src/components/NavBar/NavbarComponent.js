import { Button, Nav, Navbar } from "react-bootstrap";
import Logo from "../../logo-dark.png";
// the hoc
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const NavbarComponent = ({ t }) => {
  const location = useLocation();
  return (
    <Navbar className="p-3" bg="light" expand="lg">
      <Navbar.Brand href="#">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="Mocky logo"
          height="38px"
          width="150.86px"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>{t("anyRequest")}</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/table">
            <Button
              variant="outline-secondary"
              disabled={location.pathname === "/table"}
            >
              {t("manageMocks")}
            </Button>
          </Nav.Link>
          <Nav.Link href="/form">
            <Button variant="primary" disabled={location.pathname === "/form"}>
              {t("newMock")}
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(NavbarComponent);
