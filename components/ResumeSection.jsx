const SKILLS = [
  { name: "Photoshop", icon: "/img/icons/icon-photoshop.svg" },
  { name: "Figma", icon: "/img/icons/icon-figma.svg" },
  { name: "Illustrator", icon: "/img/icons/icon-illustrator.svg" },
  { name: "XD", icon: "/img/icons/icon-scketch.svg" },
  { name: "Bootstrap", icon: "/img/icons/icon-blender.svg" },
  { name: "Tailwindcss", icon: "/img/icons/icon-notion.svg" },
  { name: "Materializecss", icon: "/img/icons/materializecss-svgrepo-com.svg" },
  { name: "Sass", icon: "/img/icons/sass-svgrepo-com.svg" },
  { name: "HTML5", icon: "/img/icons/icon-html.svg" },
  { name: "CSS3", icon: "/img/icons/icon-css.svg" },
  { name: "Javascript", icon: "/img/icons/javascript-svgrepo-com.svg" },
  { name: "Jquery", icon: "/img/icons/jquery-svgrepo-com.svg" },
  {
    name: "Vuejs",
    icon: "/img/icons/vue-vuejs-javascript-js-framework-svgrepo-com.svg",
  },
  { name: "React", icon: "/img/icons/react-svgrepo-com.svg" },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <div className="relative overflow-hidden">
        <p className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">
          Resume
        </p>
        <h2 className="heading-2">Education & Experience</h2>

        <div className="flex flex-col gap-8 md:gap-12 mb-20">
          {/* Education */}
          <div className="bg-white/80 dark:bg-[#111111]/80 rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-sm border border-slate-200/50 dark:border-white/5">
            <h3 className="heading-3 mb-8 md:mb-10 flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4 md:pb-6">
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-brand-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              My Education
            </h3>
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-light/30 before:to-transparent pl-8 md:pl-0">
              <div className="relative md:w-1/2 md:pr-12 md:text-right">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-right-[40px] md:left-auto top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  2010 - 2011
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Institute Sphinx for Information Technology
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  Graphic department (Grade: very good)
                </p>
              </div>
              <div className="relative md:w-1/2 md:ml-auto md:pl-12">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-left-[8px] top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  2012 - 2013
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Diploma in Web Design
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  From the Russian Cultural Center
                </p>
              </div>
              <div className="relative md:w-1/2 md:pr-12 md:text-right">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-right-[40px] md:left-auto top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  2012 - 2013
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Basic Programming Language
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  YAT Learning Centers (Php & mysql & Ajax)
                </p>
              </div>
              <div className="relative md:w-1/2 md:ml-auto md:pl-12">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-left-[8px] top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  2024 - 2024
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Diploma frontend
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  EraSost (React & next)
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white/80 dark:bg-[#111111]/80 rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-sm border border-slate-200/50 dark:border-white/5">
            <h3 className="heading-3 mb-8 md:mb-10 flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4 md:pb-6">
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-brand-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Work Experience
            </h3>
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-light/30 before:to-transparent pl-8 md:pl-0">
              <div className="relative md:w-1/2 md:pr-12 md:text-right">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-right-[40px] md:left-auto top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  Jan 2015 – Dec 2016
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Web Designer
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  iEgSoftSolution | New Cairo
                </p>
              </div>
              <div className="relative md:w-1/2 md:ml-auto md:pl-12">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-left-[8px] top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  Jan 2016 – Jan 2018
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Senior Web Designer
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  Enjaz | Saudi Arabia
                </p>
              </div>
              <div className="relative md:w-1/2 md:pr-12 md:text-right">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-right-[40px] md:left-auto top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  Feb 2018 – Jan 2024
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Senior Web Designer
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  SeoEra | Giza
                </p>
              </div>
              <div className="relative md:w-1/2 md:ml-auto md:pl-12">
                <div className="absolute w-4 h-4 bg-brand-light rounded-full -left-[39px] md:-left-[8px] top-1 border-4 border-white dark:border-[#161616]" />
                <span className="inline-block px-4 py-1 rounded-full bg-brand-light/10 text-sm font-bold text-brand-light mb-2 md:mb-3">
                  Feb 2024 – Now
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                  Team Lead Ui/Ux Designer
                </h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  Ibtikarat | Ksa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <h3 className="heading-3 mb-8 text-center">My Skills & Tools</h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 md:p-6 glass-panel hover:scale-110 transition-transform cursor-pointer w-24 h-24 md:w-28 md:h-28"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 grayscale group-hover:grayscale-0">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
