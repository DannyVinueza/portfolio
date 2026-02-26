import { LucideIcon } from "lucide-react";

export interface TechItem {
    name: string;
}

export interface HeroSection {
    badge: string;
    description: string;
    profileImage: string;
    greeting: string;
    role: string;
    techStack: string[];
    cta: {
        primary: string;
        secondary: string;
    };
    experience: {
        years: string;
        description: string;
    }
}

export interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    images: string[];
    links?: {
        demo?: string;
        code?: string;
    };
    featured?: boolean;
    problem?: string;
    solution?: string;
}

export interface ContactInfo {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    date: string;
    description: string[];
    technologies: string[];
}

export interface TechCategory {
    title: string;
    skills: {
        name: string;
        icon: string;
    }[];
}
