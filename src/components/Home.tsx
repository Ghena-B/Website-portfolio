import React, {useEffect, useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import {Link} from "react-scroll";
import './styles/style.css'
import TypewriterComponent from "./TypewriterComponent";

export const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [startTouchY, setStartTouchY] = useState(null);
    const [maxScroll, setMaxScroll] = useState(window.innerHeight);

    const handleResize = () => {
        setMaxScroll(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScroll = (event: any) => {
        if (event.deltaY < 0 && scrollPosition > 0) {
            // Scrolling up
            setScrollPosition((prev) => Math.max(prev - 50, 0));
        } else if (event.deltaY > 0 && scrollPosition < maxScroll) {
            // Scrolling down
            event.preventDefault();
            setScrollPosition((prev) => prev + 50);
        }
    };

    const handleTouchStart = (event: any) => {
        setStartTouchY(event.touches[0].clientY);
    };

    const handleTouchMove = (event: any) => {
        if (!startTouchY) return;

        const touchY = event.touches[0].clientY;
        const deltaY = startTouchY - touchY;

        if (deltaY > 0 && scrollPosition < maxScroll) {
            // Swiping up
            event.preventDefault();
            setScrollPosition((prev) => prev + (deltaY * 0.5)); // Adjust speed as needed
        } else if (deltaY < 0 && scrollPosition > 0) {
            // Swiping down
            setScrollPosition((prev) => Math.max(prev + (deltaY * 0.5), 0)); // Adjust speed as needed
        }

        setStartTouchY(touchY); // Update startTouchY for the next touchmove event
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, {passive: false});
        window.addEventListener('touchstart', handleTouchStart, {passive: false});
        window.addEventListener('touchmove', handleTouchMove, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [scrollPosition, startTouchY]);

    return (
        <Container id="home" fluid
                   className="d-flex flex-column justify-content-md-center align-content-center text-center mt-md-0 mt-5">
            <div style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'transform 0.3s ease-in-out'
            }}>
                <h1 className="font-weight-bold" style={{
                    position: 'relative',
                    fontSize: "10rem"
                }}>
                    Hello
                </h1>
            </div>
            <TypewriterComponent/>
            <div className="d-inline-block mt-4">
                <Button variant="primary">
                    <Link to="contact" smooth={true} duration={300} className="nav-link">Contact me</Link>
                </Button>
            </div>
        </Container>
    );
};