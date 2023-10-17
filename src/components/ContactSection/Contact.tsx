import {SocialMediaLinksList} from "../SocialMediaLinksList";
import {ContactForm} from "./ContactForm";
import {Col, Container, Row} from "react-bootstrap";
import "./Contact.css"

export const Contact = () => {
    return (
        <div id={"contact"}
             className={"contact-wrapper container-fluid d-flex flex-column "}>
            <div className={"contact-title"}>
                <h4 className={"text-center"}
                    data-aos="flip-up">Let's talk</h4>
            </div>
            <Container fluid className={"mb-5 flex-grow-1"}>
                <Row className={'d-flex'}>
                    <Col md={6}
                         className={'contact-subtitle1 order-2 order-md-1'}>
                        gbujag@gmail.com, 9 Bujorilor St. 700548 Iași, Romania
                    </Col>
                    <Col md={6}
                         className={'contact-subtitle2 order-1 order-md-2 d-md-block d-flex justify-content-end'}>
                        <p>And create something together</p>
                    </Col>
                </Row>
                <Row className={"contact-container mt-5"}>
                    <Col md={6}
                         className={"contact-form p-0"}>
                        <ContactForm/>
                    </Col>
                    <Col md={6}
                         className={"contact-col2"}
                         data-aos="slide-left">
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-center pb-4">
                <SocialMediaLinksList alternateColor={true}/>
            </div>
        </div>
    )
}



