import {Col, Row} from "react-bootstrap";
import "./About.css"
import aboutPhoto from "../../assets/images/20230602_1728031.jpg"
import AboutButton from "../../common/AboutButton";
import {useEffect, useRef} from "react";

export const About = () => {
    const contentWrapperRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const elem = contentWrapperRef.current;
        if (elem) {
            const rect = elem.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                elem.classList.add('animate');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div id={"about"}
             className={"about-container container-fluid pt-3 pb-3"}>
            <Row>
                <Col md={6}
                     className={"image-container d-flex justify-content-md-end justify-content-center order-2 order-md-1"}>
                    <div className="img-wrapper">
                        <img src={aboutPhoto}
                             className="img-fluid about-img"
                             alt="aboutPhoto"
                             loading="lazy"/>
                    </div>
                </Col>
                <Col md={6}
                     className={"content-container d-flex align-items-stretch order-1 order-md-2 justify-content-center justify-content-md-start"}>
                    <div
                        className="content-wrapper d-flex flex-column flex-grow-1 justify-content-md-start justify-content-center "
                        ref={contentWrapperRef}>
                        <h2 className={"font-weight-bold about-title"}
                            data-aos="slide-right"
                            data-aos-delay="200">
                            About me
                        </h2>
                        <div className={"about-content"}>
                            <div>I'm <span className="bold-text">GHENADIE BUJAG</span>, a mid-level Front-End Developer
                                with a passion for <span className="bold-text">crafting interactive and user-friendly
                                    web experiences.
                            </span>
                            </div>
                            <div>
                                I bridge the gap between design and development, translating complex visuals into highly
                                interactive and responsive interfaces. Throughout the development process, I prioritize
                                clean, well-structured code that adheres to best practices.
                            </div>
                            <div>Beyond technical expertise, I value collaboration. I thrive in team environments,
                                effectively communicating with designers and back-end developers to bring projects to
                                life.
                            </div>
                            <div>Take a look around my portfolio to explore my projects and get a sense of my
                            development style. I'm always eager to learn and contribute to new and exciting challenges :)
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
