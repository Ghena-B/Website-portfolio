import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {Col, Container, Row} from "react-bootstrap";
import {Contact} from "./components/Contact";



function App() {
    return (
        <Container fluid>
            <Row className="min-vh-100 flex-column flex-md-row">
                <Col xs={12} md={3} xl={2} className="p-0 bg-dark"><Header/></Col>
                <Col xs={12} md={9} xl={10}>
                    <div className="main-content">
                        <Home/>
                        <About/>
                        <Projects/>
                        <Contact/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;



