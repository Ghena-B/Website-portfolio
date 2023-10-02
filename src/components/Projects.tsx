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
        <div className="card mb-3" style={{maxWidth: 540}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imageUrl} className="img-fluid rounded-start" alt={`${title} screenshot`}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted"> {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}</small>
                        </p>
                        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*

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
</div>*/
