"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-slate-50 dark:bg-[#111111] transition-colors duration-300">
      {/* Decorative Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-300/30 dark:bg-pink-900/20 rounded-full blur-[120px]" />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden w-full z-[60]">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full relative">
        <Sidebar />

        <main className="flex-1 lg:ml-[350px] z-10 w-full">
          {/* Desktop Header */}
          <div className="hidden lg:block">
            <Header
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        <HomeSection />
        <PortfolioSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
    </div>
  );
}
