import React, { useMemo } from 'react';
// Ensure your image is named 'apollo-hero.jpg' inside the src/assets folder
import heroImage from './assets/apollo-hero.jpg'; 

// Refined Section Component with Glass-morphism boxing
const Section = ({ title, subtitle, content, children }) => (
  <section className="mb-24 relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md p-8 md:p-12 transition-all duration-700 hover:border-amber-200/30 hover:bg-slate-900/50 group">
    {/* Subtle Inner Glow Effect that appears on hover */}
    <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-200/5 blur-[100px] group-hover:bg-amber-200/10 transition-colors" />
    
    <div className="relative z-10">
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
  </section>
);

export default function App() {
  // Generate 150 random stars once
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1 + 'px',
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5 + 's'
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-200/30 selection:text-amber-200 antialiased font-sans relative overflow-x-hidden">
      
      {/* --- COSMIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
        {/* Milky Way Nebula Effect */}
        <div className="absolute inset-0 opacity-40" 
             style={{
               background: `radial-gradient(circle at 50% -20%, #1e1b4b 0%, transparent 60%),
                            radial-gradient(circle at 80% 80%, #1e1b4b 0%, transparent 50%),
                            radial-gradient(ellipse at 50% 50%, #312e81 0%, transparent 70%)`
             }} 
        />

        {/* Dynamic Twinkling Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDelay: star.delay,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}

        {/* Subtle Stardust Texture */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* NAVIGATION HEADER */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-transparent">
        <div className="flex flex-col">
          <span className="font-serif italic text-2xl tracking-tighter text-amber-100/90 leading-tight">
            The Digital Observatory
          </span>
          <span className="font-serif italic text-lg text-amber-50/70 mt-1">
            by Jeff Li
          </span>
        </div>
        <span className="text-xs tracking-[0.3em] uppercase opacity-60 font-medium font-mono text-slate-400">
          Archive v1.0
        </span>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto pt-56 pb-32 px-10">
        
        {/* HERO SECTION */}
        <div className="text-center mb-40">
          <div className="space-y-6 mb-16">
            <h1 className="text-amber-100/90 font-serif italic text-4xl md:text-7xl tracking-widest leading-tight drop-shadow-2xl">
              Ad Astra Per Aspera
            </h1>
            <p className="text-amber-200/70 uppercase tracking-[0.5em] text-sm font-semibold">
              Through hardships to the stars
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 group">
            <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl transition-all duration-700 hover:border-amber-200/30">
              <div className="absolute inset-0 bg-indigo-950/20 mix-blend-overlay z-10 pointer-events-none"></div>
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
              <p>Foster an astronomical community with a humanistic perspective in religious and historical interpretation of science.</p>
              <p className="text-slate-400 text-lg italic leading-relaxed">By examining the celestial sphere as the foundation of cultural heritage, we recognize that astronomical data is a continuation of an ancient dialogue between human belief and the observable cosmos.</p>
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {['Intro', 'Orion the Hunter', 'Big Dipper', 'Scorpio'].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 hover:border-amber-200/40 transition-all text-center cursor-pointer group/item">
                <span className="text-sm uppercase tracking-widest text-slate-200 font-bold group-hover/item:text-amber-100 transition-colors">
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
              <p>A platform where astronomers and students can search for documentations, methodologies, and instructions for various types of astronomical research.</p>
              <p className="text-slate-400 text-lg italic leading-relaxed">This repository serves as a terrestrial anchor, translating the immense scale of universal phenomena into structured, accessible protocols for scientific inquiry and observation.</p>
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['Time-Domain', 'Spectroscopy', 'Radio', 'Computational', 'Astrobiology', 'Astrophotography'].map((field) => (
              <div key={field} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 hover:border-amber-200/40 transition-all cursor-pointer text-center group/item">
                <span className="text-sm uppercase tracking-widest text-slate-200 font-bold group-hover/item:text-amber-100 transition-colors">
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
              <p>To explain technology, concepts, and physics of the books, projects and things I’ve done, including video scripts and reading recommendations.</p>
              <p className="text-slate-400 text-lg italic leading-relaxed">This section documents the evolution of the observer, where technical application and theoretical study converge into a singular narrative of curiosity and intellectual growth.</p>
            </>
          }
        >
          <div className="space-y-8 mt-12">
            <div className="p-10 bg-white/5 rounded-lg border border-amber-200/20 hover:border-amber-200/40 transition-colors cursor-pointer text-center group/item">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-200/60 block mb-4 font-bold">Video Script</span>
              <p className="text-slate-100 italic font-serif text-3xl md:text-4xl tracking-tight group-hover/item:text-amber-100 transition-colors">"Philosophy and History of Astronomy"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['A Brief History of Time', 'Astrophysics for People In A Hurry', 'The Logic of Scientific Discovery'].map((book) => (
                <div key={book} className="bg-white/5 border border-white/10 p-6 rounded-lg flex items-center justify-center text-center hover:bg-white/10 hover:border-amber-200/40 transition-all cursor-pointer min-h-[100px] group/item">
                  <span className="text-sm uppercase tracking-widest text-slate-200 font-bold group-hover/item:text-amber-100 transition-colors">
                    {book}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-xs tracking-[0.4em] uppercase opacity-40 italic font-serif">
            The Digital Observatory // 2025
          </p>
        </footer>
      </main>
    </div>
  );
}