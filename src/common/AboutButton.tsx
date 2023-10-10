// AboutButton.js
import React from 'react';
import './AboutButton.css';
import {Button} from "react-bootstrap";

const AboutButton = () => {
    return (
        <Button className="about-button" data-tooltip="Download CV">
            <div className="button-wrapper">
                <div className="text">Download CV</div>
                <span className="icon">
                    <i className="bi bi-download"></i>
                </span>
            </div>
        </Button>
    );
}

export default AboutButton;
