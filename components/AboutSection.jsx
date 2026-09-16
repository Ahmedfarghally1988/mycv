export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <p className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">About Me</p>
      <h2 className="heading-2">Turning complex problems into simple design</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform">
          <p className="text-5xl font-bold gradient-text mb-2">10+</p>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Years of experience</p>
        </div>
        <div className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform">
          <p className="text-5xl font-bold gradient-text mb-2">150+</p>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Happy clients</p>
        </div>
        <div className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform">
          <p className="text-5xl font-bold gradient-text mb-2">150+</p>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Projects done</p>
        </div>
      </div>

      <div className="glass-panel p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.714 2.023-9.609 9.983-9.609h-3.048c-3.766 0-6.952 2.721-6.952 6.66 0 .524.062 1.037.172 1.529-1.921-.309-3.327-.85-4.172-1.529-2.023-1.621-3.172-4.102-3.172-6.66h-3.828c0 3.765 2.112 7.086 5.485 8.679-1.391.821-3.049 1.321-4.825 1.321h-3.66v3h3.66c4.093 0 7.759-1.926 10.358-4.937v8.937h-0.001z"/></svg>
        </div>
        <h3 className="heading-3">Career Objective</h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl">
          I have an advanced knowledge of user experience and I&apos;m looking to develop my Career. Building visually appealing and highly functional interfaces is my passion.
        </p>
        <a href="/Ahmed_Farghally.pdf" className="inline-flex items-center gap-2 font-bold text-brand-light hover:text-secondary-light transition-colors group">
          Download CV 
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>
    </section>
  );
}
