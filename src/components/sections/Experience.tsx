"use client";

import { ExperienceItem } from "@/data/types";
import { usePortfolioData } from "@/components/use-portfolio-data";
import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Bookmark } from "lucide-react";

const Experience = () => {
    const { experience } = usePortfolioData();
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-24 px-4 relative bg-background overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        {t("experience.title.line1")} <span className="text-gradient">{t("experience.title.line2")}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("experience.subtitle")}
                    </p>
                </ScrollReveal>

                <div className="relative">
                    {/* Vertical Timeline Line - Centered */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                    <div className="space-y-12">
                        {experience.map((item: ExperienceItem, index: number) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Timeline Node - Bookmark Icon Circle */}
                                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-10 flex items-center justify-center">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 ring-8 ring-background">
                                        <Bookmark className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground fill-current" />
                                    </div>
                                </div>

                                {/* Content Card Side */}
                                <div className="flex-1 ml-12 md:ml-0 md:px-12 pt-2">
                                    <ScrollReveal
                                        direction={index % 2 === 0 ? "left" : "right"}
                                        delay={index * 0.2}
                                    >
                                        <motion.div
                                            whileHover={{ y: -6 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-card/30 backdrop-blur-sm border border-border/60 p-6 md:p-8 rounded-2xl shadow-sm hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.30)] transition-all duration-300 group relative overflow-hidden"
                                        >
                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-foreground">
                                                            {item.role}
                                                        </h3>
                                                        <div className="flex items-center gap-2 mt-1.5">
                                                            <Briefcase className="w-4 h-4 text-primary" />
                                                            <span className="text-lg font-semibold text-primary">{item.company}</span>
                                                        </div>
                                                    </div>

                                                    <Badge variant="outline" className="w-fit flex gap-2 items-center px-4 py-1.5 rounded-full bg-secondary/20 border-border/50 text-muted-foreground text-sm font-medium">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {item.date}
                                                    </Badge>
                                                </div>

                                                {/* Description List - Arrow Bullets */}
                                                <ul className="space-y-4 mb-8">
                                                    {item.description.map((desc: string, i: number) => {
                                                        const [title, content] = desc.includes(":") ? desc.split(":") : ["", desc];
                                                        return (
                                                            <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground">
                                                                <span className="mt-1.5 shrink-0 text-primary">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_currentColor]" />
                                                                </span>
                                                                <span>
                                                                    {title && <strong className="text-foreground font-semibold">{title}:</strong>}
                                                                    {content}
                                                                </span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>

                                                {/* Technologies - Pill Badges */}
                                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                                                    {item.technologies.map((tech: string) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                            className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/40 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </ScrollReveal>
                                </div>

                                {/* Empty Side for Desktop Layout Balance */}
                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Line Fade Out */}
                    <div className="absolute left-6 md:left-1/2 bottom-0 w-px h-24 bg-gradient-to-b from-border to-transparent -translate-x-1/2" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
