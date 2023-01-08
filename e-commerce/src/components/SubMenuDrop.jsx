import React from "react"
import Container from 'react-bootstrap/Container';
import { propTypes } from "react-bootstrap/esm/Image";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import dropData from "../data/dropData";



function SubDropDown (props) {



    return(
        <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={props.title}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
    )
}

export default SubDropDown