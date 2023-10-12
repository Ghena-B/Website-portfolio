import projectsData, {ProjectDataType} from "../../data/projectsData";
import "./Projects.css"
import ProjectsButton from "../../common/ProjectsButton";

interface ProjectProps extends ProjectDataType {
    layoutType: 'full' | 'half' | 'banner';
}

const ProjectCard: React.FC<ProjectProps> = (props) => {
    const Layout = layouts[props.layoutType];
    return <Layout {...props} />;
}

const BannerLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl, link}) => {
    return (
        <div className="card banner-card mb-5">
            <div className="img-container">
                <img src={imageUrl} className="card-img banner-img" alt={`${title} banner`}/>
                <div className="overlay"></div>
            </div>
            <div className="card-img-overlay text-white">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <ProjectsButton theme="original" />
            </div>
        </div>
    );
};
const FullLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl, link}) => {
    return (
        <div className="card full-card mb-5">
            <div className="row g-0">
                <div className="col-md-6 d-flex">
                    <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <ul className="technologies-list">
                            {technologies.map((tech, index) => (
                                <li key={id + '-' + index}>{tech}</li>
                            ))}
                        </ul>
                        <ProjectsButton theme="reversed" />
                    </div>
                </div>
                <div className="col-md-6" >
                    <img src={imageUrl} className="img-fluid" alt={`${title} screenshot`} />
                </div>
            </div>
        </div>
    );
};

const HalfLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl, link}) => {
    return (
        <div className="col-md-6">
            <div className="card half-card">
                <img src={imageUrl} className="card-img-top" alt={`${title} screenshot`}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <ul className="technologies-list">
                        {technologies.map((tech, index) => (
                            <li key={id + '-' + index}>{tech}</li>
                        ))}
                    </ul>
                    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </div>
    );
};

const layouts = {
    full: FullLayout,
    half: HalfLayout,
    banner: BannerLayout,
};

export const Projects = () => {
    return (
        <div className={"contact-wrapper container-fluid"} id="projects">
            <div className={"contact-title"}><h4>Projects</h4></div>
            {projectsData.map((project, index) => {
                const layoutType = getLayoutType(project.id);

                if (layoutType === 'half' && index % 2 === 0) {
                    return (
                        <div className="row" key={project.id}>
                            <HalfLayout layoutType={"full"} {...projectsData[index]} />
                            {projectsData[index + 1] && <HalfLayout layoutType={"full"} {...projectsData[index + 1]} />}
                        </div>
                    );
                }

                if (layoutType !== 'half') {
                    return (
                        <div className="col-12" key={project.id}>
                            <ProjectCard {...project} layoutType={layoutType}/>
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
}


function getLayoutType(id: number): 'full' | 'half' | 'banner' {
    switch (id) {
        case 1:
            return 'banner';
        case 2:
            return 'full';
        default:
            return 'half';
    }
}