
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About <span className="text-[#d7d2f7]">Me</span></h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d7d2f7] to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="https://res.cloudinary.com/damdnzir0/image/upload/v1772093423/about_l8nv0h.png" 
                alt="Shafa Millah Ahmad" 
                className="relative rounded-2xl w-full object-cover shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-slate-100">I am Shafa Millah Ahmad</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                I am a passionate and detail-oriented professional with experience in <strong>administration, supervision, quality control, procurement</strong>, and <strong>production planning (PPIC)</strong>. Holding a Bachelor's degree in English Education, I seamlessly blend communication skills with strong analytical and organizational capabilities.
              </p>
              <p>
                I actively contribute to <strong>management and team coordination</strong>, taking part in both leadership and strategy execution. I enjoy designing efficient workflows that enhance productivity and align teams toward shared goals.
              </p>
              <p>
                One of my strongest assets is the ability to <strong>automate administrative tasks</strong>. I build custom tools using <strong>Microsoft Excel (VBA)</strong> and <strong>Google Workspace (App Script)</strong>, enabling "one-click" systems that streamline repetitive work.
              </p>
              <p>
                I’m driven by curiosity and a continuous desire to grow. I believe in working smarter and always seek challenges that push me to deliver innovative and effective solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 glass-card rounded-xl">
                <div className="text-[#d7d2f7] font-bold text-2xl mb-1">95%</div>
                <div className="text-slate-500 text-sm">Efficiency Gain</div>
              </div>
              <div className="p-4 glass-card rounded-xl">
                <div className="text-[#d7d2f7] font-bold text-2xl mb-1">One-Click</div>
                <div className="text-slate-500 text-sm">Automation Logic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
