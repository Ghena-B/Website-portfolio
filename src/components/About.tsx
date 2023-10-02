import {Button} from "react-bootstrap";
import animationData from '../assets/animations/about_section_animation.json';
import Lottie from "lottie-react";

export const About = () => {
    const options = {
        animationData,
        loop: true,        // Optional: loop animation
        autoplay: true,    // Optional: autoplay animation on load
    };
    return (
        <div id={"about"}>
            <div>About me</div>
            <div>
                <div>
                    <div>I'm GHENADIE BUJAG, a passionate Frontend Developer.</div>
                    <div>With a diverse educational journey, I've seamlessly woven my analytical and problem-solving skills into the fabric of web development.
                        I am deeply immersed in technologies like React, Redux, and TypeScript, crafting user-centric applications that are not only functional but also intuitive.
                        My social network platform, a testament to my skills, epitomizes my commitment to delivering high-quality, scalable, and maintainable web solutions.
                        Beyond the coding environment, I immerse myself in the art of photography, the melody of guitar strings, and the adventure of exploring new places.</div>
                    <div>Open to collaborative and innovative environments, I'm eager to contribute to dynamic projects and explore new opportunities in web development.</div>
                </div>
                <div>
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>
            <Button>Download CV</Button>
        </div>
    )
}