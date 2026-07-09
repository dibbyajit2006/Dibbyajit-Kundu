import { motion } from 'motion/react';
import { 
  Palette, 
  Code2, 
  Coffee, 
  Terminal, 
  Globe, 
  Layout
} from 'lucide-react';

const skills = [
  { name: 'Frontend Dev', icon: <Layout size={20} />, level: 85, colorClass: 'text-blue-600', bgClass: 'bg-blue-50', gradient: 'from-blue-600 to-blue-400' },
  { name: 'HTML/CSS', icon: <Globe size={20} />, level: 90, colorClass: 'text-slate-700', bgClass: 'bg-slate-50', gradient: 'from-slate-700 to-slate-500' },
  { name: 'Java', icon: <Coffee size={20} />, level: 70, colorClass: 'text-purple-600', bgClass: 'bg-purple-50', gradient: 'from-purple-600 to-purple-400' },
  { name: 'Python', icon: <Terminal size={20} />, level: 75, colorClass: 'text-pink-600', bgClass: 'bg-pink-50', gradient: 'from-pink-600 to-pink-400' },
  { name: 'Figma', icon: <Palette size={20} />, level: 80, colorClass: 'text-orange-600', bgClass: 'bg-orange-50', gradient: 'from-orange-600 to-orange-400' },
  { name: 'Stitch', icon: <Code2 size={20} />, level: 65, colorClass: 'text-cyan-600', bgClass: 'bg-cyan-50', gradient: 'from-cyan-600 to-cyan-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm"
        >
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-8 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-blue-600"></span> My Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 border border-slate-100 rounded-2xl bg-white hover:border-slate-200 hover:shadow-sm transition-all flex flex-col gap-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${skill.bgClass} ${skill.colorClass}`}>
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-900">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-400">{skill.level}%</span>
                </div>
                
                <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
