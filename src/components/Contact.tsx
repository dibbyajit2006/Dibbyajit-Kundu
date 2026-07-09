import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between"
        >
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-[2px] bg-blue-600"></span> Get in Touch
            </h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Let's build together</h3>
            <p className="text-slate-500 max-w-md">
              Whether you have a question, a project in mind, or just want to connect, my inbox is always open.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="mailto:dibbyajit2006@gmail.com"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group shadow-lg"
            >
              <Mail size={20} />
              Email Me
            </a>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://www.linkedin.com/in/dibbyajit-kundu-aa48a23a1/" 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-100 transition-colors border border-blue-100"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/dibbyajit2006" 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center hover:bg-slate-100 transition-colors border border-slate-200"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
