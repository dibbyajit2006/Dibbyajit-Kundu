import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-8 py-6 px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between border-t border-slate-200/60 bg-white/50 text-[11px] font-bold text-slate-400 uppercase tracking-widest gap-4">
      <div className="text-center md:text-left flex flex-col md:flex-row gap-2 md:gap-4 items-center">
        <span>© {new Date().getFullYear()} Dibbyajit Kundu — All Rights Reserved</span>
        <span className="hidden md:inline">•</span>
        <span className="flex items-center gap-1">
          Built with <Heart size={14} className="text-pink-500 fill-pink-500" /> and curiosity
        </span>
      </div>
      <div className="flex gap-6 items-center">
        <a href="mailto:dibbyajit2006@gmail.com" className="hover:text-slate-900 transition-colors">Email</a>
        <a href="https://github.com/dibbyajit2006" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">Github</a>
        <a href="https://www.linkedin.com/in/dibbyajit-kundu-aa48a23a1/" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
}
