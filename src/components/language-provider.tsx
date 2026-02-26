"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        "nav.home": "Home",
        "nav.tech": "Tech Stack",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.contact": "Contact",
        "nav.downloadCV": "Download CV",
        "footer.quickLinks": "Quick Links",
        "footer.connect": "Connect With Me",
        "footer.rights": "All rights reserved.",
        "footer.bio": "Full Stack Developer focused on building scalable architectures and high-impact software solutions.",
        "theme.light": "Light",
        "theme.dark": "Dark",
        "theme.system": "System",
        "contact.title": "Contact",
        "contact.subtitle": "Let’s connect. I’m available to collaborate on new projects, develop innovative ideas, or join your next initiative.",
        "contact.location": "Location",
        "contact.locationValue": "Quito, Ecuador / Remote",
        "contact.email": "Email",
        "contact.startConversation": "Start a Conversation",
        "experience.title.line1": "Professional",
        "experience.title.line2": "Experience",
        "experience.subtitle": "Solid experience building high-impact technological solutions.",
        "tech.title.line1": "Tech",
        "tech.title.line2": "Stack",
        "tech.subtitle": "Technologies I use to build robust and scalable software.",
        "projects.title.line1": "Featured",
        "projects.title.line2": "Projects",
        "projects.subtitle": "Some of the projects I have worked on.",
        "featured.subtitle": "Some projects developed",
        "projects.technologies": "Technologies",
        "projects.problem": "Problem",
        "projects.solution": "Solution",
        "projects.seedemo": "Demo",
        "projects.seecode": "Code",
        "projects.demo_action": "View Demo",
        "projects.code_action": "View Code",
    },
    es: {
        "nav.home": "Acerca de mi",
        "nav.tech": "Tecnologías",
        "nav.projects": "Proyectos",
        "nav.experience": "Trayectoria",
        "nav.contact": "Contacto",
        "nav.downloadCV": "Descargar CV",
        "footer.quickLinks": "Enlaces Rápidos",
        "footer.connect": "Conecta Conmigo",
        "footer.rights": "Todos los derechos reservados.",
        "footer.bio": "Desarrollador Fullstack enfocado en construir arquitecturas escalables y soluciones de alto impacto.",
        "theme.light": "Claro",
        "theme.dark": "Oscuro",
        "theme.system": "Sistema",
        "contact.title": "Contacto",
        "contact.subtitle": "Conectemos. Estoy disponible para colaborar en nuevos proyectos, desarrollar ideas innovadoras o sumarme a tu próxima iniciativa.",
        "contact.location": "Ubicación",
        "contact.locationValue": "Quito, Ecuador / Remoto",
        "contact.email": "Correo",
        "contact.startConversation": "Iniciar una Conversación",
        "experience.title.line1": "Trayectoria",
        "experience.title.line2": "Profesional",
        "experience.subtitle": "Experiencia sólida construyendo soluciones tecnológicas de alto impacto.",
        "tech.title.line1": "Stack",
        "tech.title.line2": "Tecnológico",
        "tech.subtitle": "Tecnologías que utilizo para construir software robusto y escalable.",
        "projects.title.line1": "Proyectos",
        "projects.title.line2": "Destacados",
        "projects.subtitle": "Algunos de los proyectos en los que he trabajado",
        "featured.subtitle": "Algunos proyectos desarrollados",
        "projects.technologies": "Tecnologías",
        "projects.problem": "Problema",
        "projects.solution": "Solución",
        "projects.seedemo": "Demo",
        "projects.seecode": "Código",
        "projects.demo_action": "Ver Demo",
        "projects.code_action": "Ver Código",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en"); // Default English for international SEO

    useEffect(() => {
        // Retrieve the saved reference and load it
        const saved = localStorage.getItem("language") as Language | null;
        if (saved && (saved === "en" || saved === "es")) {
            setLanguage(saved);
        } else {
            // Default to English
            setLanguage("en");
            localStorage.setItem("language", "en");
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string): string => {
        const keys = key.split(".");
        let value: any = translations[language];

        // Fallback to exact key match first
        if (typeof value[key] === "string") {
            return value[key];
        }

        for (const k of keys) {
            if (value && typeof value === "object" && k in value) {
                value = value[k as keyof typeof value];
            } else {
                return key;
            }
        }

        return typeof value === "string" ? value : key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
