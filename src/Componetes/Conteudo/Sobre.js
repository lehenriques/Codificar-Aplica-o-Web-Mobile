import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

document.title = 'Avaliação Web/Mobile - Sobre'

const Dashboard = () => (
    <Container>
        <Row>
            <Col xs={12} md={8} data-aos="fade-up">
                <Card border="dark" style={{ width: '80vw' }}>
                    <Card.Header>Sobre</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Mé faiz elementum girarzis, nisi eros vermeio. Suco de cevadiss deixa as pessoas mais interessantis.</p>

                            <p>Interagi no mé, cursus quis, vehicula ac nisi. Aenean aliquam molestie leo, vitae iaculis nisl. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Delegadis gente finis, bibendum egestas augue arcu ut est.</p>

                            <p>Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. In elementis mé pra quem é amistosis quis leo.</p>

                            <p>Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Dashboard;