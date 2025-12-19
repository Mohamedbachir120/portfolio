import React from 'react';
import { Translation } from '../types';
import { Linkedin, Github, Mail, MapPin, Globe, Download, ExternalLink } from 'lucide-react';
import Cv from "./../assets/cv.pdf";
interface ContactProps {
  t: Translation;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  // 🔴 CHANGE THIS to match your actual file name in the public folder
 
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t.contact.subtitle}</p>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: PDF Viewer */}
          <div className="order-2 lg:order-1 flex flex-col h-full">
            <div className="glass p-2 rounded-[2rem] border border-white/10 h-[500px] lg:h-[650px] relative group">
              {/* Decorative gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10"></div>
              
              {/* The PDF Iframe */}
              <iframe 
                src={`${Cv}#toolbar=0`} 
                title="Resume CV"
                className="w-full h-full rounded-[1.5rem] bg-white"
                style={{ border: 'none' }}
              />

              {/* Mobile Fallback Overlay (Optional: helps if mobile blocks iframe scrolling) */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent rounded-b-[1.5rem] pointer-events-none lg:hidden"></div>
            </div>

            {/* Actions below PDF */}
            <div className="flex justify-center gap-4 mt-6">
              <a 
                href={Cv} 
                download="Mohamed_Hadjadji_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-xl font-bold transition-all text-white shadow-lg shadow-fuchsia-600/20"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </a>
              <a 
                href={Cv} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 rounded-xl font-bold transition-all text-white border border-white/10"
              >
                <ExternalLink size={18} />
                <span>Open Fullscreen</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Information */}
          <div className="order-1 lg:order-2 space-y-8 glass p-8 lg:p-12 rounded-[2.5rem] border-t-4 border-fuchsia-500 h-full flex flex-col justify-center">
            
            <div className="mb-2">
                <h3 className="text-3xl font-bold text-white mb-2">Let's Work Together</h3>
                <p className="text-slate-400 leading-relaxed">
                  I am always open to discussing product design work or partnership opportunities. Check out my resume on the left or contact me directly below.
                </p>
            </div>

            <div className="space-y-6">
              {/* Email Block */}
              <div className="flex items-start space-x-5 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="p-4 bg-fuchsia-500/10 text-fuchsia-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner shadow-fuchsia-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Email Address</h4>
                  <a href="mailto:mohamedbhadjadji@gmail.com" className="text-slate-400 hover:text-fuchsia-400 transition-colors break-all block mt-1">
                    mohamedbhadjadji@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex items-start space-x-5 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="p-4 bg-purple-500/10 text-purple-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner shadow-purple-500/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Location</h4>
                  <p className="text-slate-400 mt-1">Cheraga, Algiers, Algeria</p>
                </div>
              </div>

              {/* Socials Block */}
              <div className="flex items-start space-x-5 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="p-4 bg-blue-500/10 text-blue-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner shadow-blue-500/20">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Find me on</h4>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <a 
                      href="https://www.linkedin.com/in/mohamed-bachir-hadjadji-89a5201ba" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl hover:bg-[#0077b5] hover:text-white transition-all text-slate-300 border border-white/10 group/link"
                    >
                      <Linkedin size={18} className="group-hover/link:scale-110 transition-transform"/>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/Mohamedbachir120" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl hover:bg-[#333] hover:text-white transition-all text-slate-300 border border-white/10 group/link"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform"/>
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;