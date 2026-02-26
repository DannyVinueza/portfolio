"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePortfolioData } from "@/components/use-portfolio-data";
import { useLanguage } from "@/components/language-provider";
import { ProjectItem } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Types ---
type Project = ProjectItem;

// --- Components ---

const ImageCarousel = ({ images, title, className }: { images: string[], title: string, className?: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex(index);
    };

    return (
        <div className={`relative w-full h-full group overflow-hidden bg-gradient-to-br from-muted/50 to-background flex items-center justify-center ${className}`}>
            <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`${title} - view ${currentIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
                            quality={100}
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Navigation - Only show if > 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:bg-black/70 disabled:opacity-0 z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:bg-black/70 disabled:opacity-0 z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity z-10">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => goToImage(e, idx)}
                                className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-white/50 w-1.5 hover:bg-white/80"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
    const { t } = useLanguage();
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl flex flex-col"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Hero Image */}
                <div className="w-full h-48 sm:h-64 md:h-80 relative shrink-0">
                    <ImageCarousel images={project.images} title={project.title} />
                </div>

                <div className="p-6 md:p-8 space-y-8">
                    {/* Header */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                    </div>

                    {/* Problem & Solution Grid */}
                    {(project.problem || project.solution) && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.problem && (
                                <div className="bg-destructive/5 border border-destructive/20 p-5 rounded-lg space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-destructive" />
                                        <h4 className="text-destructive font-bold text-sm uppercase tracking-wider">{t("projects.problem")}</h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>
                            )}
                            {project.solution && (
                                <div className="bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-lg space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <h4 className="text-emerald-500 font-bold text-sm uppercase tracking-wider">{t("projects.solution")}</h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Footer: Tech Stack & Actions */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-6 border-t border-border">
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("projects.technologies")}</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(t => (
                                    <Badge key={t} variant="secondary" className="px-3 py-1">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            {project.links?.demo && (
                                <Button className="flex-1 md:flex-none gap-2" onClick={() => window.open(project.links?.demo, '_blank')}>
                                    <ExternalLink size={18} /> {t("projects.demo_action")}
                                </Button>
                            )}
                            {project.links?.code && (
                                <Button variant="outline" className="flex-1 md:flex-none gap-2" onClick={() => window.open(project.links?.code, '_blank')}>
                                    <Github size={18} /> {t("projects.code_action")}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const FeaturedProjects = () => {
    const { projects } = usePortfolioData();
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const featuredProjects = projects.filter((p: ProjectItem) => p.featured);

    if (featuredProjects.length === 0) return null;

    return (
        <section id="projects" className="py-24 px-4 bg-secondary/5">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        {t("projects.title.line1")} <span className="text-gradient">{t("projects.title.line2")}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("featured.subtitle")}
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project: ProjectItem, index: number) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                                onClick={() => setSelectedProject(project)}
                            >
                                <Card className="h-full flex flex-col overflow-hidden bg-card/30 backdrop-blur-md backdrop-saturate-150 border-border hover:border-primary/60 transition-all duration-500 shadow-lg hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.30)] group cursor-pointer relative">

                                    {/* Hover Indicator Icon */}
                                    <div className="absolute top-4 right-4 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur rounded-full p-2 text-primary shadow-sm hover:bg-primary/20">
                                        <Maximize2 size={20} />
                                    </div>

                                    {/* Image Header - Reduced Height for cleaner look */}
                                    <div className="relative h-56 sm:h-64 overflow-hidden">
                                        <ImageCarousel images={project.images} title={project.title} className="h-full" />
                                    </div>

                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-4 flex-grow flex flex-col">
                                        <p className="text-muted-foreground font-medium line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack - Simplified */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.slice(0, 4).map((t: string) => (
                                                <Badge key={t} variant="secondary" className="bg-secondary/50 border-border/50 text-xs">
                                                    {t}
                                                </Badge>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <Badge variant="outline" className="text-xs">+{project.technologies.length - 4}</Badge>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3 pt-4 border-t border-border/50" onClick={(e) => e.stopPropagation()}>
                                            {(project.links?.demo || project.links?.code) && (
                                                <>
                                                    {project.links.demo && (
                                                        <Button size="sm" variant="default" className="flex-1 gap-2" onClick={() => window.open(project.links?.demo, '_blank')}>
                                                            <ExternalLink size={16} /> {t("projects.seedemo")}
                                                        </Button>
                                                    )}
                                                    {project.links.code && (
                                                        <Button size="sm" variant="outline" className="flex-1 gap-2" onClick={() => window.open(project.links?.code, '_blank')}>
                                                            <Github size={16} /> {t("projects.seecode")}
                                                        </Button>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Modal for Detailed View */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}

export default FeaturedProjects;
