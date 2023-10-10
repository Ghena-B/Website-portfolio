import React, {useLayoutEffect, useRef} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-scroll';
import '../styles/style.css';
import './Home.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TypewriterComponent from "./TypewriterComponent";
import HomeButton from "../../common/HomeButton";

gsap.registerPlugin(ScrollTrigger);
export const Home = () => {
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
                    duration: 1,
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
                        duration: 1,
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
                    <div className="panel-content">
                        <h1
                            className="font-weight-bold"
                            style={{
                                fontSize: '20vw',
                            }}
                        >
                            hello
                        </h1>
                        <TypewriterComponent/>
                        <div className="d-inline-block mt-4">
                            <HomeButton/>
                        </div>
                    </div>
                </div>
                <div className="opposite-panel"></div>
            </div>
        </div>
    );
};