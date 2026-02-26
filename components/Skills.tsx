
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional <span className="text-[#d7d2f7]">Skills</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-200">Expertise & Experience</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Skilled in administration, team management, and production planning. Strong command of office and cloud-based tools with a passion for efficiency through automation.
            </p>

            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <i className={`bx ${skill.icon} text-[#d7d2f7] text-xl`}></i>
                      <span className="font-medium text-slate-200">{skill.name}</span>
                    </div>
                    <span className="text-slate-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-[#d7d2f7] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[#d7d2f7]/10 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Data visualization" 
                className="relative z-10 rounded-3xl shadow-2xl border border-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
