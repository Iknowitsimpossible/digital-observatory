import React, { useMemo, useState, useEffect } from 'react';
// 确保你的图片位于 src/assets 文件夹中，并命名为 apollo-hero.jpg
import heroImage from './assets/apollo-hero.jpg'; 

// 玻璃拟态卡片组件 (Shared across pages)
const Section = ({ title, subtitle, content, children }) => (
  <section className="mb-24 relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md p-8 md:p-12 transition-all duration-700 hover:border-amber-200/30 hover:bg-slate-900/50 group">
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

// --- 详情页组件: Video Script Detail ---
const ScriptDetailPage = ({ onBack }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <button 
      onClick={onBack}
      className="mb-12 flex items-center gap-2 text-amber-200/60 hover:text-amber-200 transition-colors uppercase tracking-[0.2em] text-xs font-bold group"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Observatory
    </button>

    <Section 
      title="Video Scripts for Philosophy and History of Astronomy——Between Heaven and Earth" 
      subtitle="Full Video Script in English Translation" 
      content={
        <>
          <p className="text-amber-100/90 italic mb-12">"The history of astronomy is a history of receding horizons." — Edwin Hubble</p>
          
          <div className="space-y-12 text-slate-300 font-sans text-lg border-l border-amber-200/20 pl-8">
            
            {/* Episode I */}
            <div className="space-y-6">
              <h4 className="text-amber-200 font-serif italic text-3xl mb-4">
                Episode I: Introduction to "Between Heaven and Earth"
              </h4>
              <div className="space-y-4 leading-relaxed font-light">
                <p>Hello, my dear viewers! I’m Jeff, and welcome to Between Heaven and Earth. To be honest, I thought long and hard before making this video. When people get bored, they always look for something to do, and I think I must have had a "brain fart" when I decided to start making videos. Just kidding, just kidding! But seriously—official accounts, public speaking, short-form videos, science columns... there are so many things I could have done. Why did I choose the hardest path? While I was designing the outline, I asked myself: Why do I want to make videos?</p>
                <p>Before I answer that, I want to vent a little. First of all, as an amateur creator, I’m a one-man team handling a massive workload. Investing so much time into video production seemed to contradict my original goal, which was to use social media as a medium to promote a blend of science and the humanities. Because of this, the production of these first few episodes has been quite a bumpy road. I stopped and started several times, and I even began to doubt myself. But after thinking it over, I finally figured it out. I’ve done so much preparation; if I don't give it my all and finish this, wouldn't all that effort go to waste? Ultimately, I successfully completed all the recordings and finished this series. By the time you’re watching this, I’ve likely already finished most of the recording and editing work.
                </p>
                <p>Back to the main point: I want to talk about what this series will cover. As I mentioned, I want to use these videos to share a unique perspective on the development of science. I have to admit, "science" is a very broad concept. In the process of creating this channel, I realized my own limitations. Since I can’t possibly cover every scientific field but still want to be unique—to "have my cake and eat it too"—I decided to focus on a specific branch. Here’s where I sneak in a bit of personal bias: as an astronomy enthusiast, I am determined to build an astronomy channel that even teenagers can understand and learn from. I believe that after watching my videos, you won’t just learn interesting anecdotes from the history of science; you’ll also gain knowledge in history, philosophy, and hardcore science.
                </p>
                <p>If you are a primary school student, don’t worry! This series is the extra-curricular class you won't hear in school. If you are in middle or high school, congratulations—you’ll find that while you’re relaxing and watching, your school performance might actually improve. Even if you aren't a student, this channel welcomes all lovers of history, astronomy, and philosophy. If this content suits your taste, please don't be stingy with that "Triple-Link" of liking, subscribing, and saving! I promise I will do my best to integrate different disciplines, blending math, history, literature, and art to enrich the content. I won't let you down.
                </p>
                <p>Wait, wait, wait! Look at me—I almost forgot to introduce the actual roadmap for this series. After a "systematic study" lasting 360 seconds, I have divided the history of astronomy into seven key chapters. We will begin with The Dawn of Reason, which provides an overview of the five key periods of scientific growth. From there, we move to Genesis Reimagined, where we explore the mainstream views of cosmic origins through the lenses of myth, science, and philosophy. Our third chapter, Heavenly Connections, explores how Eastern and Western religions and philosophies shaped our very values and views of nature.
                </p>
                <p>The journey continues with East Meets West, where we showcase the different thinking frameworks and timelines of astronomical progress between cultures. Then, we tackle Beyond the Horoscope, documenting the critical shift from traditional cultural interpretations to a modern scientific understanding of the world. As we approach the present day, Modern Miracles will describe the breathtaking developments from the 20th century onwards, including complex cosmological theories. Finally, we conclude with The Final Frontier, where we will speculate on and predict the future logic and framework of astronomy and science.
                </p>
                <p>That’s the full lineup for this series! As a newcomer, please don’t be stingy with your likes, comments, and shares. If you find this series interesting, hit that follow and save button—who knows, maybe I’ll pop up on your homepage again someday. If you want to know what the first episode is about, grab a chair, get comfortable, and stay tuned for the next chapter!
                </p>
              </div>
            </div>

            {/* Episode II */}
            <div className="space-y-6">
              <h4 className="text-amber-200 font-serif italic text-3xl mb-4">
              The Dawn of Reason: Mapping the Five Eras of Science

              </h4>
              <div className="space-y-4 leading-relaxed font-light">
                <p>From ancient times to the present, humanity's curiosity about the universe has never wavered. We cannot help but gaze at the sky, where the stars look back like eyes staring down at the earth. The connection between humans and nature is truly fascinating. The environment deeply influences generations of human life, standardizing the lifestyles of civilizations; in turn, humans use technology and science to reshape their environment and the natural world.
                </p>
                <p>Hello, my dear viewers! I’m Jeff, and welcome to Between Heaven and Earth. In this episode, we will use a few well-known cases to outline the origins of science and its most important developmental stages.
                </p>
                <p>Before we dive in, have you ever thought about what science actually is? How do we define it? From a modern perspective, science is essentially a "second level" of facts. As shown in the diagram, science is fundamentally the interpretation of facts. It is a discourse or a hypothesis put forward by scientists regarding a phenomenon. Therefore, we must realize a crucial point: "Our science is a subjective interpretation inferred by scientists based on factual experiments and theoretical experience." So, students, you must clearly understand that scientific theories could very well be wrong! Our understanding of the essence of things and phenomena is what we call science, and this is something that changes over time. When we read more books, learn more knowledge, encounter newer theories, or use newer observation tools, our explanation for the exact same thing can become completely different.
                </p>
                <p>For example, do you ever feel like time is moving faster? When you were a kid riding a bike in the neighborhood, it felt like a century had passed. But once you grow up, you lie on your bed and an entire afternoon vanishes just scrolling through short videos. In reality, from a factual standpoint, time hasn't sped up; however, human perception—influenced by memory and aging—becomes "numb" to the time occupied by repetitive actions. This illustrates how subjective time perception is shaped by psychological factors.
                </p>
                <p>Take Pluto as another example. Before 2006, Pluto was an officially recognized planet because it orbited the Sun and formed a sphere. However, as scientists observed more and more Pluto-like objects in the solar system, they had to "demote" it to a dwarf planet. In reality, the physical Pluto hasn't changed in size or shape over these decades. But when humans used more advanced observation methods and precision tools to explore the solar system, and our knowledge reached a certain threshold, we had no choice but to change our outdated scientific theories.
                </p>
                <p>Returning to our main point: the development of science is simply a process of constant falsification, modification, improvement, and revolution. For thousands of years, science has progressed by breaking the ideas of predecessors to establish brand-new theories.
                </p>
                
                <h5 className="text-amber-100 font-serif text-xl mt-8">The First Period: Pre-Science</h5>
                <p>Before the formal birth of science, humans learned to harness the power of nature. Tens of thousands of years ago, humans knew how to use fire to cook food, ward off disease, and hunt. They began to learn which fruits were edible and which were not, and to avoid venomous snakes. These experiences were recorded and passed down through language or simple symbols. However, humans did not yet have a systematic scientific theory because most phenomena were merely recorded rather than explained through any philosophical method. Looking at our chart, human science at this time stayed at "Level 0"—merely the discovery, observation, and summary of phenomena.
                </p>

                <h5 className="text-amber-100 font-serif text-xl mt-8">The Second Period: The Philosophical Foundation</h5>
                <p>The habit of observation and summary was eventually passed down. The second period of scientific development, roughly from the 5th to the 3rd century BCE, saw people move beyond mere discovery toward using philosophical thought to explain phenomena. These ideas deeply influenced the development of scientific theory. In the 4th century BCE, there was a Greek philosopher, scientist, and thinker named Aristotle. He laid a solid foundation for the birth of science. Through his observation of nature and his study of logic, he summarized many new concepts. His method is known as Induction, which stands in contrast to Deduction.
                </p>
                <p>So, what are induction and deduction? In plain terms, induction means drawing a universal conclusion from a limited number of specific facts. For example: I pick up an apple at a fruit stand, take a bite, and find it delicious. I take another one in my hand and put one in a bag. On the way, I eat the one in my hand—it’s delicious. A few hours later at home, I eat the one from the bag—and guess what? Still delicious! Can I then conclude that all the apples in that shop are delicious?
                </p>
                <p>Wait, don't rush! There’s a problem with that logic. For instance, some apples in the shop might be rotten or tasteless; if so, my conclusion would be wrong. This is the truth: we cannot reach an absolute conclusion without eating every single apple in the store. However, two thousand years ago, Aristotle had a deeper understanding. To him, induction was essentially an empirical summary—a necessary condition for the premises of deduction. Remember my definition of science? "A subjective interpretation based on facts and experience." Indeed, another vital thought in scientific development is deduction, for which induction is the prerequisite.</p>
                <p>If induction is one side of the coin, deduction is the other. Both are equally important. Deduction is a thinking model that moves from the general to the specific. For example: "All official teams have a goalkeeper. The school soccer team is an official team. Therefore, the school soccer team has a goalkeeper." That sounds very logical, right? But look at this one: "All humans fear death. Yue Fei was a human. Therefore, Yue Fei feared death." Do you see the problem? When performing deduction, we must consider the accuracy of the premise. If the premise is true, the conclusion is 100% successful. But if the premise is wrong, the conclusion might be wrong. In fact, not all people fear death; therefore, while the second premise (Yue Fei was human) is true, it doesn't mean Yue Fei feared death. This is the basic concept of the Aristotelian Syllogism, consisting of a Major Premise (universal law), a Minor Premise (specific case), and a Conclusion (the inevitable judgment).</p>

                <h5 className="text-amber-100 font-serif text-xl mt-8">The Third Period: The Islamic Golden Age</h5>
                <p>From the 3rd to the 14th century, science continued to flourish. However, the protagonist during this time was not Europe, but the Islamic regions to the southeast. Because of their superior geographical location and open spirit of innovation, the Islamic world provided the essential "practical tools" and "theoretical foundations" for the coming Scientific Revolution in Europe.</p>
                <p>One such tool was the astrolabe, an essential instrument for the Age of Discovery starting in the late 15th century, which was invented by Islamic scholars. This actually stemmed from the devout faith of Muslims. Because Islam requires precise prayer directions and times, the astrolabe was primarily used to determine the relative position of the Kaaba (the holy site in Mecca) long before the Age of Discovery. This illustrates the role religion played in the development of science. Furthermore, if you look at a world map, you’ll see how geography influences science. Below Afghanistan lies India. Through cultural exchange, the Islamic world introduced the Arabic-Indic numeral system (1-9). Without these numbers, we might still be counting with ropes or objects, let alone developing algebra.</p>

                <h5 className="text-amber-100 font-serif text-xl mt-8">The Fourth Period: The Scientific Revolution</h5>
                <p>Starting in 1543 with Copernicus publishing On the Revolutions of the Heavenly Spheres, the Scientific Revolution officially began. Copernicus proposed Heliocentrism—the idea that the major bodies in the universe revolve around the Sun, not the Earth. This matches the solar system we see today.</p>
                <p>Do you remember Aristotle? Two thousand years ago, his theory—that the Sun and all celestial bodies revolve around the Earth—was widely supported. It sounds ridiculous now, but because the Papacy controlled almost all cultural spheres and Aristotle’s theory supported their religious rule, it persisted for over 1,000 years! Therefore, Copernicus’s Heliocentrism was vital to humanity because it taught us not to fear authority, but to view scientific development with a critical and rigorous eye. After all, science is just an explanation of natural phenomena; no one's theory is definitively right, and no one's idea is definitively wrong. This showed that science is falsifiable and brought a fresh perspective to the world.</p>
                <p>Another landmark case during the Scientific Revolution was Isaac Newton. When we think of Newton, we immediately think of the apple tree. One day, while sitting under a tree, a falling apple hit him on the head, leading him to discover the Law of Universal Gravitation. Newton found that any objects with mass exert a mutual force on each other, proportional to their mass and inversely proportional to the square of the distance between them. This explanation represented a new way of thinking in modern science: a model of observation, hypothesis, mathematical deduction, and verification. However, from the perspective of modern scientists, Newtonian mechanics had a limitation: his assumption of a constant universe and absolute time. These conditions would be shattered in the two centuries that followed.</p>
                <p className="pt-6 italic text-slate-400">The pace of scientific development has never stopped. From the primitive era to today's flourishing fields of science, humanity has taken less than five thousand years. Perhaps science was never "born"—it is simply a relay race of human questioning. If we compare science to a plant, it didn't just burst forth as a giant tree; it spent thousands of years gathering strength and a hundred years growing branches, finally blooming into a five-petaled flower under the irrigation of reason.</p>
              </div>
            </div>
            {/* Episode III - Full Script */}
            <div className="space-y-8">
              <h4 className="text-amber-200 font-serif italic text-3xl mb-4">
                Episode III: Genesis Reimagined — Cosmic Origins
              </h4>
              <div className="space-y-6 leading-relaxed font-light">
                <p>Friends, as we grow up, we all eventually ask our parents that classic question: "Where did I come from?" Parents usually respond with something like, "We picked you up from a trash can," or "You were a free gift with a phone plan." While they might just be teasing, many of us actually believed those stories for a very long time.</p>
                
                <p>As the darlings of Earth, scientists have long explored the origins of humanity, trying to find answers from Mother Earth herself. In earlier times, the Chinese believed we were pinched out of clay by the goddess Nüwa. Myths in the Western world similarly suggested we were composed of dust, tree branches, or other natural elements. Until Darwin's theory of evolution arrived, we were essentially like little babies, comforted and misled by these mythological stories.</p>
                
                <p>Hello, my dear viewers! I’m Jeff, and welcome to <strong>Between Heaven and Earth</strong>. In our last episode, we discussed the four stages of scientific development. From the dawn of civilization to the modern era, humanity’s way of understanding the world and the universe has gradually matured. We have learned to use two seemingly opposing ways of thinking: myth and science. Many people find common ground between these two worldviews to shape their unique values. Take Isaac Newton, for example—he spent his early years studying natural laws, yet in his later years, he was a firm theological believer. Indeed, as long as the mysteries of the universe remain partially undiscovered and human exploration of the unknown continues, myth and religion remain powerful ways for humanity to interpret the unexplained.</p>

                <h5 className="text-amber-100 font-serif text-xl mt-10 italic">The Mythological Awakening: Pangu and Ymir</h5>
                <p>The origin of the universe is a topic that scientists discuss endlessly. Just as children are instinctively curious about their own arrival, humanity has wondered how the universe began since ancient times. In Chinese mythology, there is a pivotal figure regarded as the creator god who separated the heavens from the earth: Pangu.</p>
                
                <p>This story comes from the Three Kingdoms era text <em>Sanwu Liji</em>, which states: "The universe was as chaotic as a hen's egg, and Pangu was born within it. For eighteen thousand years, the heavens and earth were split; the clear 'Yang' rose to become the sky, and the turbid 'Yin' sank to become the earth." This means that at the very beginning, the universe was a chaotic mass like an egg. Pangu lived inside this egg, sleeping for eighteen thousand years. Upon waking, he split the world apart. After completing this monumental task, Pangu died of exhaustion, and his body transformed into all things in nature.</p>
                
                <p>Western creation myths share similar motifs; in Norse mythology, the giant Ymir was slain, and his body became the world—his bones the mountains and his blood the oceans. These myths provided the only reasonable explanations for ancient people thousands of years ago.</p>

                <h5 className="text-amber-100 font-serif text-xl mt-10 italic">The Lens of Reality: Galileo and the Telescope</h5>
                <p>However, as science became the mainstream way of knowing, humanity formed a more complete worldview during the modern era—a view that has been continuously refined alongside the advancement of observation tools. For this, we must thank Galileo Galilei. As a 16th and 17th-century scientist and astronomer, he successfully built a refracting telescope by grinding lenses and adjusting their positions. A refractor works by changing the direction of light waves passing through the lens to magnify distant objects. This telescope allowed Galileo to discover numerous details in the cosmos, and these discoveries enriched humanity’s celestial perspective.</p>

                <h5 className="text-amber-100 font-serif text-xl mt-10 italic">Receding Horizons: Edwin Hubble</h5>
                <p>Despite these advancements, for a long time, humans still believed the solar system was the center of the Milky Way and that the Milky Way was the entire universe. At that time, most of our cosmic perception was confined to our own galaxy. Much like how people in the Middle Ages believed Earth was the center of the universe, we didn't know the true scale of the cosmos or how tiny Earth really was, naively assuming the Milky Way was the limit.</p>
                
                <p>However, a genius named <strong>Edwin Hubble</strong> corrected this notion. His method was precise: he persistently observed the Andromeda Nebula. After discovering a Cepheid variable—a type of star used to measure cosmic distances because its brightness changes periodically—he found that the star in Andromeda was much further away than any similar star in the Milky Way. Using this method, Hubble continued to study other "nebulae" and eventually confirmed that millions of galaxies exist beyond our own. This discovery completely reshaped humanity’s thousand-year-old concept of the universe's size.</p>

                <h5 className="text-amber-100 font-serif text-xl mt-10 italic">The Echo of the Beginning: The Big Bang</h5>
                <p>Hubble’s most significant discovery, however, was the <strong>cosmic redshift</strong>. This experiment revealed that the universe has been expanding since its birth, leading us to the most important theory of our time: <strong>The Big Bang</strong>. In simple terms, this theory posits an expanding universe that began as a single point of extreme energy, density, and heat.</p>
                
                <p>While the current temperature of the universe is around -270°C, at its birth, it could have been as hot as 10 billion degrees! Therefore, the process of cosmic expansion is essentially a process of cooling down. In 1929, Hubble found that the light emitted by distant galaxies was shifted toward the red end of the spectrum, proving this expansion. Think of it like a child holding a party balloon with dots drawn on it. As you blow air into the balloon, the dots move apart and the distance between them stretches. Hubble discovered that the further away a galaxy is, the faster it appears to be moving away from us.</p>

                <p className="pt-8 border-t border-white/10 italic text-slate-400">
                  Is the Big Bang theory definitely correct? Based on current evidence, yes. But like all science, it must face the tests of falsification and revision. Ultimately, what the origin of the universe actually "is" might be less important than the fact that human civilization tries to understand the meaning of its birth. We use these explanations to bridge the gap between our knowledge and our profound curiosity about the unknown.
                </p>

                <p className="font-semibold text-amber-200/80 mt-6">
                  That is all for today’s look at our cosmic origins! As a new creator, please don't be stingy with your "Triple-Link"—Like, Subscribe, and Comment. Stay tuned for the next chapter!
                </p>
              </div>
            </div>

            {/* Status Footer Section */}
            <div className="mt-20 pt-12 border-t border-amber-200/10">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-1 w-12 bg-amber-200/20 rounded-full mb-2" />
                <p className="text-amber-100/60 font-serif italic text-lg tracking-wide">
                8 episodes down, a few more to go! The remaining parts of the series are currently being prepared for upload. Thanks for your patience!
                </p>
                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-mono">
                  Observatory Status: Updating Archives...
                </span>
              </div>
            </div>

          </div>
        </>
      }
    />
  </div>
);
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1 + 'px',
      opacity: Math.random() * 0.7 + 0.3,
      delay: `${Math.random() * 5}s`
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-200/30 selection:text-amber-200 antialiased font-sans relative overflow-x-hidden">
      
      {/* --- 宇宙背景层 --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
        <div className="absolute inset-0 opacity-40" 
             style={{
               background: `radial-gradient(circle at 50% -20%, #1e1b4b 0%, transparent 60%),
                            radial-gradient(circle at 80% 80%, #1e1b4b 0%, transparent 50%),
                            radial-gradient(ellipse at 50% 50%, #312e81 0%, transparent 70%)`
             }} 
        />
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
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* --- 导航栏 --- */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex flex-col cursor-pointer" onClick={() => setCurrentPage('home')}>
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
        
        {currentPage === 'home' ? (
          <div className="animate-in fade-in duration-1000">
            {/* HERO 区域 */}
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

            {/* HEAVEN 板块 */}
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

            {/* EARTH 板块 */}
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

            {/* HUMAN 板块 */}
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
                <div 
                  onClick={() => setCurrentPage('script')}
                  className="p-10 bg-white/5 rounded-lg border border-amber-200/20 hover:border-amber-200/60 hover:bg-amber-200/5 transition-all cursor-pointer text-center group/item scale-100 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-amber-200/60 block mb-4 font-bold group-hover/item:text-amber-200 transition-colors">View Video Script</span>
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
          </div>
        ) : (
          <ScriptDetailPage onBack={() => setCurrentPage('home')} />
        )}

        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-xs tracking-[0.4em] uppercase opacity-40 italic font-serif">
            The Digital Observatory // 2025
          </p>
        </footer>
      </main>
    </div>
  );
}