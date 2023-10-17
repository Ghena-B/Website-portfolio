import React from 'react';
import './ProjectsButton.css';

const ProjectsButton = ({ theme = 'original', buttonText = 'View on Github', url = '#' }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-button hover-enlarge">
            <button className={`learn-more ${theme}`}>
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">{buttonText}</span>
            </button>
        </a>
    );
}

export default ProjectsButton;

