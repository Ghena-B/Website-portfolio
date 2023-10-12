import React from 'react';
import './ProjectsButton.css';


const ProjectsButton = ({ theme = 'original' }) => {
    return (
        <button className={`learn-more ${theme}`}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
        </button>
    );
}

export default ProjectsButton;
