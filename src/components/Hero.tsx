import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-6 order-2 md:order-1 text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-purple-600 uppercase tracking-widest shadow-sm"
          >
            HELLO, WORLD! 👋
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Dibbyajit Kundu</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-xl font-medium text-slate-600"
          >
            Aspiring Developer | AI & Design Enthusiast
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start items-center"
          >
            <a 
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 active:scale-95 transition-transform flex items-center gap-2 group"
            >
              Explore My Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-3">
              <a href="https://github.com/dibbyajit2006" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl hover:border-blue-400 text-slate-700 hover:text-blue-600 transition-all">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/dibbyajit-kundu-aa48a23a1/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl hover:border-blue-400 text-slate-700 hover:text-blue-600 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dibbyajit2006@gmail.com" className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl hover:border-blue-400 text-slate-700 hover:text-blue-600 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-6 pt-6 text-xs font-semibold text-slate-400 uppercase tracking-widest"
          >
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> India Based</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Open to Collaborate</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[48px] overflow-hidden border-8 border-white shadow-xl shadow-slate-200/50">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-pink-100 mix-blend-overlay z-10 pointer-events-none"></div>
             <img 
               src="https://github.com/dibbyajit2006.png?size=1024" 
               alt="Dibbyajit Kundu" 
               className="w-full h-full object-cover object-center relative z-0"
               onError={(e) => {
                 e.currentTarget.src = 'https://ui-avatars.com/api/?name=Dibbyajit+Kundu&size=512&background=random';
               }}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
