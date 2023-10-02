import image1 from "./../assets/images/Screenshot 2023-10-02 172432.png"
import image2 from "./../assets/images/Screenshot 2023-10-02 172118.png"
import image3 from "./../assets/images/Screenshot 2023-10-02 172619.png"
import image4 from "./../assets/images/Screenshot 2023-10-02 172846.png"
export type ProjectDataType = {
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    link: string
}
export type ProjectsDataType = ProjectDataType[];

const projectsData: ProjectsDataType = [
    {
        title: "Project One",
        description: "Description for project one.",
        technologies: ["React", "JavaScript", "CSS"],
        imageUrl: image1,
        link: ""
    },
    {
        title: "Project 2",
        description: "Description for project 2.",
        technologies: ["React"],
        imageUrl: image2,
        link: ""
    },
    {
        title: "Project 3",
        description: "Description for project 3.",
        technologies: ["React"],
        imageUrl: image3,
        link: ""
    },
    {
        title: "Project 4",
        description: "Description for project 4.",
        technologies: ["React"],
        imageUrl: image4,
        link: ""
    },
    {
        title: "Project 5 Portfolio Website",
        description: "Description for project 5.",
        technologies: ["React", "Boostrap", "CSS"],
        imageUrl: image1,
        link: ""
    },

];

export default projectsData;
