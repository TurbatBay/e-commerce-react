import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./images/electon-logo.png";
import { Person, Heart, CartCheck } from "react-bootstrap-icons";
import SubMenu from "./SubMenu";
import IconCount from "./images/icon-count.png";
import { Dropdown } from "react-bootstrap";
import Help from "./Help";
import dropData from "../data/dropData";
import { Link } from "react-router-dom";

function NavBar() {
  const dropDownData = dropData.map((data) => {
    return <SubMenu title={data.title} />;
  });

  return (
    <>
      <div className="help">
        <Help />
      </div>
      <Navbar expand="xxl" className="m-auto navbar-container">
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-3-flex">
            <Link to="./">
              <img src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search any thing"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="warning">Search</Button>
            </Form>
          </Navbar.Collapse>

          <div className="navbar-rest-flex">
            <div className="navbar-sign-in">
              <a href="#">
                <Person color="white" size="30px" />{" "}
              </a>

              <Link to="./register">Sign in</Link>
            </div>
            <div className="navbar-heart-icon">
              <a href="#">
                <Heart color="white" size="20px" />{" "}
              </a>
              <img src={IconCount} width="15px" />
            </div>
            <div className="navbar-market-icon">
              <a href="#">
                <CartCheck color="white" size="20px" />{" "}
              </a>
              <img src={IconCount} width="15px" />
            </div>
          </div>
        </Container>
      </Navbar>

      <div className="submenu d-flex">
        <div className="submenu-first-dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Browse Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {dropDownData}
        <div className="submenu-text">30 Days Free Return</div>
      </div>
    </>
  );
}

export default NavBar;
