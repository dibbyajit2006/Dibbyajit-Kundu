import { motion } from 'motion/react';
import { Trophy, Award, Star } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy size={32} />,
    title: "TECHSPRINT Participant",
    description: "Participated in the TECHSPRINT program organized by Google Developer Group (GDG) on Campus at Academy of Technology.",
    color: "text-amber-500",
  },
  {
    icon: <Award size={32} />,
    title: "HACK-VENGERS Participant",
    description: "Participated enthusiastically in the HACK-VENGERS hackathon under TECHLAVYA IGNITE 2026 at RKMGEC.",
    color: "text-blue-500",
  },
  {
    icon: <Star size={32} />,
    title: "Code@Frost Participant",
    description: "Participated in the Code@Frost competition on Unstop, organized by Asansol Engineering College.",
    color: "text-purple-500",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[32px] p-8 md:p-12 text-white shadow-xl shadow-purple-200/50"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Achievements</h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-medium">
              Hackathons, competitions, and milestones in my development journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center flex flex-col items-center"
              >
                <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 ${item.color} shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
