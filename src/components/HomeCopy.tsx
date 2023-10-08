import React, {useLayoutEffect, useRef} from 'react';
import {Button, Container} from 'react-bootstrap';
import {Link} from 'react-scroll';
import './styles/style.css';
import TypewriterComponent from './TypewriterComponent';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const HomeCopy = () => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (slider.current) {
            let ctx = gsap.context(() => {
                // Animation for the transparent panel moving to the left
                let movingPanel = gsap.utils.toArray(".moving-panel");
                gsap.to(movingPanel, {
                    xPercent: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: slider.current,
                        pin: true,
                        scrub: 1,
                        start: "top top",
                        end: () => "+=" + slider.current!.offsetWidth,
                    }
                });

                let oppositePanel = gsap.utils.toArray(".opposite-panel");
                gsap.fromTo(
                    oppositePanel,
                    {x: "-100%"},
                    {
                        x: "0%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: document.body,
                            scrub: 1,
                            start: "top top",
                            end: () => "+=" + slider.current!.offsetWidth,
                        }
                    }
                );
            }, component);

            return () => ctx.revert();
        }
    }, [component, slider]);
    return (

        <div className="App" ref={component}>
            <div ref={slider} className="containerz" style={{width: '100%'}}>
                <div className="description panel moving-panel">
                    <h1
                        className="font-weight-bold"
                        style={{
                            fontSize: '14rem',
                        }}
                    >
                        Hello
                    </h1>
                    <TypewriterComponent/>
                    <div className="d-inline-block mt-4">
                        <Button variant="primary">
                            <Link to="contact" smooth={true} duration={300} className="nav-link">
                                Contact me
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="opposite-panel"></div>
            </div>
        </div>

    );
};


/*
<Container
    id="home"
    fluid
    className="d-flex flex-column justify-content-md-center align-content-center text-center mt-md-0 mt-5"
    style={{minHeight: '100vh'}}
    ref={component}

>
    <div ref={slider} className="container" >
        <div className="description panel moving-panel" >
            <h1
                className="font-weight-bold"
                style={{
                    position: 'relative',
                    fontSize: '10rem',
                }}
            >
                Hello
            </h1>
            <TypewriterComponent/>
            <div className="d-inline-block mt-4">
                <Button variant="primary">
                    <Link to="contact" smooth={true} duration={300} className="nav-link">
                        Contact me
                    </Link>
                </Button>
            </div>
        </div>
        <div className="opposite-panel"></div>
    </div>
</Container>*/
