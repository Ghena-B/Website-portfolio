import {Header} from "./Header";
import {Col, Container, Row} from "react-bootstrap";


export const Home = () => {
    return (
        <Container fluid>
            <Row className="min-vh-100 flex-column flex-md-row">
                <Col xs={12} md={3} xl={2} className="p-0 bg-dark"> <Header/></Col>
            </Row>
        </Container>
    )
}
