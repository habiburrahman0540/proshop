import React from 'react';
import {Navbar,Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import logout from '../actions/userActions'
const Header = () => {
    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        dispatch(logout())

    }
    return (
        
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                 <LinkContainer to="/">
                     <Navbar.Brand>Pro-shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                         <Nav.Link href="/">Home</Nav.Link>
                        </LinkContainer>
                         <LinkContainer to="/card">
                        <Nav.Link><i className="fas fa-shopping-cart"></i>Card</Nav.Link>
                        </LinkContainer>
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id={userInfo.username}>
                            <LinkContainer to="/profile">
                                <NavDropdown.Item>
                                    Profile
                                </NavDropdown.Item>
                            </LinkContainer>
                           
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                           
                        </NavDropdown>
                    ) :(
                        <LinkContainer to="/login">
                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                    )}
                        

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
 
         </header>
        
    );
}

export default Header;