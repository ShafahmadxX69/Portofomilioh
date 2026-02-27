
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d7d2f7]/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-[#d7d2f7] font-bold tracking-widest uppercase mb-4 text-sm">Welcome to my world</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Hi! I'm <span className="gradient-text">Shafa</span><br />
              <span className="text-3xl md:text-5xl text-slate-300">Project & Data Monitoring Enthusiast</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Passionate professional specializing in administration, PPIC, Data, Business, Supply Chain, Forecasting, and workflow optimization. 
              Turning complex data into simple, "one-click" automated solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" className="px-8 py-4 bg-[#d7d2f7] hover:bg-[#c3bdf0] text-[#1a1b2e] font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#d7d2f7]/20">
                Hire Me
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://www.linkedin.com/in/shafa-millah-ahmad/" target="_blank" className="text-2xl text-slate-400 hover:text-[#d7d2f7] transition-colors"><i className='bx bxl-linkedin'></i></a>
                <a href="https://t.me/Shafahmad25XX" target="_blank" className="text-2xl text-slate-400 hover:text-[#d7d2f7] transition-colors"><i className='bx bxl-telegram'></i></a>
                <a href="https://www.instagram.com/emilio.ahmd/" target="_blank" className="text-2xl text-slate-400 hover:text-[#d7d2f7] transition-colors"><i className='bx bxl-instagram'></i></a>
                <a href="https://github.com/ShafahmadxX69" target="_blank" className="text-2xl text-slate-400 hover:text-[#d7d2f7] transition-colors"><i className='bx bxl-github'></i></a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-[512px] h-[512px] md:w-[640px] md:h-[640px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d7d2f7] to-indigo-600 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[blob_10s_infinite_alternate] opacity-20"></div>
              <img 
                src="https://res.cloudinary.com/damdnzir0/image/upload/v1772093423/shafa-profile_ohm2g3.png" 
                alt="Shafa Millah Ahmad" 
                className="relative z-10 w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl border-4 border-white/5 animate-[blob_7s_infinite_alternate]"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          100% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
