
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Work <span className="text-[#d7d2f7]">Experiences</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group relative glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b2e] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest bg-[#d7d2f7]/20 text-[#d7d2f7] rounded-md backdrop-blur-sm border border-[#d7d2f7]/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-[#d7d2f7] uppercase tracking-wider bg-[#1a1b2e]/50 px-2 py-1 rounded">
                      {project.duration}
                    </span>
                  </div>
                  <div className="mb-1">
                    <h4 className="text-[#d7d2f7] text-sm font-bold uppercase tracking-wider opacity-80">{project.company}</h4>
                    <h3 className="text-xl font-bold text-white leading-tight">{project.id}. {project.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 rounded-full bg-[#d7d2f7] flex items-center justify-center text-[#1a1b2e]">
                    <i className='bx bx-plus text-2xl'></i>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#1a1b2e]/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-10 shadow-2xl border border-[#d7d2f7]/20 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <i className='bx bx-x text-3xl'></i>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full aspect-square object-cover rounded-2xl shadow-xl border border-white/10"
                />
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-[#d7d2f7] text-xs font-bold uppercase tracking-widest mb-2">Duration</h4>
                    <p className="text-slate-200 text-sm">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-[#d7d2f7] text-xs font-bold uppercase tracking-widest mb-2">Systems</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.systems?.map(s => (
                        <span key={s} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-white/5">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#d7d2f7] text-xs font-bold uppercase tracking-widest mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools?.map(t => (
                        <span key={t} className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="mb-4">
                  <h4 className="text-[#d7d2f7] text-sm font-bold uppercase tracking-widest mb-1">{selectedProject.company}</h4>
                  <h3 className="text-3xl font-bold text-white leading-tight">{selectedProject.title}</h3>
                </div>
                <p className="text-slate-400 mb-8">{selectedProject.description}</p>

                <div className="space-y-8">
                  <section>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                      <i className='bx bx-list-check text-[#d7d2f7]'></i> Job Descriptions
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.jobdesks?.map((j, i) => (
                        <li key={i} className="flex gap-3 text-slate-300 text-sm">
                          <span className="text-[#d7d2f7]">•</span> {j}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                      <i className='bx bx-error-circle text-[#d7d2f7]'></i> Challenges & Problems
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.problems?.map((p, i) => (
                        <li key={i} className="flex gap-3 text-slate-300 text-sm">
                          <span className="text-rose-400">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
