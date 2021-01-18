import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../impostagram.png';

export default function CustomNavbar() {
    return (
        <Navbar bg="light" variant="light" sticky="top" className="common">
            <Navbar.Brand href="/" className="logo">
                <img
                    src={logo}
                    height="35"
                    className="d-inline-block align-middle"
                    alt="Impostagram logo"
                />
                {'   '}
                Impostagram
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/add">Add</Nav.Link>
                <Nav.Link href="/random">Random</Nav.Link>
            </Nav>
        </Navbar>
    );
}
