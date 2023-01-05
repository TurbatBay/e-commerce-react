import React from "react"
import {Nav, NavDropdown, NavLink} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';

function SubMenu() {
    return (
        <div className="submenu-container">
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

            <div className="submenu-middle-dropdown">Middle hesegee hiih chakra hursengue</div>

            <div>30 Days Free Return</div>
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