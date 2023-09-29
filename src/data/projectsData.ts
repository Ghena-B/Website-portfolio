
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
        imageUrl: "",
        link: ""
    },
    {
        title: "Project 2",
        description: "Description for project 2.",
        technologies: ["React"],
        imageUrl: "",
        link: ""
    },

];

export default projectsData;
