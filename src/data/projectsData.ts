import image1 from "./../assets/images/Screenshot 2023-10-02 172432.png"
import image2 from "./../assets/images/Screenshot 2023-10-17 180848.png"
import image3 from "./../assets/images/Screenshot 2023-10-02 172118.jpg"
import image4 from "./../assets/images/Screenshot 2023-10-02 172846.jpg"
import image5 from "./../assets/images/Screenshot 2024-03-12 202116.png"
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
        title: "Production-Ready React Project with Advanced Features",
        description: "Optimized React project with FSD architecture, async reducers, dynamic loading, feature flags, comprehensive testing (unit, RTL, E2E), internationalization and many others. Built with React 18, Webpack, Babel, and TypeScript.",
        technologies: ["React 18", "Webpack", "Babel", "TypeScript", "Redux Toolkit", "Storybook", "i18next", "Jest", "Cypress", "loki"],
        imageUrl: image5,
        link: 'https://github.com/Ghena-B/production-project'
    },
    {
        id: 2,
        title: "Website Portfolio",
        description: "Interactive User Experience, Responsive Design, Dynamic Content Rendering",
        technologies: ["React", "TypeScript","Boostrap", "CSS", "GSAP"],
        imageUrl: image2,
        link: ""
    },
    {
        id: 3,
        title: "Responsive Landing Page",
        description: "Mobile-First Design, Clean & Intuitive Layout, Cross-Browser Compatibility, SEO Friendly",
        technologies: ["HTML", "CSS"],
        imageUrl: image3,
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
    {
        id: 5,
        title: "Social Network",
        description: "Features: State Management, Real-Time Interactions, User Authentication, API Integration",
        technologies: ["React", "Redux", "CSS", "TypeScript", "WebSocket", "Ant Design"],
        imageUrl: image1,
        link: "https://ghena-b.github.io/Social-media-upd"
    },

];

export default projectsData;
