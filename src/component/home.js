import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo, { ReactComponent } from './image/logo.svg';
import './style1.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import SarraIMG from './image/carousel1.jpg'
import danielIMG from './image/carousel2.jpg'
import { BrowserRouter, Link, Route } from "react-router-dom";


export default class Home extends React.Component {

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col>



                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={SarraIMG}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Trouvez le Job de vos rêves !</h3>
                                    <p>Chercher des offres d'emploi par Secteurs</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={danielIMG}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Trouvez le Job de vos rêves !</h3>
                                    <p>Chercher des offres d'emploi par Secteurs</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                        


                    </Col>
                </Row>
                <h1 className="secteur">Secteurs d'activité</h1>
                <Row>
                    <Col> <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>centre d'appel</Card.Title>
                               
                                <Button variant="primary">Decouvrir</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col> <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>industrie</Card.Title>
                             
                                <Button variant="primary">Decouvrir</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col> <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>technologie</Card.Title>
                               
                                <Button variant="primary">Decouvrir</Button>
                            </Card.Body>
                        </Card></Col>
                </Row>

            </Container>

        )
    }
}
