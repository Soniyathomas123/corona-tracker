import react, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';



class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
           <div>
             <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Covid-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to ="/india">India</Link>
      <Link  className="nav-link" to="/world">World</Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
           </div>
        )

    }
}
export default Header;