import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900 relative overflow-x-hidden bg-slate-50">
      {/* Background Decor from Design */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-pink-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-pink-100/40 via-blue-100/40 to-purple-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <Navbar />
      <main className="relative z-10 flex flex-col gap-8 md:gap-12 pb-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
