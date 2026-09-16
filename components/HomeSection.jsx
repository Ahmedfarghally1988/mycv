export default function HomeSection() {
  return (
    <section id="home" className="section-padding">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/10 border border-slate-200 dark:border-white/20 mb-8 backdrop-blur-sm">
        <svg
          className="w-4 h-4 text-slate-800 dark:text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
        <span className="text-sm font-semibold text-slate-700 dark:text-white">
          Let&apos;s meet!
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-light dark:text-[#a287d5] mb-12 leading-[1.1] max-w-4xl">
        I&apos;m Ahmed Farghally <br />
        UI/UX designer and frontend designer
      </h1>

      <div className="flex flex-wrap items-center gap-8">
        <a
          href="#portfolio"
          className="px-8 py-3 bg-transparent border border-slate-400 text-slate-800 dark:text-white dark:border-slate-600 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          My Works
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
          </svg>
        </a>
        <a
          href="/Ahmed_Farghally.pdf"
          target="_blank"
          className="font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2"
        >
          Download CV
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>

      {/* Scroll Down Badge */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center justify-center">
        <div className="w-24 h-24 border border-slate-300 dark:border-slate-600 rounded-full flex items-center justify-center animate-spin-slow relative">
          <span className="absolute inset-0 text-xs font-mono uppercase tracking-widest flex items-center justify-center">
            {/* Very rough approximation of text circle for Tailwind, usually requires SVG textpath */}
          </span>
        </div>
        <div className="absolute flex items-center justify-center text-slate-600 dark:text-slate-400">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
