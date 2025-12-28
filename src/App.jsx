import React from 'react';
// Ensure your image is named 'apollo-hero.jpg' inside the src/assets folder
import heroImage from './assets/apollo-hero.jpg'; 

const Section = ({ title, subtitle, content, children }) => (
  <div className="mb-32 border-l border-amber-200/20 pl-8 group hover:border-amber-200/50 transition-all duration-500">
    <h2 className="text-amber-200 font-serif text-5xl italic mb-4 tracking-wide">
      {title}
    </h2>
    <h3 className="text-slate-500 uppercase tracking-[0.2em] text-xs mb-10 font-sans font-semibold">
      {subtitle}
    </h3>
    <div className="text-slate-200 leading-relaxed font-light max-w-3xl text-xl mb-10 space-y-6">
      {content}
    </div>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-200/30 selection:text-amber-200 antialiased font-sans">
      
      {/* NAVIGATION HEADER */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center border-b border-white/5 bg-[#020617]/95 backdrop-blur-md z-50">
        <div className="flex flex-col">
          <span className="font-serif italic text-2xl tracking-tighter text-amber-100/90 leading-tight">
            The Digital Observatory
          </span>
          {/* Your name: Serif, Italic, Mixed Case */}
          <span className="font-serif italic text-lg text-amber-50/70 mt-1">
            By Jeff Li
          </span>
        </div>
        <span className="text-xs tracking-[0.3em] uppercase opacity-60 font-medium font-mono text-slate-400">
          Archive v1.0
        </span>
      </nav>

      <main className="max-w-6xl mx-auto pt-56 pb-32 px-10">
        
        {/* HERO MOTTO SECTION */}
        <div className="text-center mb-40">
          <div className="space-y-6 mb-16">
            <h1 className="text-amber-100/90 font-serif italic text-4xl md:text-7xl tracking-widest leading-tight">
              Ad Astra Per Aspera
            </h1>
            <p className="text-amber-200/70 uppercase tracking-[0.5em] text-sm font-semibold">
              Through hardships to the stars
            </p>
          </div>

          {/* Apollo Hero Image */}
          <div className="max-w-4xl mx-auto px-4 group">
            <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl transition-all duration-700 hover:border-amber-200/30">
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src={heroImage} 
                alt="Apollo Mission Narrative" 
                className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-1000 ease-out"
              />
            </div>
          </div>

          <div className="w-px h-24 bg-gradient-to-b from-amber-200/50 to-transparent mx-auto mt-16 opacity-50"></div>
        </div>

        {/* HEAVEN SECTION */}
        <Section 
          title="Heaven" 
          subtitle="Community & Cultural Interpretation" 
          content={
            <>
              <p>
                Foster an astronomical community with a humanistic perspective in religious and historical interpretation of science. 
              </p>
              <p className="text-slate-400 text-lg italic leading-relaxed">
                By examining the celestial sphere as the foundation of cultural heritage, we recognize that astronomical data is a continuation of an ancient dialogue between human belief and the observable cosmos.
              </p>
            </>
          }
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {['Intro', 'Orion the Hunter', 'Big Dipper', 'Scorpio'].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 hover:border-amber-200/40 transition-all text-center cursor-default">
                <span className="text-sm uppercase tracking-widest text-slate-200 font-bold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* EARTH SECTION */}
        <Section 
          title="Earth" 
          subtitle="The Research Commons" 
          content={
            <>
              <p>
                A platform where astronomers and students can search for documentations, methodologies, and instructions for various types of astronomical research.
              </p>
              <p className="text-slate-400 text-lg italic leading-relaxed">
                This repository serves as a terrestrial anchor, translating the immense scale of universal phenomena into structured, accessible protocols for scientific inquiry and observation.
              </p>
            </>
          }
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {[
              'Time-Domain', 'Spectroscopy', 'Radio', 
              'Computational', 'Astrobiology', 'Astrophotography'
            ].map((field) => (
              <div key={field} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 hover:border-amber-200/40 transition-all cursor-default text-center">
                <span className="text-sm uppercase tracking-widest text-slate-200 font-bold">
                  {field}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* HUMAN SECTION */}
        <Section 
          title="Human" 
          subtitle="The Scholar's Notebook" 
          content={
            <>
              <p>
                To explain technology, concepts, and physics of the books, projects and things I’ve done, including video scripts and reading recommendations.
              </p>
              <p className="text-slate-400 text-lg italic leading-relaxed">
                This section documents the evolution of the observer, where technical application and theoretical study converge into a singular narrative of curiosity and intellectual growth.
              </p>
            </>
          }
        >
          <div className="space-y-8 mt-12">
            <div className="p-10 bg-white/5 rounded-lg border border-amber-200/20 hover:border-amber-200/50 transition-colors cursor-default text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-200/60 block mb-4 font-bold">Video Script</span>
              <p className="text-slate-100 italic font-serif text-3xl md:text-4xl tracking-tight">"Philosophy and History of Astronomy"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'A Brief History of Time', 
                'Astrophysics for People In A Hurry', 
                'The Logic of Scientific Discovery'
              ].map((book) => (
                <div key={book} className="bg-white/5 border border-white/10 p-6 rounded-lg flex items-center justify-center text-center hover:bg-white/10 hover:border-amber-200/40 transition-all cursor-default min-h-[100px]">
                  <span className="text-sm uppercase tracking-widest text-slate-200 font-bold">
                    {book}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-xs tracking-[0.4em] uppercase opacity-40 italic font-serif">
            The Digital Observatory // 2025
          </p>
        </footer>
      </main>
    </div>
  );
}