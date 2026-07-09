import { motion } from 'motion/react';
import { ArrowRight, Sparkles, FolderKanban } from 'lucide-react';

const placeholderProjects = [
  {
    title: "Project Alpha",
    category: "Featured Project",
    description: "An upcoming full-stack web application focusing on productivity and seamless user experience.",
    status: "In Progress",
    isDark: true
  },
  {
    title: "AI Experiment",
    category: "Machine Learning",
    description: "Exploring the capabilities of generative AI models to create helpful daily tools.",
    status: "Planned",
    isDark: false
  },
  {
    title: "Design System",
    category: "UI/UX",
    description: "A comprehensive design system built with Figma to streamline frontend development.",
    status: "Concept",
    isDark: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-blue-600"></span> Projects Workspace
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg mt-4">
            A sneak peek into what I'm currently building and planning for the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group overflow-hidden relative flex flex-col justify-between p-8 rounded-[32px] ${
                project.isDark 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white border border-slate-100 shadow-sm hover:border-blue-200 transition-colors'
              }`}
            >
              {project.isDark && (
                <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                  <Sparkles size={96} className="text-white" />
                </div>
              )}
              
              <div className="relative z-10">
                {project.isDark ? (
                  <div className="text-xs font-bold text-blue-400 uppercase mb-4 tracking-wider flex items-center justify-between">
                    <span>{project.category}</span>
                    <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] flex items-center gap-1">
                      <Sparkles size={10} className="text-blue-300" /> {project.status}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                      <FolderKanban size={24} />
                    </div>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-slate-50 text-slate-500 border border-slate-100 shadow-sm flex items-center gap-1">
                      <Sparkles size={12} className="text-purple-400" />
                      {project.status}
                    </span>
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-3 ${project.isDark ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>
                
                {!project.isDark && (
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                )}
                
                <p className={`text-sm leading-relaxed mb-8 ${project.isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {project.description}
                </p>
              </div>
              
              <button className={`mt-auto pt-6 border-t flex items-center justify-between text-xs font-bold uppercase tracking-widest ${
                project.isDark ? 'border-slate-800 text-white/80 hover:text-white' : 'border-slate-50 text-slate-400 hover:text-purple-600'
              } transition-colors text-left w-full`}>
                <span>View Details</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
