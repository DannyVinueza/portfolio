import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </main>
  );
}
