import {SocialMediaLinksList} from "../SocialMediaLinksList";
import {ContactForm} from "./ContactForm";
import {Col, Container, Row} from "react-bootstrap";
import "./Contact.css"

export const Contact = () => {
    return (
        <div id={"contact"} className={"contact-wrapper container-fluid d-flex flex-column "}>
            <div className={"contact-title"}>
                <h4 className={"text-center"}>Let's talk</h4>
            </div>
            <Container fluid className={"mb-5 flex-grow-1"}>
                <Row className={'d-flex'}>
                    <Col md={6} className={'contact-subtitle1'}>
                        <p>gbujag@gmail.com <br/>9 Bujorilor St.<br/>700548 Iași, Romania</p>
                    </Col>
                    <Col md={6} className={'contact-subtitle2'}>
                        And create something together!
                    </Col>
                </Row>
                <Row className={"contact-container mt-5"}>
                    <Col md={6} className={"contact-form p-0"}>
                        <ContactForm/>
                    </Col>
                    <Col md={6} className={"contact-col2"}>
                        {/* If there is additional content for this column, add it here */}
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-center pb-4 ">
                <SocialMediaLinksList alternateColor={true}/>
            </div>
        </div>
    )
}



