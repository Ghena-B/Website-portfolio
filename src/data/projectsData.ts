import image1 from "./../assets/images/Screenshot 2023-10-02 172432.png"
import image2 from "./../assets/images/Screenshot 2023-10-02 172118.png"
import image3 from "./../assets/images/Screenshot 2023-10-02 172619.png"
import image4 from "./../assets/images/Screenshot 2023-10-02 172846.png"
export type ProjectDataType = {
    id: number
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    link: string
}
export type ProjectsDataType = ProjectDataType[];

const projectsData: ProjectsDataType = [
    {
        id: 1,
        title: "Social Network",
        description: "Features: State Management, Real-Time Interactions, User Authentication, API Integration",
        technologies: ["React", "Redux", "CSS", "TypeScript", "WebSocket", "Ant Design"],
        imageUrl: image1,
        link: ""
    },
    {
        id: 2,
        title: "Website Portfolio",
        description: "Interactive User Experience, Responsive Design, Dynamic Content Rendering, Custom Styling",
        technologies: ["React", "TypeScript","Boostrap", "CSS", "GSAP"],
        imageUrl: image1,
        link: ""
    },
    {
        id: 3,
        title: "Responsive Landing Page",
        description: "Mobile-First Design, Clean & Intuitive Layout, Cross-Browser Compatibility, SEO Friendly",
        technologies: ["HTML", "CSS"],
        imageUrl: image2,
        link: ""
    },
    {
        id: 4,
        title: "Responsive Landing Page 2",
        description: "Adaptive Layouts, Visually Appealing Design, Performance Optimization, Accessibility",
        technologies: ["HTML", "CSS"],
        imageUrl: image4,
        link: ""
    },

];

export default projectsData;
