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

const BannerLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl}) => {
    return (
        <div className="card banner-card mb-5">
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


const FullLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl, link}) => {
    return (
        <div className="card full-card mb-5">
            <div className="row ">
                <div className="col-md-6 d-flex">
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title fs-3">{title}</h5>
                        <ProjectsButton theme="reversed" url={"https://github.com/Ghena-B/Website-portfolio"}/>
                    </div>
                </div>
                <div className="col-md-6 position-relative image-container-full-layout">
                    <img src={imageUrl} className="img-fluid custom-img" alt={`${title} screenshot`}/>
                    <div className="overlay-full-layout"></div>
                    <div className="hover-content">
                        <p className="card-text text-white">{description}</p>
                        <ul className="technologies-list mb-auto lead text-white">
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

const HalfLayout: React.FC<ProjectProps> = ({id, title, description, technologies, imageUrl, link}) => {
    return (
        <div className="col-md-6">
            <div className="card half-card">
                <div className="img-container">
                    <img src={imageUrl} className="card-img-top custom-img" alt={`${title} screenshot`}/>
                    <div className="overlay-half-layout"></div>
                    <div className="hover-content">
                        <p className="card-text text-white">{description}</p>
                        <ul className="technologies-list mb-auto lead text-white">
                            {technologies.map((tech, index) => (
                                <li className={"border rounded p-1"} key={id + '-' + index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-3 pb-5">{title}</h5>
                    <div className={"projects-button"}><ProjectsButton theme="reversed" url={"https://github.com/Ghena-B/Residential-website"}/></div>
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
            <div className={"projects-title mb-5"}><h4>Projects</h4></div>
            {projectsData.map((project, index) => {
                const layoutType = getLayoutType(project.id);

                if (layoutType === 'half' && index % 2 === 0) {
                    return (
                        <div className="row row-line mb-5" key={project.id}>
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


