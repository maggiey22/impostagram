import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function CustomNavbar() {
    return (
        <Navbar bg="light" variant="light" sticky="top" className="common">
            <Navbar.Brand href="/" className="logo">
                <img
                    src="/impostagram.png"
                    height="35"
                    className="d-inline-block align-middle"
                    alt="Impostgram logo"
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
