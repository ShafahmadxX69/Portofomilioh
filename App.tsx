
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WebProjects from './components/WebProjects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-[#d7d2f7]/30 selection:text-[#d7d2f7]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WebProjects />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-[#1a1b2e]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold gradient-text">Shafa Millah Ahmad</div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shafa Millah Ahmad. Thanks for visiting.
          </div>
          <div className="flex gap-6 text-xl">
            <a href="mailto:shmile.ahmad@gmail.com" className="text-slate-400 hover:text-white transition-colors"><i className='bx bx-envelope'></i></a>
            <a href="https://www.linkedin.com/in/shafa-millah-ahmad/" className="text-slate-400 hover:text-white transition-colors"><i className='bx bxl-linkedin'></i></a>
            <a href="https://t.me/Shafahmad25XX" className="text-slate-400 hover:text-white transition-colors"><i className='bx bxl-telegram'></i></a>
            <a href="https://www.instagram.com/emilio.ahmd/" className="text-slate-400 hover:text-white transition-colors"><i className='bx bxl-instagram'></i></a>
            <a href="https://github.com/ShafahmadxX69" className="text-slate-400 hover:text-white transition-colors"><i className='bx bxl-github'></i></a>
          </div>
        </div>
      </footer>

      {/* Persistent AI Chat Assistant trained on Shafa's profile */}
      <AIChat />
    </div>
  );
};

export default App;
