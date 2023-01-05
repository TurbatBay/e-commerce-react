import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./images/electon-logo.png";
import { Person, Heart, CartCheck } from 'react-bootstrap-icons';
import SubMenu from './SubMenu';

function NavBar() {
  return (
    <Navbar  expand="xxl" className='m-auto navbar-container'>
      <Container fluid >
        <Navbar.Brand href="#" className='navbar-3-flex'>
          <img src={Logo} alt='logo'/>
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
        <div className='navbar-rest-flex'>
            <div className='navbar-sign-in'>
              <a href='#'><Person color="white"/> </a>
              <a href='#'>Sign in</a>
            </div>
            <div className='navbar-heart-icon'>
              <a href='#'><Heart color="white"/> </a>
            </div>
            <div className='navbar-market-icon'>
              <a href='#'><CartCheck color="white"/> </a>
            </div>
          </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;



// <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
            
//           >
//             <NavDropdown title="Home" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
            
//             <NavDropdown title="Catalog" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link style={{ color: 'white' }}  href="#action1">Home</Nav.Link>

//             <NavDropdown title="Pages" id="navbarScrollingDropdown" >
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link style={{ color: 'white' }} href="#action1">About us</Nav.Link>

//           </Nav>