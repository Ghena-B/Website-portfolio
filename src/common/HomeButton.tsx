import React from 'react';
import {Link} from 'react-scroll';
import './HomeButton.css';
import {Button} from "react-bootstrap";  // Adjust the path based on your project structure

const HomeButton = () => {
    return (
        <Button variant="primary"
                className="home-button btn-lg hover-enlarge"
                data-aos="flip-up">
            <Link to="contact"
                  smooth={true}
                  duration={300}
                  className="nav-link">
                Contact me
            </Link>
        </Button>
    );
}

export default HomeButton;
