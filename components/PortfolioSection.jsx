"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const PORTFOLIO_ITEMS = [
  {
    id: 28,
    title: "Ecommerce",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/28.jpg",
  },
  {
    id: 29,
    title: "Ecommerce",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/29.jpg",
  },
  {
    id: 30,
    title: "Ecommerce",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/30.jpg",
  },
  {
    id: 31,
    title: "Ecommerce",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/31.jpg",
  },
  {
    id: 32,
    title: "Ecommerce",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/32.jpg",
  },
  {
    id: 1,
    title: "Ecommerce",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/1.jpg",
  },
  {
    id: 2,
    title: "Sub Rise",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/2.jpg",
  },
  {
    id: 3,
    title: "website perfume",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/3.jpg",
  },
  {
    id: 4,
    title: "Grand Pyramis Hotel",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/4.jpg",
  },
  {
    id: 5,
    title: "ana 3rosa",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/5.jpg",
  },
  {
    id: 6,
    title: "Sewes golf travel",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/6.jpg",
  },
  {
    id: 7,
    title: "PM Trakis",
    tags: ["Html", "Css", "Javascript", "Figma"],
    img: "/img/mywork/7.jpg",
  },
];

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section id="portfolio" className="section-padding">
        <p className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">
          Portfolio
        </p>
        <h2 className="heading-2">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 bg-white dark:bg-[#151515] hover:shadow-xl transition-shadow duration-300"
            >
              {/* Browser Mockup Header */}
              <div className="h-10 bg-slate-100 dark:bg-[#222222] flex items-center px-4 gap-2 border-b border-slate-200 dark:border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>

              {/* Browser Mockup Body (Scrolling Image) */}
              <div className="h-[360px] relative overflow-hidden group border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#111]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto absolute top-0 left-0 transition-transform duration-[5000ms] ease-in-out group-hover:-translate-y-[calc(100%-360px)]"
                />

                {/* Zoom Icon Button */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={() => setSelectedImage(item.img)}
                    className="w-14 h-14 rounded-full bg-black/60 hover:bg-brand-light text-white flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl pointer-events-auto backdrop-blur-sm"
                    aria-label="View full image"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-slate-800 dark:text-white text-md text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {mounted && selectedImage && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="w-full max-w-6xl max-h-full overflow-y-auto rounded-xl shadow-2xl relative bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Project Full View" className="w-full h-auto block" />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
