import projectsData, {ProjectDataType} from "../../data/projectsData";
import "./Projects.css"
import 'aos/dist/aos.css';
import {BannerLayout} from "./CardLayouts/BannerLayout";
import {FullLayout} from "./CardLayouts/FullLayout";
import {HalfLayout} from "./CardLayouts/HalfLayout";

export interface ProjectProps extends ProjectDataType {
    layoutType: 'full' | 'half' | 'banner';
    animationDirection?: string
}

const ProjectCard: React.FC<ProjectProps> = (props) => {
    const Layout = layouts[props.layoutType];
    return <Layout {...props} />;
}
const layouts = {
    full: FullLayout,
    half: HalfLayout,
    banner: BannerLayout,
};

export const Projects = () => {
    return (
        <div className={"contact-wrapper container-fluid"} id="projects">
            <div className={"projects-title mb-5"} data-aos="slide-up"><h4>Projects</h4></div>
            {projectsData.map((project, index) => {
                const layoutType = getLayoutType(project.id);

                if (layoutType === 'half' && index % 2 === 0) {
                    return (
                        <div className="row row-line" key={project.id}>
                            <HalfLayout
                                layoutType={"full"}
                                animationDirection="fade-right"
                                {...projectsData[index]}
                            />
                            {projectsData[index + 1] &&
                                <HalfLayout
                                    layoutType={"full"}
                                    animationDirection="fade-left"
                                    {...projectsData[index + 1]}
                                />}
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
        case 5:
            return 'banner';
        case 2:
            return 'full';
        default:
            return 'half';
    }
}


