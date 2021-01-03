import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap'
const Header = ()=>{
   return(
       <header>
           <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
               <Container>
               <Navbar.Brand href="/">Proshop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/card"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Card</Nav.Link>
      <Nav.Link href="/login"><i className="fa fa-user" aria-hidden="true"></i> Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
               </Container>
 
</Navbar>
       </header>
   )
}
export default Header;