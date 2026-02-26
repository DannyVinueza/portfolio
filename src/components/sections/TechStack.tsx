"use client";

import { TechCategory } from "@/data/types";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { usePortfolioData } from "@/components/use-portfolio-data";
import { useLanguage } from "@/components/language-provider";

const TechStack = () => {
    const { techStackCategories } = usePortfolioData();
    const { t } = useLanguage();

    return (
        <section id="tech" className="py-20 px-4 relative bg-background/50">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        {t("tech.title.line1")} <span className="text-gradient">{t("tech.title.line2")}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("tech.subtitle")}
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techStackCategories.map((category: TechCategory, index: number) => (
                        <ScrollReveal
                            key={category.title}
                            delay={index * 0.1}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-primary/80 uppercase tracking-wider text-sm pl-1">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill: { name: string; icon: string }) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all cursor-default"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-5 h-5 object-contain"
                                        />
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
