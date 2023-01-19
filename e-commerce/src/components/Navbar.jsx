import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./images/electon-logo.png";
import { Person, Heart, CartCheck, HeartFill } from "react-bootstrap-icons";
import SubMenu from "./SubMenu";
import IconCount from "./images/icon-count.png";
import { Dropdown } from "react-bootstrap";
import Help from "./Help";
import dropData from "../data/dropData";
import { Link } from "react-router-dom";

function NavBar(props) {
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

              <Link to="./login">Sign in</Link>
            </div>

            <Dropdown>
              <Dropdown.Toggle
                variant="primary"
                id="dropdown-basic"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#003f62",
                  border: "none",
                }}
              >
                <Heart className="heart-nav"></Heart>
                <i className="bi bi-heart-fill">{props.wishlist.length}</i>
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-menu">
                <Dropdown.Item className="me-6">
                  {props.wishlist.map((w, index) => {
                    return (
                      <div className="item">
                        <div className="item-card">
                          <img width="100px" src={w.imgURL} alt="" />
                          <p className="item-title">{w.name}</p>
                          <p className="item-price">{w.price}</p>
                        </div>

                        <button
                          className="item-btn"
                          onClick={() => {
                            console.log("remove from wishlist");
                            console.log(w.id);
                            props.setWishlist(
                              props.wishlist.filter((wish) => wish.id !== w.id)
                            );
                          }}
                        >
                          <img
                            className="xMark"
                            src="data:image/png;base64,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"
                            alt="zurag"
                          />
                        </button>
                      </div>
                    );
                  })}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

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
              <Dropdown.Item href="#/action-1">Camera</Dropdown.Item>
              <Dropdown.Item href="#/action-2">PC</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tablets</Dropdown.Item>
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
