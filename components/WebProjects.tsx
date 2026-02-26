
import React from 'react';

interface WebProject {
  id: string;
  title: string;
  url: string;
  description: string;
  image: string;
  features: string[];
}

const WEB_PROJECTS: WebProject[] = [
  {
    id: '1',
    title: 'PPIC Dashboard',
    url: 'https://ppicbestbase.vercel.app/',
    description: 'A comprehensive dashboard for Production Planning and Inventory Control, streamlining material tracking and production scheduling.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800',
    features: ['Material Tracking', 'Production Scheduling', 'Inventory Analytics']
  },
  {
    id: '2',
    title: 'Pink Dashboard',
    url: 'https://emiliobeistfriend.vercel.app/',
    description: 'A specialized data monitoring interface with a unique aesthetic, focused on user-friendly data visualization.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    features: ['Custom UI/UX', 'Real-time Monitoring', 'Data Visualization']
  },
  {
    id: '3',
    title: 'Marrify',
    url: 'https://marrify-theasyiquewedding.vercel.app/',
    description: 'A digital wedding invitation and management platform designed for seamless guest coordination and elegant presentation.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    features: ['Guest Management', 'Digital Invitations', 'RSVP Tracking']
  },
  {
    id: '4',
    title: '3D Stuffing Visual',
    url: 'https://simulioh.vercel.app/',
    description: 'An innovative 3D visualization tool for container stuffing and cargo arrangement, optimizing space utilization.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    features: ['3D Rendering', 'Space Optimization', 'Visual Arrangement']
  },
  {
    id: '5',
    title: 'INVOICE CHECKER',
    url: 'https://invoice-checker-five.vercel.app/',
    description: 'An automated tool for verifying invoice accuracy and streamlining the financial audit process.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    features: ['Automated Verification', 'Error Detection', 'Financial Reporting']
  }
];

const WebProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">My <span className="text-[#d7d2f7]">Web Projects</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WEB_PROJECTS.map((project) => (
            <div key={project.id} className="glass-card rounded-3xl overflow-hidden group hover:border-[#d7d2f7]/40 transition-all duration-500 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b2e] to-transparent opacity-60"></div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#d7d2f7] text-[#1a1b2e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                >
                  <i className='bx bx-link-external text-xl'></i>
                </a>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map(feature => (
                      <span key={feature} className="text-[10px] font-bold uppercase tracking-wider text-[#d7d2f7] bg-[#d7d2f7]/10 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#d7d2f7] hover:underline"
                  >
                    View Live Site <i className='bx bx-right-arrow-alt'></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;
