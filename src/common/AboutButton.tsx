// AboutButton.js
import React from 'react';
import './AboutButton.css';
import {Button} from "react-bootstrap";

const AboutButton = () => {
    const fileURL = 'files/CV Bujag.pdf';
    const fileName = 'CV-Bujag.pdf';

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Button className="about-button hover-enlarge"
                data-tooltip="Download CV"
                onClick={downloadFile}
                data-aos="zoom-out-up">
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
