"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/components/use-portfolio-data";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";

const Hero = () => {
    const { hero } = usePortfolioData();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Animated particles*/}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {mounted && [...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-slate-800/40 dark:bg-primary/20 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            x: [null, Math.random() * window.innerWidth],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-8 text-center lg:text-left order-1">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                        <span className="text-sm font-medium text-primary">{hero.badge}</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-light text-muted-foreground">
                            {hero.greeting}
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            <span className="text-gradient hover:glow-text transition-all duration-300">
                                {hero.role}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    >
                        {hero.description}
                    </motion.p>


                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pb-4"
                    >
                        <Button
                            onClick={() => window.open("/CV_Danny_Vinueza.pdf", "_blank")}
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/20 transition-all"
                        >
                            <Download className="mr-2 w-4 h-4" />
                            {hero.cta.primary}
                        </Button>
                        <Button
                            onClick={() => scrollToSection("projects")}
                            size="lg"
                            variant="outline"
                            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
                        >
                            {hero.cta.secondary}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>

                {/* 3D Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="order-2 flex justify-center lg:justify-end"
                >
                    <CardContainer className="inter-var">
                        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] border-black/[0.1] dark:border-white/[0.1] w-auto h-auto rounded-xl p-4 sm:p-6 border transition-colors duration-500">
                            <CardItem
                                translateZ={50}
                                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative rounded-full p-2 border-2 border-primary/30 border-dashed animate-spin-slow"
                            >
                            </CardItem>

                            <CardItem
                                translateZ={100}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-[0_0_50px_hsl(var(--primary)/0.4)] relative">
                                    <Image
                                        src={hero.profileImage}
                                        alt={hero.role}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 14rem, (max-width: 1024px) 18rem, 20rem"
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </CardItem>

                            <CardItem translateZ={80} className="absolute -top-4 -right-4 z-20">
                                <div className="p-3 bg-secondary rounded-xl border border-border shadow-xl">
                                    <Code2 className="w-6 h-6 text-primary" />
                                </div>
                            </CardItem>

                            <CardItem translateZ={120} className="absolute bottom-10 -left-6 z-20">
                                <div className="px-4 py-2 bg-background/80 backdrop-blur rounded-lg border border-primary/30 shadow-lg">
                                    <span className="text-sm font-bold text-gradient">{hero.experience.years} {hero.experience.description}</span>
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </motion.div>
            </div>
        </section>
    );
};

import { Code2 } from "lucide-react";

export default Hero;
