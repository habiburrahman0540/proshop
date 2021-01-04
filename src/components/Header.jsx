import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const Header = ()=>{
   return(
       <header>
           <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
               <Container>
                 <LinkContainer to="/">
                 <Navbar.Brand>Proshop</Navbar.Brand>
                 </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/card"> 
    <Nav.Link><i className="fa fa-shopping-cart" aria-hidden="true"></i> Card</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/login">
      <Nav.Link><i className="fa fa-user" aria-hidden="true"></i> Sign In</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
               </Container>
 
</Navbar>
       </header>
   )
}
export default Header;