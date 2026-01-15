import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Send, Terminal, Zap, Layers, Globe, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: "Terminator",
    titleEn: "AI Desktop Automation",
    description: "跨平台 AI 驱动的桌面自动化引擎，支持所有应用程序和浏览器，相比传统方案提速 100 倍。",
    tags: ["Rust", "AI", "Automation"],
    link: "https://github.com/xkhh-max/terminator",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Zidonhua",
    titleEn: "Automation Tools",
    description: "高效的自动化处理工具集，旨在简化复杂的重复性任务流程。",
    tags: ["Utility", "Python", "Tool"],
    link: "https://github.com/xkhh-max/zidonhua",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "XLNice",
    titleEn: "Software Showcase",
    description: "别出心裁的软件作品预览主页，采用 React + Framer Motion 构建的沉浸式体验。",
    tags: ["React", "TS", "Vite"],
    link: "https://github.com/xkhh-max/xlnice",
    color: "from-emerald-400 to-blue-500"
  },
  {
    title: "Astro Starter",
    titleEn: "Supabase Template",
    description: "基于 Astro 和 Supabase 的全栈快速启动模版，集成了身份认证和数据库能力。",
    tags: ["Astro", "Supabase", "Fullstack"],
    link: "https://github.com/xkhh-max/astro-supabase-starter",
    color: "from-orange-400 to-red-500"
  }
];

const socials = [
  { name: "GitHub", icon: <Github size={20} />, link: "https://github.com/xkhh-max" },
  { name: "QQ", icon: <Send size={20} />, link: "tencent://message/?uin=929011615" },
  { name: "Website", icon: <Globe size={20} />, link: "https://xlnice.top" },
];

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden font-sans" ref={containerRef}>
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Custom Accent */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-black tracking-widest uppercase italic"
          >
            XLNICE / SYST
          </motion.div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
            <a href="#works" className="hover:text-white transition-opacity">作品</a>
            <a href="#social" className="hover:text-white transition-opacity">社交</a>
            <span className="opacity-30">Ver. 2026.1</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4 opacity-80 uppercase font-bold">SOFTWARE ARCHITECT & DEVELOPER</h2>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                追求 <br />
                <span className="text-gradient">打破常规</span> <br />
                的软件逻辑
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-12"
            >
              我不只是在编写代码，而是在构建一个沉浸式的数字化空间。
              专注于 AI 自动化、全栈开发与别出心裁的用户体验设计。
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#works" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
                探索作品集 <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="flex gap-4 items-center pl-4 border-l border-white/10 text-gray-400">
                {socials.map(s => (
                  <a key={s.name} href={s.link} className="hover:text-white transition-colors" title={s.name}>{s.icon}</a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-32 px-6 lg:px-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-24 border-b border-white/5 pb-10"
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">精选项目</h2>
              <p className="text-gray-500 font-mono text-xs tracking-widest">SELECTED WORKS / 2024-2026</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[2rem] p-1 ${i % 2 === 1 ? 'md:mt-32' : ''}`}
                >
                  <div className="relative z-10 block bg-[#0a0a0a] rounded-[1.9rem] p-8 h-full border border-white/5 group-hover:border-white/20 transition-colors">
                    <div className={`w-16 h-1 bg-gradient-to-r ${project.color} mb-8 rounded-full`} />
                    
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-3xl font-black mb-1">{project.title}</h3>
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">{project.titleEn}</p>
                      </div>
                      <a href={project.link} className="p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10">
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8 min-h-[5rem]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono px-3 py-1 border border-white/5 text-gray-500 rounded-full group-hover:border-white/20 group-hover:text-white transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute top-0 right-0 p-8 opacity-5 -z-10 group-hover:scale-110 transition-transform duration-700">
                      <Terminal size={120} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="social" className="py-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">保持联系</h2>
            <div className="flex gap-12 text-gray-400">
              {socials.map(s => (
                <a key={s.name} href={s.link} className="flex flex-col items-center gap-4 hover:text-white transition-colors">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="text-[10px] text-gray-700 font-mono tracking-widest">
          © 2026 XLNICE SPACE / DESIGNED FOR IMPACT
        </div>
      </footer>
    </div>
  );
}

export default App;
