import React from "react";
import { Nav, NavDropdown, NavLink } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import SubDropDown from "./SubMenuDrop";

function SubMenu(props) {

    
  return (
    <div className="submenu-container">
      

      <div className="submenu-middle-dropdown">
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
      </div>

      
    </div>
  );
}

export default SubMenu;

// const SubMenu = () => {
//     const subMenu =
//     props.children.length > 0 ?(
//         <NavDropdown title={props.title} id="basic-nav-dropdown">

//         </NavDropdown>
//     ) : (
//         <NavLink>{props.children}</NavLink>
//     )
//     return(
//         <div>
//             <Nav className="me-auto">{subMenu}</Nav>
//         </div>
//     );
// };

/* 
import React from "react"
import SubMenu from "./SubMenu"
import {Navbar} from "react-bootstrap"
import menus from '../data/menus'

 function MainMenu () {

    const subMenus = menus.map(menu => {
        console.log(menu)
        return(
            <SubMenu title={menu.title} position={menu.position} />
        )
    })

    return (
        <div>
            
            <div>Here is main menu</div>
            <Navbar bg="light" expand="lg">
                {subMenus}
            </Navbar>
           
        </div>
    )
}

export default MainMenu

*/
