
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct mailto link for "automatic" sending via user's client
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:shmile.ahmad@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoUrl;

    // Simulate UI success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1000);
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
                <div className="w-12 h-12 rounded-full bg-[#d7d2f7]/10 flex items-center justify-center text-[#d7d2f7]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email Me</div>
                  <div className="text-slate-200 font-medium">shmile.ahmad@gmail.com</div>
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
                {/* Placeholder social icons */}
                {[1, 2, 3].map(i => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#d7d2f7] transition-colors">
                    <div className="w-5 h-5 bg-slate-400 mask-center"></div>
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-[#d7d2f7] transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-[#d7d2f7] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea 
                rows={5}
                placeholder="Your Message"
                className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-[#d7d2f7] transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold transition-all ${isSent ? 'bg-indigo-500' : 'bg-[#d7d2f7] hover:bg-[#c3bdf0]'} ${isSent ? 'text-white' : 'text-[#1a1b2e]'} flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : isSent ? (
                  <>Sent Successfully <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
