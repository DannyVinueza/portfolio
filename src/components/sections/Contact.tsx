"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const Contact = () => {
    const { t, language } = useLanguage();

    const contacts = [
        {
            icon: Mail,
            title: "Email",
            value: "vinuezadanny51@gmail.com",
            href: "mailto:vinuezadanny51@gmail.com",
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: language === 'es' ? "Conecta conmigo" : "Connect with me",
            href: "https://www.linkedin.com/in/danny-vinueza-fullstackdev/",
        },
        {
            icon: Github,
            title: "GitHub",
            value: language === 'es' ? "Sígueme en GitHub" : "Follow me on GitHub",
            href: "https://github.com/DannyVinueza",
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section header */}
                <ScrollReveal className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-gradient">{t("contact.title")}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </ScrollReveal>

                {/* Contact Card */}
                <ScrollReveal delay={0.2}>
                    <div className="bg-card/30 backdrop-blur-md border border-border p-6 md:p-10 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />

                        {/* List */}
                        <div className="space-y-4 relative z-10">
                            {contacts.map((contact, index) => (
                                <motion.a
                                    key={index}
                                    href={contact.href}
                                    target={contact.title !== "Email" ? "_blank" : undefined}
                                    rel={contact.title !== "Email" ? "noopener noreferrer" : undefined}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-6 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-background/80 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all">
                                        <contact.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{contact.title}</h3>
                                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Contact;
