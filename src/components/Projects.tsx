import projectsData, {ProjectDataType} from "../data/projectsData";

export const Projects = () => {
    return (
        <div className="projects-container" id={"projects"}>
            {projectsData.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    link={project.link}
                />
            ))}
        </div>
    )
}

const Project: React.FC<ProjectDataType> = ({title, description, technologies, imageUrl, link}) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={`${title} screenshot`}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    )
}