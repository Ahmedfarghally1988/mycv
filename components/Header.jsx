import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header({ activeSection, setActiveSection }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenuAndNavigate = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[60] pt-4 pb-4 px-6 lg:pt-8 lg:px-8 flex justify-between items-center w-full max-w-[1600px] bg-slate-50/90 dark:bg-[#111111]/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-slate-200 dark:border-white/10 lg:border-none">
        
        {/* Mobile Left: Hamburger */}
        <button 
          className="lg:hidden text-slate-600 dark:text-slate-300 hover:text-brand-light transition-colors p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-2 font-semibold text-[15px] text-slate-500 dark:text-slate-400">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className={`px-5 py-2 text-lg rounded-full transition-colors ${activeSection === "home" ? "border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white" : "hover:text-slate-800 dark:hover:text-white"}`}
          >
            Home
          </a>
          <a
            href="#portfolio"
            onClick={() => setActiveSection("portfolio")}
            className={`px-5 py-2 text-lg rounded-full transition-colors ${activeSection === "portfolio" ? "border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white" : "hover:text-slate-800 dark:hover:text-white"}`}
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={() => setActiveSection("about")}
            className={`px-5 py-2 text-lg rounded-full transition-colors ${activeSection === "about" ? "border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white" : "hover:text-slate-800 dark:hover:text-white"}`}
          >
            About Me
          </a>
          <a
            href="#resume"
            onClick={() => setActiveSection("resume")}
            className={`px-5 py-2 text-lg rounded-full transition-colors ${activeSection === "resume" ? "border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white" : "hover:text-slate-800 dark:hover:text-white"}`}
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className={`px-5 py-2 text-lg rounded-full transition-colors ${activeSection === "contact" ? "border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white" : "hover:text-slate-800 dark:hover:text-white"}`}
          >
            Contact
          </a>
        </nav>

        {/* Right side: Icons and Desktop Let's Talk */}
        <div className="flex items-center gap-3 lg:gap-6 ml-auto lg:ml-0">
          
          {/* Mobile Phone Icon */}
          <a href="tel:+201065962515" className="lg:hidden text-slate-600 dark:text-slate-300 hover:text-brand-light transition-colors p-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          {/* Mobile Email Icon */}
          <a href="mailto:ahmed.fr1988@gmail.com" className="lg:hidden text-slate-600 dark:text-slate-300 hover:text-brand-light transition-colors p-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>

          {/* Dark Mode Icon */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-slate-600 dark:text-slate-300 hover:text-brand-light transition-colors p-2"
            aria-label="Toggle Dark Mode"
          >
            {mounted && theme === 'dark' ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          
          {/* Desktop Let's Talk */}
          <a
            href="#contact"
            className="hidden lg:flex bg-[#7059e2] text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#5d4ec4] transition-colors items-center gap-2"
          >
            Let&apos;s Talk
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* Mobile Side Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className="absolute top-0 left-0 w-[280px] h-full bg-white dark:bg-[#111111] shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-300">
             <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Menu</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-500 hover:text-brand-light transition-colors p-2 -mr-2"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
             </div>

             <nav className="flex flex-col gap-4 text-lg font-semibold text-slate-600 dark:text-slate-300">
                <a href="#home" onClick={() => closeMenuAndNavigate('home')} className={`p-3 rounded-xl transition-colors ${activeSection === 'home' ? 'bg-brand-light/10 text-brand-light' : 'hover:bg-slate-100 dark:hover:bg-white/5'}`}>Home</a>
                <a href="#portfolio" onClick={() => closeMenuAndNavigate('portfolio')} className={`p-3 rounded-xl transition-colors ${activeSection === 'portfolio' ? 'bg-brand-light/10 text-brand-light' : 'hover:bg-slate-100 dark:hover:bg-white/5'}`}>Portfolio</a>
                <a href="#about" onClick={() => closeMenuAndNavigate('about')} className={`p-3 rounded-xl transition-colors ${activeSection === 'about' ? 'bg-brand-light/10 text-brand-light' : 'hover:bg-slate-100 dark:hover:bg-white/5'}`}>About Me</a>
                <a href="#resume" onClick={() => closeMenuAndNavigate('resume')} className={`p-3 rounded-xl transition-colors ${activeSection === 'resume' ? 'bg-brand-light/10 text-brand-light' : 'hover:bg-slate-100 dark:hover:bg-white/5'}`}>Resume</a>
                <a href="#contact" onClick={() => closeMenuAndNavigate('contact')} className={`p-3 rounded-xl transition-colors ${activeSection === 'contact' ? 'bg-brand-light/10 text-brand-light' : 'hover:bg-slate-100 dark:hover:bg-white/5'}`}>Contact</a>
             </nav>
          </div>
        </div>
      )}
    </>
  );
}
