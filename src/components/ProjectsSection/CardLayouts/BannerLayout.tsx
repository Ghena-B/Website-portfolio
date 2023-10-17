import ProjectsButton from "../../../common/ProjectsButton";
import {ProjectProps} from "../Projects";

export const BannerLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl}) => {
    return (
        <div className="card banner-card mb-5" data-aos="flip-up">
            <div className="img-container">
                <img src={imageUrl} alt={`${title} banner`} className="card-img banner-img"/>
                <div className="overlay"></div>
            </div>
            <div className="content-overlay">
                <div className="blur-overlay"></div>
                <div className="content-inner text-white">
                    <h5 className="card-title fs-3">{title}</h5>
                    <p className="card-text">{description}</p>
                    <ul className="technologies-list mb-auto lead">
                        {technologies.map((tech, index) => (
                            <li key={`${id}-${index}`}>{tech}</li>
                        ))}
                    </ul>
                    <ProjectsButton theme="original" buttonText="View Live"
                                    url="https://ghena-b.github.io/Social-media-upd"/>
                </div>
            </div>
        </div>
    );
};