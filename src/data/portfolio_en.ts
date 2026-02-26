import { HeroSection, ExperienceItem, ProjectItem } from "./types";
import { portfolioDataEs } from "./portfolio_es";

export const portfolioDataEn = {
    hero: {
        badge: "Open to Opportunities",
        description: "I design and develop robust applications and scalable APIs that transform business logic into efficient solutions. My approach focuses on technical excellence (Clean Code & SOLID principles) and delivering measurable results. I have achieved a 20% performance optimization and a 25% scalability improvement in critical systems, consistently prioritizing the delivery of digital products that provide real business value.",
        profileImage: "https://avatars.githubusercontent.com/u/111832776?s=400&u=27805ef7ae67364375add989a8bc511343fa034b&v=4",
        greeting: "Hi, I'm Danny Vinueza",
        role: "Full Stack Developer",
        techStack: ["React", "Node.js", "TypeScript", "Tailwind CSS", ".NET Core", "AWS"],
        cta: {
            primary: "Download CV",
            secondary: "View Projects"
        },
        experience: {
            years: "2+",
            description: " Yrs Exp."
        }
    } as HeroSection,

    experience: [
        {
            role: "Full Stack Developer",
            company: "Interatecc S.A",
            date: "March 2024 — Present",
            description: [
                "Architecture & Scalability: Migrated critical services to AWS Serverless cloud (Lambda, API Gateway), achieving a 25% improvement in system scalability.",
                "AI & Real-Time: Implemented a sentiment analysis and transcription platform with AI, using WebSockets for real-time data visualization on React/Vite dashboards.",
                "Backend Optimization: Designed distributed services in .NET with AWS SQS and EventBridge, automating complex business logic processes and reducing database load.",
                "Omnichannel Integration: Developed Webhooks and APIs for integration with the META ecosystem (WhatsApp and Facebook)."
            ],
            technologies: ["AWS", "Lambda", "React", "Vite", "WebSockets", ".NET", "SQS", "EventBridge"]
        },
        {
            role: "Junior Programmer",
            company: "Interatecc S.A",
            date: "October 2023 — February 2024",
            description: [
                "Core Services Development: Built and maintained RESTful APIs using C# and .NET, ensuring efficient communication between internal company services.",
                "Data Management: Designed and normalized schemas in SQL Server, optimizing high-complexity queries to improve the performance of new product features.",
                "Systems Integration: Implemented connection with third-party APIs to extend the functionality of the corporate ecosystem."
            ],
            technologies: ["C#", ".NET", "SQL Server", "REST APIs"]
        }
    ] as ExperienceItem[],

    techStackCategories: portfolioDataEs.techStackCategories,

    projects: [
        {
            title: "Frontend – Personal Portfolio",
            description: "Single Page Application (SPA) developed from scratch to consolidate my personal brand. Designed with a clean architecture to deliver an immersive user experience, smooth animations, and native bilingual support with zero loading times.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
            images: [
                "/images/Project3_1.png",
            ],
            featured: true,
            problem: "",
            solution: "",
            links: {
                demo: "",
                code: "https://github.com/DannyVinueza/Gestion_Proyectos.git"
            }
        },
        {
            title: "Backend for Research Project Management Platform",
            description: "Development of the backend component of a web platform designed to register and optimize the management of academic and scientific research projects, providing a publications repository and collaborative tools.",
            technologies: ["Node.js", "JavaScript", "Express", "PostgreSQL"],
            images: [
                "/images/Project2_1.png",
                "/images/Project2_3.png",
            ],
            featured: true,
            problem: "The lack of a centralized system to register and manage research projects, which hinders academic progress and the organization of publication repositories.",
            solution: "The server-side logic and database were developed following the Scrum methodology. I implemented endpoints for project management, an invitation/request-based collaboration system, and administrator role management. System security was ensured through the implementation of OAuth for authentication and authorization.",
            links: {
                demo: "https://documenter.getpostman.com/view/26764278/2s9YkjB3ck",
                code: "https://github.com/DannyVinueza/Gestion_Proyectos.git"
            }
        },
        {
            title: "Nutrinet: School Cafeteria Management (Collaborative Academic Project)",
            description: "Engineering project developed in an academic setting in response to inefficient resource management in educational institutions in Ecuador, integrating Full Stack development and AI to enhance student well-being.",
            technologies: ["Java", "SpringBoot", "Thymeleaf", "MySql", "Gemini AI"],
            images: [
                "/images/Project1_1.png",
                "/images/Project1_2.png",
                "/images/Project1_3.png",
            ],
            featured: true,
            problem: "Manual management in school cafeterias located in vulnerable areas leads to food waste, lack of control over children’s allergies, and limited transparency in resource administration, preventing proper traceability for audits.",
            solution: "A responsive web platform that digitizes real-time attendance and consumption tracking, leveraging an AI-driven engine to plan nutritionally balanced menus and an automated reporting system to ensure transparency and communication with families.",
            links: {
                demo: "",
                code: "https://github.com/DannyVinueza/nutrinet.git"
            }
        },
    ] as ProjectItem[],

    contact: portfolioDataEs.contact
};


