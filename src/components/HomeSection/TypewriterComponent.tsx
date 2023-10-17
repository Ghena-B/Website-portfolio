import React from 'react';
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const TypewriterComponent = React.memo(() => {
    const stringSplitter = (string: string) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    };
    return (
        <h3 className="display-6 mb-6" style={{minHeight: '8rem'}}><Typewriter
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
    );
})

export default TypewriterComponent;