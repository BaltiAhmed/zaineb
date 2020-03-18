import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route } from "react-router-dom";


export default class Navmenu extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Acceuil</Nav.Link>
                    <Nav.Link href="features">Offre d'emploi</Nav.Link>
                    <Nav.Link href="pricing">Entreprise</Nav.Link>
                </Nav>
                
                <Form inline>
                    <FormControl type="text" placeholder="Metier" className="mr-sm-2" />
                    <FormControl type="text" placeholder="Ville" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        )
    }
}