import {SocialMediaLinksList} from "../SocialMediaLinksList";
import {ContactForm} from "./ContactForm";
import {Col, Row} from "react-bootstrap";
import "./Contact.css"

export const Contact = () => {
    return (
        <div id={"contact"} className={"contact-wrapper container-fluid "}>
            <div className={"contact-title"}><h4>Let's talk</h4></div>
            <Row className={"contact-container m-5"} >
                <Col md={6} className={"contact-form"}>
                    <ContactForm/>
                </Col>
                <Col md={6} className={"contact-media d-flex flex-column justify-content-between align-items-center"}>
                    <div className={"contact-subtitle"}>And create something together!</div>
                    <SocialMediaLinksList alternateColor={true}/>
                </Col>
            </Row>
        </div>
    )
}


