import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";

import Sidebar from "./layouts/Sidebar";

import HeroSection from "./sections/Hero";

const AboutSection = lazy(() => import("./sections/About"));
const SkillsSection = lazy(() => import("./sections/Skills"));
const ProjectsSection = lazy(() => import("./sections/Projects"));
const ContactSection = lazy(() => import("./sections/Contact"));

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Sidebar />
      <Suspense fallback={null}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}