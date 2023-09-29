import React from 'react';
import GraphemeSplitter from 'grapheme-splitter';
import Typewriter from 'typewriter-effect';
import { Button, Container } from 'react-bootstrap';
import {Link} from "react-scroll";

export const Home = () => {
    const stringSplitter = (string: string) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    };

    return (
        <Container id="home" fluid className="d-flex flex-column align-content-center justify-content-center text-center">
            <h1 className="display-1">Hello</h1>
            <h3 className="display-6 mb-6" style={{ minHeight: '8rem' }}><Typewriter
                options={{
                    strings: [
                        "I'm Ghenadie Bujag 👋",
                        "A Passionate Frontend Developer Crafting Seamless User Experiences 💻",
                        "Let's Connect! Reach Out via LinkedIn or Email 💌",
                        "Turning Ideas into Beautifully Coded Realities 🚀"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                    stringSplitter: stringSplitter as any
                }}
            /></h3>
            <div className="d-inline-block mt-4">
                <Button variant="primary">
                    <Link to="contact" smooth={true} duration={300} className="nav-link">Contact me</Link>
                </Button>
            </div>
        </Container>
    );
};
