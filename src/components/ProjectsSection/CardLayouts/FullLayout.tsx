import ProjectsButton from "../../../common/ProjectsButton";
import {ProjectProps} from "../Projects";
import React from "react";

export const FullLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl}) => {
    return (
        <div className="card full-card mb-5" data-aos="flip-up">
            <div className="row row-full">
                <div className="col-md-6 d-flex order-2 order-md-1">
                    <div className="card-body d-flex flex-column justify-content-between"
                    >
                        <h5 className="card-title fs-3">{title}</h5>
                        <ProjectsButton theme="reversed"
                                        url={"https://github.com/Ghena-B/Website-portfolio"}/>
                    </div>
                </div>
                <div className="col-md-6 position-relative image-container-full-layout order-1 order-md-2">
                    <img src={imageUrl}
                         className="img-fluid custom-img"
                         alt={`${title} screenshot`}/>
                    <div className="overlay-full-layout"></div>
                    <div className="hover-content">
                        <p className="card-text text-white">{description}</p>
                        <ul className="technologies-list lead text-white">
                            {technologies.map((tech, index) => (
                                <li className={"border rounded p-1"} key={id + '-' + index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};