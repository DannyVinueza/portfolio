import { Mail, Phone, MapPin } from "lucide-react";
import { HeroSection, ContactInfo, TechCategory, ExperienceItem, ProjectItem } from "./types";

export const portfolioDataEs = {
    hero: {
        badge: "Abierto a Oportunidades",
        greeting: "Hola, soy Danny Vinueza",
        role: "Full Stack Developer",
        description: "Diseño y desarrollo aplicaciones robustas y APIs escalables que transforman lógica de negocio en soluciones eficientes. Mi enfoque está en la calidad técnica (Clean Code & SOLID) y en generar resultados medibles.\n\nHe logrado optimizar el 20% en rendimiento y el 25% en escalabilidad de sistemas críticos, priorizando siempre la entrega de productos digitales que aporten valor real.",
        profileImage: "https://avatars.githubusercontent.com/u/111832776?s=400&u=27805ef7ae67364375add989a8bc511343fa034b&v=4",
        techStack: [".NET Core", "React", "Next.js", "AWS", "SQL Server", "TypeScript"],
        cta: {
            primary: "Descargar CV",
            secondary: "Ver Proyectos"
        },
        experience: {
            years: "2+",
            description: " Años Exp."
        }
    } as HeroSection,

    experience: [
        {
            role: "Desarrollador Full Stack",
            company: "Interatecc S.A",
            date: "Marzo 2024 — Actualidad",
            description: [
                "Arquitectura & Escalabilidad: Migré servicios críticos a la nube de AWS Serverless (Lambda, API Gateway), logrando una mejora del 25% en la escalabilidad del sistema.",
                "IA & Tiempo Real: Implementé una plataforma de análisis de sentimiento y transcripción con IA, utilizando WebSockets para la visualización de datos en tiempo real en dashboards de React/Vite.",
                "Optimización de Backend: Diseñé servicios distribuidos en .NET con AWS SQS y EventBridge, automatizando procesos de lógica de negocio compleja y reduciendo la carga en la base de datos.",
                "Integración Omnicanal: Desarrollé Webhooks y APIs para la integración con el ecosistema de META (WhatsApp y Facebook), asegurando la continuidad operativa del portal de clientes."
            ],
            technologies: ["AWS", "Lambda", "React", "Vite", "WebSockets", ".NET", "SQS", "EventBridge"]
        },
        {
            role: "Programador Junior",
            company: "Interatecc S.A",
            date: "Octubre 2023 — Febrero 2024",
            description: [
                "Desarrollo de Servicios Core: Construí y mantuve APIs RESTful utilizando C# y .NET, asegurando una comunicación eficiente entre los servicios internos de la empresa.",
                "Gestión de Datos: Diseñé y normalicé esquemas en SQL Server, optimizando consultas de alta complejidad para mejorar el rendimiento de las nuevas funcionalidades del producto.",
                "Integración de Sistemas: Implementé la conexión con APIs de terceros para extender la funcionalidad del ecosistema empresarial."
            ],
            technologies: ["C#", ".NET", "SQL Server", "REST APIs"]
        }
    ] as ExperienceItem[],

    techStackCategories: [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
                { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
                { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
                { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
                { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
                { name: "CSS3", icon: "https://cdn.simpleicons.org/css/663399" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "C#", icon: "https://img.icons8.com/?size=100&id=45490&format=png&color=000000" },
                { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
                { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
                { name: "Java", icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
                { name: ".NET Core", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
                { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
                { name: "ASP.NET Core", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
                { name: "Spring Boot", icon: "https://cdn.simpleicons.org/spring/6DB33F" }
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "SQL Server", icon: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000" },
                { name: "MySql", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
                { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
                { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
                { name: "DynamoDB", icon: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" }
            ]
        },
        {
            title: "DevOps & Cloud",
            skills: [
                { name: "AWS", icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
                { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
                { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
                { name: "GitHub", icon: "https://cdn.simpleicons.org/github/2088FF" },
                { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" }
            ]
        }
    ] as TechCategory[],

    projects: [
        {
            title: "Frontend - Portafolio Personal",
            description: "Single Page Application (SPA) desarrollada desde cero para consolidar mi marca personal. Diseñada con una arquitectura limpia para ofrecer una experiencia de usuario inmersiva, animaciones fluidas y soporte bilingüe nativo sin tiempos de carga.",
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
            title: "Backend para Plataforma de Gestión de Proyectos de Investigación",
            description: "Desarrollo del componente backend de una plataforma web diseñada para registrar y optimizar la gestión de proyectos académicos y científicos, proporcionando un repositorio de publicaciones y herramientas colaborativas.",
            technologies: ["Node.js", "JavaScript", "Express", "PostgreSQL"],
            images: [
                "/images/Project2_1.png",
                "/images/Project2_3.png",
            ],
            featured: true,
            problem: "La falta de un sistema centralizado para registrar y gestionar proyectos de investigación, lo que dificulta el avance académico y la organización de repositorios de publicaciones.",
            solution: "Se desarrolló la lógica de servidor y base de datos bajo la metodología SCRUM. Implementé endpoints para la gestión de proyectos, un sistema de invitaciones/solicitudes de colaboración y roles de administrador. La seguridad del sistema se garantizó mediante la implementación de OAuth para autenticación y autorización.",
            links: {
                demo: "https://documenter.getpostman.com/view/26764278/2s9YkjB3ck",
                code: "https://github.com/DannyVinueza/Gestion_Proyectos.git"
            }
        },
        {
            title: "Nutrinet: Gestión de Comedores Escolares (Proyecto Académico Colaborativo)",
            description: "Proyecto de ingeniería desarrollado en el ámbito académico como respuesta a la gestión ineficiente de recursos en instituciones educativas de Ecuador, integrando desarrollo Full Stack e IA para el bienestar estudiantil.",
            technologies: ["Java", "SpringBoot", "Thymeleaf", "MySql", "Gemini AI"],
            images: [
                "/images/Project1_1.png",
                "/images/Project1_2.png",
                "/images/Project1_3.png",
            ],
            featured: true,
            problem: "La gestión manual en comedores escolares de zonas vulnerables provoca desperdicio de alimentos, falta de control sobre alergias infantiles y opacidad en la administración de recursos, impidiendo una trazabilidad adecuada para auditorías.",
            solution: "Una plataforma web responsiva que digitaliza el control de asistencia y consumo en tiempo real, utilizando un motor de IA para planificar menús nutricionalmente equilibrados y un sistema de reportes automatizados para garantizar transparencia y comunicación con las familias.",
            links: {
                demo: "",
                code: "https://github.com/DannyVinueza/nutrinet.git"
            }
        },
    ] as ProjectItem[],

    contact: [
        {
            icon: Mail,
            label: "Email",
            value: "vinuezadanny51@gmail.com",
            href: "mailto:vinuezadanny51@gmail.com",
        },
        {
            icon: Phone,
            label: "Teléfono",
            value: "0968992749",
            href: "tel:0968992749",
        },
        {
            icon: MapPin,
            label: "Ubicación",
            value: "Calle E 395 / Tambo 3/ Cutuglagua/ Mejia 171108",
            href: "https://goo.gl/maps/cqNL9VZrCKpwEmYZ9?g_st=aw",
        },
    ] as ContactInfo[],
};
