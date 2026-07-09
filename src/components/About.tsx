import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 bg-white rounded-[32px] border border-slate-100 shadow-sm"
        >
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-blue-600"></span> My Story
          </h3>
          
          <p className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight tracking-tight mb-8">
            "No prior experience yet, building my journey step by step."
          </p>
          
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-10">
            I am passionate about the intersection of artificial intelligence, design, and software development. 
            Focused on mastering modern technologies and creating impactful digital experiences. Every day is a new opportunity to learn, experiment, and grow. I'm actively exploring new technologies and frameworks to build meaningful projects.
          </p>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0 border border-purple-100">
              <GraduationCap size={28} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Current Education</h4>
              <p className="text-xl font-bold text-slate-900">B.Tech in Artificial Intelligence & Machine Learning</p>
              <p className="text-lg text-slate-600 font-medium mt-1">Academy of Technology</p>
              <div className="mt-3 inline-flex items-center gap-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  1st Year
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  Present
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
