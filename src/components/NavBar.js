import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"> Student Registration</Navbar.Brand>

                <Nav className="link">
                    <Link to="./UserDetails">Users</Link>
                </Nav>
            </Container>
        </Navbar>
    )

};
export default NavBar;