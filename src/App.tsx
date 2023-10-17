import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/HomeSection/Home";
import {Header} from "./components/HeaderSection/Header";
import {About} from "./components/AboutSection/About";
import {Projects} from "./components/ProjectsSection/Projects";
import {Col, Container, Row} from "react-bootstrap";
import {Contact} from "./components/ContactSection/Contact";
import "./components/styles/style.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import {useEffect, useState} from "react";

function App() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        const hoverElements = document.querySelectorAll('.hover-enlarge');
        const cursor = document.querySelector('.cursor') as HTMLElement;

        const editCursor = (e: MouseEvent) => {
            const {clientX: x, clientY: y} = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        };

        const enlargeCursor = () => cursor.style.transform = 'scale(2)';
        const resetCursor = () => cursor.style.transform = 'scale(1)';

        hoverElements.forEach(element => {
            element.addEventListener('mouseover', enlargeCursor);
            element.addEventListener('mouseleave', resetCursor);
        });
        window.addEventListener('mousemove', editCursor);

        return () => {
            hoverElements.forEach(element => {
                element.removeEventListener('mouseover', enlargeCursor);
                element.removeEventListener('mouseleave', resetCursor);
            });
            window.removeEventListener('mousemove', editCursor);
        };
    }, [isTouchDevice]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease',
            once: false,
        });
    }, []);

    return (
        <Container fluid className="p-o">
            {!isTouchDevice && <div className="cursor"></div>}
            <Row className="min-vh-100 flex-column flex-md-row m-o p-o">
                <Col xs={12} md={3} xl={2} className="p-0 custom-navbar"
                     style={{zIndex: 1000, position: "sticky"}}><Header/></Col>
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



