import { motion } from 'framer-motion';
import { Github, Twitter, Globe, ExternalLink, Code2, Cpu, Rocket } from 'lucide-react';

const projects = [
  {
    title: "XL Nice Editor",
    description: "A professional, minimalist code editor designed for productivity and aesthetics.",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    link: "#",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    title: "EcoFlow System",
    description: "Real-time energy monitoring and management system for sustainable environments.",
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    link: "#",
    tags: ["Node.js", "IoT", "React"]
  },
  {
    title: "Vortex Engine",
    description: "A high-performance 2D physics engine built with raw WebGL and modern JS.",
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
    link: "#",
    tags: ["WebGL", "Physics", "JS"]
  }
];

const socials = [
  { name: "GitHub", icon: <Github />, link: "https://github.com/xkhh-max" },
  { name: "Twitter", icon: <Twitter />, link: "#" },
  { name: "Website", icon: <Globe />, link: "#" },
];

function App() {
  return (
    <div className="min-h-screen grid-bg">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-gradient"
          >
            XLNICE
          </motion.div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            {["Works", "Social", "Connect"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            Creating the <span className="text-gradient">Next Gen</span> <br /> of Software Workspace.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            I build software that isn't just functional, but an experience. Explore my latest works and experiments.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              View Projects
            </button>
            <button className="px-8 py-3 glass rounded-full font-bold hover:bg-white/10 transition-colors">
              Read Docs
            </button>
          </motion.div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Works</h2>
              <p className="text-gray-400">Highlighting some of my favorite software projects.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative glass p-8 rounded-3xl hover:border-accent/50 transition-colors"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-accent/10 transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-accent group-hover:gap-3 transition-all">
                  LEARN MORE <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Socials Section */}
        <section id="social" className="py-32 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-400">Find me on these platforms to see more of my journey.</p>
          </div>
          <div className="flex gap-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ y: -5 }}
                className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:text-accent transition-colors"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© 2026 XLNICE Space. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
