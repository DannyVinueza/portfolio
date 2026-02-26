"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // passive: true to prevent the listener from blocking the main scrolling thread
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setIsMobileMenuOpen(false);

        // Timeout to ensure the mobile menu close animation doesn't interrupt the scroll
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 150);
    };

    const { t } = useLanguage();

    const navItems = [
        { label: t("nav.home"), id: "home" },
        { label: t("nav.tech"), id: "tech" },
        { label: t("nav.projects"), id: "projects" },
        { label: t("nav.experience"), id: "experience" },
        { label: t("nav.contact"), id: "contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 px-6 py-4",
                isScrolled
                    ? "bg-background/50 backdrop-blur-xl backdrop-saturate-150 border-b border-primary/20 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo/Name */}
                <div className="text-2xl md:text-3xl font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(var(--primary),0.2)] hover:opacity-80 transition-opacity">
                        Danny Vinueza
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="flex items-center gap-4 border-l border-border pl-4 ml-2">
                        <LanguageToggle />
                        <ModeToggle />
                        <Button
                            variant="outline"
                            className="border-primary/50 hover:bg-primary/10 hover:border-primary text-primary"
                            onClick={() => window.open("/CV_Danny_Vinueza.pdf", "_blank")}
                        >
                            {t("nav.downloadCV")}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Actions (Toggle + Menu) */}
                <div className="flex md:hidden items-center gap-2">
                    <LanguageToggle />
                    <ModeToggle />
                    <button
                        className="text-foreground p-2 -mr-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 right-0 bg-background/80 backdrop-blur-2xl backdrop-saturate-150 border-t border-border overflow-hidden md:hidden shadow-xl"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button
                                className="w-full bg-primary text-primary-foreground"
                                onClick={() => window.open("/CV_Danny_Vinueza.pdf", "_blank")}
                            >
                                {t("nav.downloadCV")}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
