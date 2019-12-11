import React from "react";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import mussum from '../../imagens/2288359.jpg';

document.title = 'Avaliação Web/Mobile - Sobre'

const Dashboard = () => (
    <Container>
        <Card border="dark">
            <Card.Header>Contato</Card.Header>
            <Row style={{ padding: '2em' }}>
                <Col xs={12} md={6} data-aos="fade-up">
                    <Card style={{ border: '0' }}>
                        <Card.Body>
                            <Card.Title>Dados de contato</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Leandro Henriques</Card.Subtitle>
                            <Card.Text>E-mail: lehenriques@gmail.com</Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={12} md={6} data-aos="fade-up">
                    <Form>
                        <Form.Group controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" />
                        </Form.Group>
                        <Form.Group controlId="formAssunto">
                            <Form.Label>Assunto</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu assunto" />
                        </Form.Group>

                        <Button variant="dark" type="submit">Enviar</Button>
                    </Form>
                </Col>
            </Row>
        </Card>
    </Container>
);

export default Dashboard;