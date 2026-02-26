"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
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
        <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">
                            <span className="text-gradient">Danny Vinueza</span>
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("footer.bio") || "Desarrollador Fullstack enfocado en construir arquitecturas escalables y soluciones de alto impacto."}
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">{t("footer.quickLinks")}</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="block py-1.5 text-muted-foreground hover:text-primary transition-colors text-left w-full"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">{t("footer.connect")}</h4>
                        <div className="flex gap-3">
                            {[
                                { href: "mailto:vinuezadanny51@gmail.com", icon: Mail, label: "Email" },
                                { href: "https://www.linkedin.com/in/danny-vinueza-fullstackdev/", icon: Linkedin, label: "LinkedIn" },
                                { href: "https://github.com/DannyVinueza", icon: Github, label: "GitHub" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.label !== "Email" ? "_blank" : undefined}
                                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-border">
                    <p className="text-center text-sm text-muted-foreground">
                        © {currentYear} Danny Vinueza. {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
