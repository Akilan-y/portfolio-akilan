import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/manoqdvy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-white font-display">
          Let's <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Collaborate</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Card Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white font-display">Start a Conversation.</h3>
            
            <p className="text-slate-300 mb-10 leading-relaxed font-light text-base">
              Have a project in mind, want to discuss custom visual branding, or looking to integrate dynamic video edits into your campaign? Drop a line, and let's craft something remarkable.
            </p>
            
            <div className="space-y-6">
              {/* Mail Info */}
              <div className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-white/5 hover:border-indigo-500/10 transition-colors">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Email</h4>
                  <p className="text-white text-sm font-medium">uthayakilan@gmail.com</p>
                </div>
              </div>
              
              {/* Phone Info */}
              <div className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-white/5 hover:border-indigo-500/10 transition-colors">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Phone</h4>
                  <p className="text-white text-sm font-medium">+91 8248686831</p>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-white/5 hover:border-indigo-500/10 transition-colors">
                <div className="p-3 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg text-fuchsia-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Location</h4>
                  <p className="text-white text-sm font-medium">Coimbatore, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Column */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl outline-none glass-input text-white text-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl outline-none glass-input text-white text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl outline-none glass-input text-white text-sm"
                  placeholder="Inquiry regarding project editing"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl outline-none glass-input text-white text-sm resize-none"
                  placeholder="Share a brief overview of your project..."
                ></textarea>
              </div>
              
              <div>
                {submitted ? (
                  <div className="bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 px-4 py-3 rounded-xl text-center text-sm font-semibold tracking-wide">
                    Thank you! Your message was sent successfully.
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 glass-button text-white font-semibold uppercase text-xs tracking-widest rounded-xl flex items-center justify-center gap-2 cursor-pointer ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;