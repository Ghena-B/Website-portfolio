import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/HomeSection/Home";
import {Header} from "./components/HeaderSection/Header";
import {About} from "./components/AboutSection/About";
import {Projects} from "./components/ProjectsSection/Projects";
import {Col, Container, Row} from "react-bootstrap";
import {Contact} from "./components/ContactSection/Contact";
import "./components/styles/style.css"

function App() {
    return (
        <Container fluid className="p-o">
            <Row className="min-vh-100 flex-column flex-md-row m-o p-o">
                <Col xs={12} md={3} xl={2} className="p-0 custom-navbar" style={{zIndex: 1000, position: "sticky"}}><Header/></Col>
                <Col xs={12} md={9} xl={10} className="p-o">
                    <Home/>
                    <About/>
                    <Projects/>
                    <Contact/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;



