import {Col, Row} from "react-bootstrap";
import "./About.css"
import aboutPhoto from "../../assets/images/20230602_1728031.jpg"
import AboutButton from "../../common/AboutButton";

export const About = () => {

    return (
        <div id={"about"} className={"about-container container-fluid pt-3 pb-3"}>
            <Row>
                <Col md={6}
                     className={"image-container d-flex justify-content-md-end justify-content-center order-2 order-md-1"}>
                    <div className="img-wrapper">
                        <img src={aboutPhoto} className="img-fluid about-img" alt=""/>
                    </div>
                </Col>
                <Col md={6}
                     className={"content-container d-flex align-items-stretch order-1 order-md-2 justify-content-center justify-content-md-start"}>
                    <div
                        className="content-wrapper d-flex flex-column flex-grow-1 justify-content-md-start justify-content-center">
                        <h2 className={"font-weight-bold about-title"}>About me</h2>
                        <div className={"about-content"}>
                            <div>I'm <span className="bold-text">GHENADIE BUJAG</span>, a passionate Frontend Developer.
                            </div>
                            <div>
                                I have integrated my strong analytical and problem-solving skills, honed through a
                                diverse
                                educational background, into my passion for web development. Specializing in
                                technologies
                                like React, Redux, and TypeScript, I focus on creating functional, user-centric
                                applications. My social network platform exemplifies my dedication to quality,
                                scalability,
                                and maintainability in web solutions. Beyond coding, my interests include photography,
                                playing the guitar, and exploring new places.
                            </div>
                            <div>I am keen to contribute to innovative projects and am open to new opportunities in web
                                development.
                            </div>
                        </div>
                        <AboutButton/>
                    </div>
                </Col>
            </Row>
            <div className="button-container">
                <AboutButton/>
            </div>
        </div>
    )
}
