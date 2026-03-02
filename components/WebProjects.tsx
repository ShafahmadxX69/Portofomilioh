
import React, { useState } from 'react';

interface WebProject {
  id: string;
  title: string;
  url: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  techStack: string[];
}

const WEB_PROJECTS: WebProject[] = [
  {
    id: '1',
    title: 'PPIC Dashboard',
    url: 'https://ppicbestbase.vercel.app/',
    description: 'A comprehensive dashboard for Production Planning and Inventory Control, streamlining material tracking and production scheduling.',
    longDescription: 'This dashboard serves as a central hub for manufacturing operations. It integrates real-time material tracking with production schedules, allowing managers to identify bottlenecks before they occur. The system features automated inventory alerts, production output visualization, and historical data analysis to improve forecasting accuracy.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183285/Web1_igyx3i.png',
    features: ['Material Tracking', 'Production Scheduling', 'Inventory Analytics'],
    techStack: ['React', 'Tailwind CSS', 'Chart.js', 'Firebase']
  },
  {
    id: '2',
    title: 'Peach Bag & Luggage Dashboard',
    url: 'https://emiliobeistfriend.vercel.app/',
    description: 'A specialized data monitoring interface with a unique aesthetic, focused on user-friendly data visualization.',
    longDescription: 'Designed with a focus on "Soft UI" and accessibility, this dashboard proves that technical tools can be beautiful. It provides a streamlined view of key performance indicators (KPIs) with custom-built widgets. The interface is optimized for high-density data without overwhelming the user, utilizing a peach and periwinkle color palette for reduced eye strain.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183286/Web2_eclpqq.png',
    features: ['Custom UI/UX', 'Real-time Monitoring', 'Data Visualization'],
    techStack: ['Next.js', 'Framer Motion', 'D3.js', 'Supabase']
  },
  {
    id: '3',
    title: 'Marrify',
    url: 'https://marrify-theasyiquewedding.vercel.app/',
    description: 'A digital wedding invitation and management platform designed for seamless guest coordination and elegant presentation.',
    longDescription: 'Marrify transforms the wedding planning experience. It offers couples a way to create elegant digital invitations with integrated RSVP tracking, guest list management, and real-time updates. The platform handles complex guest requirements, dietary preferences, and seating arrangements, all within a mobile-responsive interface.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183285/Web3_ni4oqt.png',
    features: ['Guest Management', 'Digital Invitations', 'RSVP Tracking'],
    techStack: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    id: '4',
    title: '3D Stuffing Visual',
    url: 'https://simulioh.vercel.app/',
    description: 'An innovative 3D visualization tool for container stuffing and cargo arrangement, optimizing space utilization.',
    longDescription: 'This tool solves the complex "bin packing" problem in logistics. By providing a 3D visual representation of cargo within a container, it allows users to experiment with different arrangements to maximize space utilization. It calculates weight distribution and volume efficiency in real-time, significantly reducing loading errors.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183284/Web4_zesd8s.png',
    features: ['3D Rendering', 'Space Optimization', 'Visual Arrangement'],
    techStack: ['Three.js', 'React Three Fiber', 'TypeScript', 'Vite']
  },
  {
    id: '5',
    title: 'INVOICE CHECKER',
    url: 'https://invoice-checker-five.vercel.app/',
    description: 'An automated tool for verifying invoice accuracy and streamlining the financial audit process.',
    longDescription: 'The Invoice Checker automates the tedious task of manual verification. It uses OCR and pattern matching to cross-reference invoice data against purchase orders and delivery receipts. The system flags discrepancies in pricing, quantities, and tax calculations, ensuring that financial audits are fast and error-free.',
    image: 'https://res.cloudinary.com/damdnzir0/image/upload/v1772183284/Web5_skxra8.png',
    features: ['Automated Verification', 'Error Detection', 'Financial Reporting'],
    techStack: ['Python', 'Tesseract OCR', 'React', 'FastAPI']
  }
];

const WebProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WebProject | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">My <span className="text-[#d7d2f7]">Web Projects</span></h2>
          <div className="w-20 h-1 bg-[#d7d2f7] mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WEB_PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-3xl overflow-hidden group hover:border-[#d7d2f7]/40 transition-all duration-500 flex flex-col cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b2e] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#d7d2f7] text-[#1a1b2e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <i className='bx bx-plus text-xl'></i>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 2).map(feature => (
                      <span key={feature} className="text-[10px] font-bold uppercase tracking-wider text-[#d7d2f7] bg-[#d7d2f7]/10 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-800 px-2 py-1 rounded">
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#d7d2f7] uppercase tracking-widest">View Details</span>
                    <i className='bx bx-right-arrow-alt text-[#d7d2f7] text-xl group-hover:translate-x-1 transition-transform'></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#1a1b2e]/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-10 shadow-2xl border border-[#d7d2f7]/20 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-10"
            >
              <i className='bx bx-x text-3xl'></i>
            </button>

            <div className="flex flex-col gap-8">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto object-cover max-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b2e] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="text-xs font-bold text-[#d7d2f7] bg-[#d7d2f7]/10 px-3 py-1 rounded-full border border-[#d7d2f7]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className='bx bx-info-circle text-[#d7d2f7]'></i> Project Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>
                  
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i className='bx bx-star text-[#d7d2f7]'></i> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-slate-400 text-sm">
                        <i className='bx bx-check-circle text-[#d7d2f7]'></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-[#d7d2f7]/5 rounded-2xl border border-[#d7d2f7]/10">
                    <h4 className="text-sm font-bold text-[#d7d2f7] uppercase tracking-widest mb-4">Live Preview</h4>
                    <p className="text-xs text-slate-500 mb-6">Experience the full functionality of the {selectedProject.title} live on Vercel.</p>
                    <a 
                      href={selectedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#d7d2f7] text-[#1a1b2e] font-bold rounded-xl hover:bg-[#c3bdf0] transition-all hover:scale-[1.02]"
                    >
                      Open Live App <i className='bx bx-link-external'></i>
                    </a>
                  </div>
                  
                  <div className="p-6 bg-slate-800/30 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Project Info</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Status</span>
                        <span className="text-emerald-400 font-bold">Live</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Platform</span>
                        <span className="text-slate-300">Web / Vercel</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Role</span>
                        <span className="text-slate-300">Lead Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebProjects;

