
import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import mussum1 from '../../imagens/2288359.jpg';
import mussum2 from '../../imagens/Mussum-1.webp';
import mussum3 from '../../imagens/mussum.jpg';
import mussum4 from '../../imagens/mussumdivulgacao.jpg';

document.title = 'Avaliação Web/Mobile'

const Dashboard = () => (
    <Container>
        <Row>
            <Col xs={12} md={3} data-aos="fade-up">
                <Card>
                    <Card.Img variant="top" src={mussum1} />
                    <Card.Body>
                        <Card.Title>Mussum Ipsum</Card.Title>
                        <Card.Text>
                            Cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Pra lá , depois divoltis porris, paradis. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3} data-aos="fade-up">
                <Card>
                    <Card.Img variant="top" src={mussum2} />
                    <Card.Body>
                        <Card.Title>Mussum Ipsum</Card.Title>
                        <Card.Text>
                            Cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Pra lá , depois divoltis porris, paradis. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3} data-aos="fade-up">
                <Card>
                    <Card.Img variant="top" src={mussum3} />
                    <Card.Body>
                        <Card.Title>Mussum Ipsum</Card.Title>
                        <Card.Text>
                            Cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Pra lá , depois divoltis porris, paradis. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={3} data-aos="fade-up">
                <Card>
                    <Card.Img variant="top" src={mussum4} />
                    <Card.Body>
                        <Card.Title>Mussum Ipsum</Card.Title>
                        <Card.Text>
                            Cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Pra lá , depois divoltis porris, paradis. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Dashboard;