
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar className="mb-3em" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Avaliação</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/sobre">Sobre</Nav.Link>
                <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;