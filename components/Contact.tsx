
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', subject: 'Asking', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const baseMessage = `Hello Shafa, I am ${formData.name}. I am contacting you regarding: ${formData.subject}.\n\n${formData.message}`;
    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://wa.me/6288808993969?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Simulate UI success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', subject: 'Asking', message: '' });
      setTimeout(() => setIsSent(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d7d2f7]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-[#d7d2f7]">Touch</span></h2>
            <p className="text-slate-400">Have a project in mind? Want to hire or just want to say hi? Feel free to drop a message!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <i className='bx bxl-whatsapp text-2xl'></i>
                </div>
                <div>
                  <div className="text-sm text-slate-500">WhatsApp Me</div>
                  <div className="text-slate-200 font-medium">+62 888-0899-3969</div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div className="text-slate-200 font-medium">Tangerang, Indonesia</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/shafa-millah-ahmad/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d7d2f7] transition-colors text-slate-400 hover:text-[#1a1b2e]">
                  <i className='bx bxl-linkedin text-xl'></i>
                </a>
                <a href="https://github.com/ShafahmadxX69" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d7d2f7] transition-colors text-slate-400 hover:text-[#1a1b2e]">
                  <i className='bx bxl-github text-xl'></i>
                </a>
                <a href="https://t.me/Shafahmad25XX" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d7d2f7] transition-colors text-slate-400 hover:text-[#1a1b2e]">
                  <i className='bx bxl-telegram text-xl'></i>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-[#d7d2f7] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <select 
                  className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-[#d7d2f7] transition-colors appearance-none cursor-pointer"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                >
                  <option value="Asking" className="bg-[#1a1b2e]">Asking</option>
                  <option value="Hiring" className="bg-[#1a1b2e]">Hiring</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Enter your message here..."
                  className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-[#d7d2f7] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold transition-all ${isSent ? 'bg-green-500' : 'bg-[#d7d2f7] hover:bg-[#c3bdf0]'} ${isSent ? 'text-white' : 'text-[#1a1b2e]'} flex items-center justify-center gap-2 shadow-lg shadow-[#d7d2f7]/10`}
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-[#d7d2f7] rounded-full animate-spin"></span>
                ) : isSent ? (
                  <>Redirecting to WhatsApp... <i className='bx bxl-whatsapp text-xl'></i></>
                ) : (
                  <>Send to WhatsApp <i className='bx bxl-whatsapp text-xl'></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
