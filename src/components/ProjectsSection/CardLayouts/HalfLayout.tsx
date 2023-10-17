import ProjectsButton from "../../../common/ProjectsButton";
import {ProjectProps} from "../Projects";
import React from "react";

export const HalfLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl, animationDirection}) => {
    return (
        <div className="col-md-6 mb-5" data-aos={animationDirection}>
            <div className="card half-card">
                <div className="img-container">
                    <img src={imageUrl}
                         className="card-img-top custom-img"
                         alt={`${title} screenshot`}/>
                    <div className="overlay-half-layout"></div>
                    <div className="hover-content">
                        <p className="card-text text-white">{description}</p>
                        <ul className="technologies-list lead text-white">
                            {technologies.map((tech, index) => (
                                <li className={"border rounded p-1"} key={id + '-' + index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-3 mb-3">{title}</h5>
                    <div className={"projects-button"}>
                        <ProjectsButton theme="reversed"
                                        url={"https://github.com/Ghena-B/Residential-website"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};