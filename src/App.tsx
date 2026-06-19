import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import {
  Globe,
  ShieldCheck,
  Sparkles,
  Mail,
  Send,
  Video,
  MessageSquare,
  Phone,
  Server,
  Code,
  Smartphone,
  Megaphone,
  Search,
  ShoppingCart,
  Users,
  TrendingUp,
  Settings,
  ArrowUp,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Factory,
  Rocket,
  ShoppingBag,
  Briefcase,
  MessageCircle,
  Bot,
  UsersRound,
  Wrench,
  Layers,
  ExternalLink,
  BookOpen,
  AppWindow,
  Download
} from 'lucide-react';
import ErrorBoundary from './components/ErrorBoundary';
import {
  BRAND,
  VALUE_PILLARS,
  STATS,
  NAV_LINKS,
  AI_TOOLS,
  AI_EMPLOYEES,
  DATA_ACQUISITION,
  OVERSEAS_MARKETING,
  DIGITAL_BUILDING,
  PRE_CONSULTING,
  SOCIAL_LINKS,
  ALL_SERVICES,
  HERO_CONFIG,
  TARGET_CUSTOMERS,
  PLATFORM_SERVICES,
  CONTACT_INFO,
  PROJECTS,
  SOFTWARE_PRODUCTS,
  DOUYIN_SERVICES,
  CHINA_SOURCING,
  SOCIAL_MEDIA_SERVICES,
  SERVICE_CATEGORY_TREE,
  HERO_BANNERS
} from './data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  ShieldCheck,
  Sparkles,
  Mail,
  Send,
  Video,
  MessageSquare,
  Phone,
  Server,
  Code,
  Smartphone,
  Megaphone,
  Search,
  ShoppingCart,
  Users,
  TrendingUp,
  Settings,
  Factory,
  Rocket,
  ShoppingBag,
  Briefcase,
  MessageCircle,
  Bot,
  UsersRound,
  Wrench,
  Layers,
  ExternalLink,
  BookOpen,
  AppWindow,
  Download
};

function App() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set());
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatInput, setChatInput] = useState('');
  const [collectedInfo, setCollectedInfo] = useState({ name: '', contact: '', need: '' });
  const [currentBanner, setCurrentBanner] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowBackToTop(y > 800);
      setShowFloatingBtn(y > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // 导航栏高度 + 额外间距
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const renderIcon = (iconName: string, size: number = 24) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon size={size} /> : null;
  };

  return (
    <div className="bg-[#03030a] text-white min-h-screen font-sans overflow-x-hidden selection:bg-[#e6058e]/30 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed inset-x-0 top-0 h-0.5 z-50 bg-gradient-to-r from-[#00c6ff] via-[#e6058e] to-[#ffa500]"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollToSection('#hero')} className="text-base tracking-[0.2em] uppercase font-bold text-white/90">
            {BRAND.englishName}
          </button>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.1em] text-white/50">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block px-5 py-2 rounded-full border border-white/20 text-xs tracking-[0.1em] hover:bg-white/10 transition-colors"
          >
            联系我们
          </button>
          <button
            type="button"
            className="md:hidden p-2 text-white/70"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="菜单"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-black/95"
            >
              <div className="px-6 py-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-sm text-white/60 hover:text-white py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 共享家风格首屏 - 分类导航 + 轮播 */}
      <section id="gongxiangjia" className="relative pt-20 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00c6ff]/5 via-[#e6058e]/3 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          {/* 顶栏：品牌 + 搜索 */}
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => scrollToSection('#hero')} className="text-sm tracking-[0.2em] uppercase font-bold text-white/80 flex-shrink-0">
              {BRAND.englishName}
            </button>
            <div className="flex-1 relative max-w-md">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
              <input
                type="text"
                placeholder="搜索服务…"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/70 text-xs placeholder:text-white/20 outline-none focus:border-[#00c6ff]/30 focus:bg-white/[0.06] transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const val = (e.target as HTMLInputElement).value.toLowerCase();
                    const match = SERVICE_CATEGORY_TREE.find(c =>
                      c.name.toLowerCase().includes(val) ||
                      c.items.some(i => i.name.toLowerCase().includes(val))
                    );
                    if (match) scrollToSection(match.items[0].section);
                  }
                }}
              />
            </div>
          </div>

          {/* 主体：左侧分类树 + 右侧轮播 */}
          <div className="flex gap-6">
            {/* 左侧分类菜单树 */}
            <div className="hidden md:block w-56 flex-shrink-0">
              <div className="space-y-1">
                {SERVICE_CATEGORY_TREE.map((cat) => (
                  <div
                    key={cat.id}
                    className="relative"
                    onMouseEnter={() => setHoveredCategory(cat.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <button
                      onClick={() => scrollToSection(cat.items[0].section)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs transition-all ${
                        hoveredCategory === cat.id
                          ? 'bg-white/[0.06] text-white'
                          : 'text-white/50 hover:text-white/70 hover:bg-white/[0.03]'
                      }`}
                    >
                      <span style={{ color: cat.color }}>{renderIcon(cat.icon, 16)}</span>
                      <span className="font-medium">{cat.name}</span>
                      <ChevronRight
                        size={12}
                        className={`ml-auto transition-transform ${hoveredCategory === cat.id ? 'rotate-90' : ''}`}
                        style={{ color: cat.color }}
                      />
                    </button>

                    {/* 子菜单弹出层 */}
                    <AnimatePresence>
                      {hoveredCategory === cat.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 ml-2 w-48 rounded-xl border border-white/10 bg-[#0c0c1a]/95 backdrop-blur-xl p-2 shadow-2xl z-30"
                        >
                          {cat.items.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => scrollToSection(item.section)}
                              className="w-full text-left px-3 py-2 rounded-lg text-xs text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
                            >
                              {item.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧轮播区 */}
            <div className="flex-1 min-h-0">
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '360px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={HERO_BANNERS[currentBanner].id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${HERO_BANNERS[currentBanner].gradient} border border-white/[0.06] p-8 md:p-12 flex flex-col justify-center cursor-pointer`}
                    onClick={() => scrollToSection(HERO_BANNERS[currentBanner].section)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${['#22c55e','#e6058e','#00c6ff','#ffa500'][currentBanner]}20`, color: ['#22c55e','#e6058e','#00c6ff','#ffa500'][currentBanner] }}
                      >
                        {renderIcon(HERO_BANNERS[currentBanner].icon, 22)}
                      </div>
                      <span className="text-xs uppercase tracking-[0.15em] text-white/30">{HERO_BANNERS[currentBanner].title.split(' ')[0]}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-3">{HERO_BANNERS[currentBanner].title}</h2>
                    <p className="text-sm text-white/50 max-w-lg leading-relaxed mb-6">{HERO_BANNERS[currentBanner].subtitle}</p>
                    <div>
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white/80 text-xs font-medium hover:bg-white/15 transition-colors">
                        {HERO_BANNERS[currentBanner].cta}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* 轮播指示器 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {HERO_BANNERS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentBanner(idx)}
                      className={`transition-all rounded-full ${
                        idx === currentBanner
                          ? 'w-6 h-1.5 bg-white/60'
                          : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00c6ff]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#e6058e]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl space-y-8"
        >
          {/* 品牌名 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] text-white/40"
          >
            {BRAND.name} · {BRAND.subtitle}
          </motion.p>

          {/* 主标语 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-white/90 tracking-tight"
          >
            {HERO_CONFIG.headline}
          </motion.h1>

          {/* 六大关键词大字 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {HERO_CONFIG.keywords.map((item, idx) => (
              <motion.span
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [1, 0.5, 1],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  delay: 0.5 + idx * 0.1,
                  duration: 0.4,
                }}
                style={{ color: item.color }}
                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight"
              >
                {item.text}
              </motion.span>
            ))}
          </motion.div>

          {/* 副关键词 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base md:text-lg text-white/50"
          >
            {HERO_CONFIG.subKeywords}
          </motion.p>

          {/* 问题引导语 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            {HERO_CONFIG.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-[0.1em] hover:bg-white/90 transition-colors"
              >
                立即咨询
              </button>
              <span className="text-[10px] text-white/30 tracking-wider">扫码添加微信，直接沟通</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => setShowContactModal(true)}
                className="px-8 py-4 rounded-full bg-white/10 text-white/80 font-bold text-sm tracking-[0.1em] border border-white/20 hover:bg-white/20 transition-colors"
              >
                不方便直接联系？
              </button>
              <span className="text-[10px] text-white/30 tracking-wider">这里没有人知道你我是谁，只需要留需求即可</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </motion.div>
      </section>

      <main className="space-y-16 pb-16">

        {/* About Section - Brand Statement */}
        <section id="about" className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">Who We Are</p>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-relaxed">
              <span className="text-white/90">可靠、简单、直接，</span>
              <br />
              <span className="text-white/50">视隐私为生命线</span>
            </h2>

            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              {BRAND.name}/{BRAND.subtitle} 致力于为想出海的老板提供一站式解决方案。
              <br />
              <span className="text-white/60">技术很简单，复杂的是人。</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-6">
              {VALUE_PILLARS.map((value, idx) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/5"
                >
                  <span className="text-[#00c6ff]">{value.icon}</span>
                  <span className="text-sm text-white/60">{value.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Target Customers - 适合谁 */}
        <section id="target" className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">Who's It For</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">适合谁</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TARGET_CUSTOMERS.map((customer, idx) => (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/5">
                  {renderIcon(customer.icon, 24)}
                </div>
                <h3 className="font-bold text-white mb-2">{customer.title}</h3>
                <p className="text-sm text-white/40">{customer.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">核心服务板块</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { ...AI_TOOLS, icon: 'Sparkles', gradient: 'from-[#e6058e]/10' },
              { ...SOCIAL_MEDIA_SERVICES, icon: 'TrendingUp', gradient: 'from-[#22c55e]/10' },
              { ...DATA_ACQUISITION, icon: 'Globe', gradient: 'from-[#00c6ff]/10' },
              { ...OVERSEAS_MARKETING, icon: 'TrendingUp', gradient: 'from-[#ffa500]/10' },
              { ...DIGITAL_BUILDING, icon: 'Smartphone', gradient: 'from-[#22c55e]/10' },
              { ...PRE_CONSULTING, icon: 'MessageCircle', gradient: 'from-[#a855f7]/10' }
            ].map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToSection(`#${section.id}`)}
                className="group cursor-pointer p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${section.color}20`, color: section.color }}
                >
                  {renderIcon(section.icon, 24)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">{section.description}</p>
                <div className="mt-6 flex items-center gap-2 text-xs" style={{ color: section.color }}>
                  <span>了解更多</span>
                  <ChevronDown size={12} className="rotate-[-90deg]" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section - 自研项目展示 */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">Our Projects</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">我的作品</h2>
            <p className="text-white/40 mt-4 max-w-lg mx-auto">亲身实践的产品，用数据说话</p>
          </motion.div>

          {/* 自研网站 */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {PROJECTS.map((project, idx) => {
              const hasUrl = !!project.url;
              const Wrapper = hasUrl ? motion.a : motion.div;
              const wrapperProps = hasUrl ? {
                href: project.url,
                target: '_blank' as const,
                rel: 'noreferrer' as const,
              } : {};
              return (
                <Wrapper
                  key={project.id}
                  {...wrapperProps}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent transition-all block ${hasUrl ? 'hover:border-white/20 cursor-pointer' : 'hover:border-white/10'}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 group-hover:bg-[#00c6ff]/10 group-hover:text-[#00c6ff] transition-all">
                      {renderIcon(project.icon, 24)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#00c6ff]/80 transition-colors">
                          {project.title}
                        </h3>
                        {hasUrl && <ExternalLink size={14} className="text-white/30 group-hover:text-[#00c6ff] transition-colors flex-shrink-0" />}
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  {hasUrl ? (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] font-mono">
                        {project.badge}
                      </span>
                      <span className="text-white/30">点击访问 →</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e]">内部服务</span>
                    </div>
                  )}
                </Wrapper>
              );
            })}
          </div>

          {/* 软件产品统计数据 */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border border-[#00c6ff]/20 bg-gradient-to-br from-[#00c6ff]/5 to-transparent text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#00c6ff]/10 flex items-center justify-center text-[#00c6ff]">
                {renderIcon(SOFTWARE_PRODUCTS.acquisition.icon, 24)}
              </div>
              <p className="text-3xl md:text-4xl font-black text-[#00c6ff]">{SOFTWARE_PRODUCTS.acquisition.users}</p>
              <p className="font-bold text-white mt-1">{SOFTWARE_PRODUCTS.acquisition.name}</p>
              <p className="text-xs text-white/40 mt-1">{SOFTWARE_PRODUCTS.acquisition.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl border border-[#e6058e]/20 bg-gradient-to-br from-[#e6058e]/5 to-transparent text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#e6058e]/10 flex items-center justify-center text-[#e6058e]">
                {renderIcon(SOFTWARE_PRODUCTS.miniPrograms.icon, 24)}
              </div>
              <p className="text-3xl md:text-4xl font-black text-[#e6058e]">{SOFTWARE_PRODUCTS.miniPrograms.users}</p>
              <p className="font-bold text-white mt-1">{SOFTWARE_PRODUCTS.miniPrograms.name}</p>
              <p className="text-xs text-white/40 mt-1">{SOFTWARE_PRODUCTS.miniPrograms.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Social Media Services Section */}
        <ErrorBoundary name="social-media"><section id="social-media" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: SOCIAL_MEDIA_SERVICES.color }}>Social Media</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">{SOCIAL_MEDIA_SERVICES.title}</h2>
                <p className="text-white/50 mt-3 max-w-md">{SOCIAL_MEDIA_SERVICES.description}</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 max-w-sm">
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: SOCIAL_MEDIA_SERVICES.color }}>{SOCIAL_MEDIA_SERVICES.ctaTitle}</p>
                <p className="text-sm text-white/60">{SOCIAL_MEDIA_SERVICES.ctaDescription}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SOCIAL_MEDIA_SERVICES.items.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#22c55e]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#22c55e]/10 text-[#22c55e]">
                      {renderIcon(item.icon)}
                    </div>
                    <h3 className="font-bold text-white group-hover:text-[#22c55e]/80 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features?.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm tracking-[0.1em] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                了解详情
              </button>
            </div>
          </div>
        </section></ErrorBoundary>

        {/* AI Tools Section */}
        <ErrorBoundary name="ai-tools"><section id="ai-tools" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6058e]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: AI_TOOLS.color }}>AI Tools</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">{AI_TOOLS.title}</h2>
                <p className="text-white/50 mt-3 max-w-md">{AI_TOOLS.description}</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-[#e6058e]/10 border border-[#e6058e]/20 max-w-sm">
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: AI_TOOLS.color }}>Core</p>
                <p className="text-sm text-white/60">{AI_TOOLS.ctaDescription}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {AI_TOOLS.items.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#e6058e]/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#e6058e]/10 text-[#e6058e]">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-2 group-hover:text-[#e6058e]/80 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm tracking-[0.1em] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                立即咨询
              </button>
            </div>
          </div>
        </section></ErrorBoundary>


        {/* Data Acquisition Section */}
        <section id="data-acquisition" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00c6ff]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: DATA_ACQUISITION.color }}>Data Acquisition</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">{DATA_ACQUISITION.title}</h2>
                <p className="text-white/50 mt-3 max-w-md">{DATA_ACQUISITION.description}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#00c6ff]/10 to-transparent"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-[#00c6ff]/20 text-[#00c6ff]">
                      {renderIcon('Globe', 28)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">全球采集获客引擎</h3>
                      <p className="text-white/40 text-sm mt-1">Global Acquisition Engine</p>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-8">
                    打破信息茧房，让全球商家数据成为您的私有获客利器。每日实时更新，58 个行业分类，200+ 国家地区覆盖。
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {DATA_ACQUISITION.items[0].features?.slice(0, 6).map((f) => (
                      <span key={f} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-80 space-y-4">
                  <h4 className="text-xs uppercase tracking-wider text-white/30">痛点分析</h4>
                  {DATA_ACQUISITION.items[0].painPoints?.map((pain, i) => (
                    <div key={i} className="p-4 rounded-xl bg-black/20 border border-white/5">
                      <p className="text-red-400 text-xs font-bold mb-1">{pain.title}</p>
                      <p className="text-sm text-white/60">{pain.stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {DATA_ACQUISITION.items[0].scenarios?.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl border border-[#00c6ff]/10 bg-[#00c6ff]/5"
                >
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: DATA_ACQUISITION.color }}>Case {i + 1}</p>
                  <h4 className="font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-white/40">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm tracking-[0.1em] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                立即咨询
              </button>
            </div>
          </div>
        </section>

        {/* Overseas Marketing Section */}
        <section id="overseas" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffa500]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: OVERSEAS_MARKETING.color }}>Overseas Marketing</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">{OVERSEAS_MARKETING.title}</h2>
                <p className="text-white/50 mt-3 max-w-md">{OVERSEAS_MARKETING.description}</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-[#ffa500]/10 border border-[#ffa500]/20 max-w-sm">
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: OVERSEAS_MARKETING.color }}>Highlights</p>
                <p className="text-sm text-white/60">{OVERSEAS_MARKETING.ctaDescription}</p>
              </div>
            </motion.div>

            {/* 三大平台开户服务 */}
            <div className="grid md:grid-cols-4 gap-4">
              {PLATFORM_SERVICES.map((platform, idx) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                  style={{ borderColor: `${platform.color}30` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
                    >
                      {renderIcon(platform.icon, 20)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{platform.title}</h3>
                      <p className="text-xs text-white/40">{platform.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {platform.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: platform.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/30 italic">{platform.scenario}</p>
                </motion.div>
              ))}

              {/* 抖音业务卡片 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                style={{ borderColor: `${DOUYIN_SERVICES.color}30` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${DOUYIN_SERVICES.color}20`, color: DOUYIN_SERVICES.color }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{DOUYIN_SERVICES.title}</h3>
                    <p className="text-xs text-white/40">{DOUYIN_SERVICES.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {DOUYIN_SERVICES.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1e1e1e' }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/30 italic">{DOUYIN_SERVICES.scenario}</p>
              </motion.div>
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm tracking-[0.1em] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                立即咨询
              </button>
            </div>
          </div>
        </section>

        {/* Digital Building Section */}
        <section id="digital" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-6"
            >
              <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: DIGITAL_BUILDING.color }}>Digital Building</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{DIGITAL_BUILDING.title}</h2>
              <p className="text-white/50 mt-3 max-w-md">{DIGITAL_BUILDING.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {DIGITAL_BUILDING.items.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#22c55e]/5 to-transparent hover:border-[#22c55e]/30 transition-all"
                >
                  <div className="p-4 rounded-2xl bg-[#22c55e]/10 text-[#22c55e] w-fit mb-4">
                    {renderIcon(item.icon, 32)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#22c55e]/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features?.slice(0, 4).map((f) => (
                      <span key={f} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm tracking-[0.1em] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                立即咨询
              </button>
            </div>
          </div>
        </section>

        {/* Pre-Consulting Section */}
        <section id="pre-consulting" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: PRE_CONSULTING.color }}>Pre-Consulting</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">{PRE_CONSULTING.title}</h2>
                <p className="text-white/50 mt-3 max-w-md">{PRE_CONSULTING.description}</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20 max-w-sm">
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: PRE_CONSULTING.color }}>Highlights</p>
                <p className="text-sm text-white/60">{PRE_CONSULTING.ctaDescription}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {PRE_CONSULTING.items.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl border border-[#a855f7]/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#a855f7]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#a855f7]/10 text-[#a855f7]">
                      {renderIcon(item.icon)}
                    </div>
                    <h3 className="font-bold text-white group-hover:text-[#a855f7]/80 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features?.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm tracking-[0.1em] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                立即咨询
              </button>
            </div>
          </div>
        </section>


        {/* China Sourcing Section - For Foreign Users */}
        <ErrorBoundary name="china-sourcing"><section id="china-sourcing" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: CHINA_SOURCING.color }}>China Sourcing</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">{CHINA_SOURCING.title}</h2>
                <p className="text-white/50 mt-3 max-w-md">{CHINA_SOURCING.description}</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-[#dc2626]/10 border border-[#dc2626]/20 max-w-sm">
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: CHINA_SOURCING.color }}>{CHINA_SOURCING.ctaTitle}</p>
                <p className="text-sm text-white/60">{CHINA_SOURCING.ctaDescription}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CHINA_SOURCING.items.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#dc2626]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#dc2626]/10 text-[#dc2626]">
                      {renderIcon(item.icon)}
                    </div>
                    <h3 className="font-bold text-white group-hover:text-[#dc2626]/80 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features?.slice(0, 4).map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm tracking-[0.1em] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Get a Quote →
              </button>
            </div>
          </div>
        </section></ErrorBoundary>

        {/* AI 员工定制 Section */}
        <ErrorBoundary name="ai-employees"><section id="ai-employees" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border-b border-white/10 pb-6"
            >
              <span className="text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: '#8b5cf6' }}>AI Employees</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">AI员工定制</h2>
              <p className="text-white/50 max-w-xl mx-auto">帮您打造一支懂业务、会干活的AI团队，就像雇佣了一批永不疲倦的员工</p>
            </motion.div>

            {/* One simple CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[#8b5cf6]/20 bg-gradient-to-r from-[#8b5cf6]/10 to-transparent text-center"
            >
              <p className="text-white/70 text-sm">
                已有 <span className="text-[#8b5cf6] font-bold">193个</span> AI员工可选，按需组合，打造您的专属团队
              </p>
            </motion.div>

            {/* AI 员工列表 - Accordion 展开/收起 */}
            <div className="space-y-3">
              {AI_EMPLOYEES.filter(d => !['engineering', 'testing', 'project-management', 'spatial-computing', 'game-development', 'academic', 'finance', 'legal', 'supply-chain'].includes(d.id)).map((dept) => {
                const isOpen = expandedDepts.has(dept.id);
                const toggleDept = (e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpandedDepts(prev => {
                    const next = new Set<string>();
                    if (!prev.has(dept.id)) {
                      next.add(dept.id);
                    }
                    return next;
                  });
                };
                return (
                  <div key={dept.id} className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    <div
                      onClick={toggleDept}
                      className="w-full px-6 py-4 flex items-center gap-4 hover:bg-white/[0.03] transition-colors cursor-pointer"
                      style={{ userSelect: 'none' }}
                    >
                      <span className="text-2xl">{dept.emoji}</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-white">{dept.name}</h3>
                        <p className="text-white/40 text-sm">{dept.description}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs">
                        {dept.agents.length}
                      </span>
                      <ChevronDown
                        size={20}
                        className="text-white/30 transition-transform duration-200"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </div>

                    <div style={{ display: isOpen ? 'block' : 'none' }}>
                      <div className="px-6 pb-4 space-y-2 border-t border-white/5">
                        {dept.agents.map((agent) => (
                          <div
                            key={agent.name}
                            className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-3"
                          >
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: dept.color }} />
                            <div>
                              <p className="text-white/90 font-medium">{agent.name}</p>
                              <p className="text-white/40 text-xs mt-1">{agent.scenario}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full border border-[#8b5cf6]/20 text-white/80 text-sm tracking-[0.1em] hover:bg-[#8b5cf6]/10 transition-colors flex items-center gap-2"
              >
                <Bot size={16} />
                告诉我您需要什么，帮你选配
              </button>
            </div>
          </div>
        </section></ErrorBoundary>

        {/* Stats Section */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="py-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#00c6ff]/5 via-[#e6058e]/5 to-[#ffa500]/5 text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-4xl md:text-5xl font-black text-white tracking-tight">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/30 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Cases Placeholder */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">Case Studies</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">客户案例</h2>
            <p className="text-white/40 mt-3 max-w-md mx-auto">用真实效果说话（案例内容更新中）</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '📈', hint: '某跨境电商 — 通过SEO+广告投放实现月销$50K+' },
              { icon: '🤖', hint: '某教育机构 — AI客服替代80%人工咨询' },
              { icon: '📦', hint: '某工厂 — China Sourcing对接3家海外采购商' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent text-center group hover:border-white/10 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="h-3 w-3/4 mx-auto rounded-full bg-white/[0.04] mb-3" />
                <p className="text-xs text-white/25 leading-relaxed italic">"{item.hint}"</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[10px] text-white/15 mt-5 tracking-wider">—— 案例详情更新中，敬请期待 ——</p>
        </section>

        {/* 免费咨询方案引流 */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#00c6ff]/5 via-[#e6058e]/5 to-[#ffa500]/5 text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">Free Consultation</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">免费咨询 · 提供方案</h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8 text-sm">
              留下您的需求和邮箱，我们将在24小时内为您提供定制方案。<br />
              无需任何费用，先聊方案再决定。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                placeholder="您的邮箱 / 微信号"
                className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00c6ff]/50 transition-colors"
              />
              <button
                onClick={() => { setShowAIChat(true); setLeadEmail(''); }}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#e6058e] to-[#00c6ff] text-white text-sm font-bold tracking-wider hover:opacity-90 transition-opacity flex-shrink-0"
              >
                开始咨询
              </button>
            </div>
            <p className="text-[10px] text-white/20 mt-4">提交即表示您同意我们与您联系，我们不会向任何第三方分享您的信息</p>
          </motion.div>
        </section>

        {/* Contact Section - 联系方式 */}
        <section id="contact" className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6058e]/5 via-[#00c6ff]/5 to-[#ffa500]/5 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">扫码联系我们</h2>
              <p className="text-white/40 mt-4">说出您的需求，帮您选最合适的方案</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8 max-w-3xl mx-auto">
              {/* 微信公众号 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#e6058e]/30 transition-all group"
              >
                <div className="w-36 h-36 mx-auto mb-3 rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 group-hover:border-white/20 transition-colors">
                  <img src={CONTACT_INFO.wechat.official} alt="微信公众号二维码" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="font-bold text-white text-sm mb-0.5">公众号</h3>
                <p className="text-xs text-white/40">扫码关注最新资讯</p>
              </motion.div>

              {/* 微信个人号2（主号） */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#a855f7]/30 transition-all group"
              >
                <div className="w-36 h-36 mx-auto mb-3 rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 group-hover:border-white/20 transition-colors">
                  <img src={CONTACT_INFO.wechat.personalNew} alt="微信个人号二维码主号" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="font-bold text-white text-sm mb-0.5">微信咨询①</h3>
                <p className="text-xs text-white/40">沟通前备注来意</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(CONTACT_INFO.wechat.id);
                    const btn = document.activeElement as HTMLElement;
                    const orig = btn?.textContent;
                    if (btn) { btn.textContent = '已复制 ✓'; setTimeout(() => { if (btn) btn.textContent = orig; }, 1500); }
                  }}
                  className="text-[10px] text-[#a855f7] mt-1 font-mono hover:text-[#a855f7]/80 transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  {CONTACT_INFO.wechat.id}
                  <span className="text-[8px] opacity-60">📋复制</span>
                </button>
              </motion.div>

              {/* 微信个人号1（备用） */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#00c6ff]/30 transition-all group"
              >
                <div className="w-36 h-36 mx-auto mb-3 rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 group-hover:border-white/20 transition-colors">
                  <img src={CONTACT_INFO.wechat.personal} alt="微信个人号二维码备用" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="font-bold text-white text-sm mb-0.5">微信咨询②</h3>
                <p className="text-xs text-white/40">沟通前备注来意</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(CONTACT_INFO.wechat.id);
                    const btn = document.activeElement as HTMLElement;
                    const orig = btn?.textContent;
                    if (btn) { btn.textContent = '已复制 ✓'; setTimeout(() => { if (btn) btn.textContent = orig; }, 1500); }
                  }}
                  className="text-[10px] text-[#00c6ff] mt-1 font-mono hover:text-[#00c6ff]/80 transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  {CONTACT_INFO.wechat.id}
                  <span className="text-[8px] opacity-60">📋复制</span>
                </button>
              </motion.div>

              {/* Telegram */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#0088cc]/30 transition-all group"
              >
                <div className="w-36 h-36 mx-auto mb-3 rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 group-hover:border-white/20 transition-colors">
                  <img src={CONTACT_INFO.telegram.qr} alt="Telegram个人二维码" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="font-bold text-white text-sm mb-0.5">Telegram</h3>
                <p className="text-xs text-white/40">@caixukuntg</p>
                <a href={CONTACT_INFO.telegram.url} target="_blank" rel="noreferrer" className="text-[10px] text-[#0088cc] mt-1 inline-block hover:underline">
                  点击联系 →
                </a>
              </motion.div>

              {/* 其他联系方式 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#22c55e]/30 transition-all group"
              >
                <div className="w-36 h-36 mx-auto mb-3 rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 group-hover:border-white/20 transition-colors">
                  <img src={CONTACT_INFO.other.qr} alt={CONTACT_INFO.other.label} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="font-bold text-white text-sm mb-0.5">{CONTACT_INFO.other.label}</h3>
                <p className="text-xs text-white/40">扫码添加</p>
              </motion.div>

              {/* 电话 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#22c55e]/30 transition-all flex flex-col items-center justify-center min-h-[200px] group"
              >
                <div className="w-14 h-14 mb-3 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center group-hover:bg-[#22c55e]/20 transition-colors">
                  <Phone size={28} className="text-[#22c55e]" />
                </div>
                <h3 className="font-bold text-white text-sm mb-0.5">电话咨询</h3>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold text-[#22c55e] hover:underline block mt-1">
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-[10px] text-white/30 mt-2">工作日 9:00-18:00</p>
              </motion.div>
            </div>

            {/* 快捷联系 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <p className="text-white/40 text-sm">其他联系方式</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={CONTACT_INFO.telegram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-[#00c6ff]/10 border border-[#00c6ff]/20 text-[#00c6ff] text-sm hover:bg-[#00c6ff]/20 transition-colors flex items-center gap-2"
                >
                  <Send size={14} />
                  Telegram
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="px-6 py-3 rounded-full bg-[#e6058e]/10 border border-[#e6058e]/20 text-[#e6058e] text-sm hover:bg-[#e6058e]/20 transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  发送邮件
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Floating Contact Button */}
      <AnimatePresence>
        {showFloatingBtn && (
          <motion.button
            type="button"
            onClick={() => setShowAIChat(true)}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            className="fixed bottom-8 left-6 z-50 px-5 py-3 rounded-full bg-gradient-to-r from-[#e6058e] to-[#00c6ff] text-white text-xs font-bold tracking-wider shadow-lg shadow-[#e6058e]/25 hover:shadow-[#e6058e]/50 transition-shadow flex items-center gap-2"
            aria-label="立即咨询"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={16} />
            立即咨询
          </motion.button>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/10 border border-white/20 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="返回顶部"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/80 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                {BRAND.name} <span className="text-white/30">/</span> {BRAND.subtitle}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                {BRAND.description}
              </p>
              <div className="space-y-3 pt-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    className="flex items-center gap-3 text-white/40 hover:text-[#00c6ff] transition-colors text-sm"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {renderIcon(link.icon, 16)}
                    <span>{link.href.replace('mailto:', '').replace('https://', '')}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-3 gap-8">
              {ALL_SERVICES.map((category) => (
                <div key={category.category} className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: category.color }}>
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.title} className="text-sm text-white/30 hover:text-white/50 transition-colors">
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-[0.15em]">
            <p>© 2026 {BRAND.name} · All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">发送消息</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="请输入您想咨询的内容..."
                className="w-full h-32 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#8b5cf6]/50 resize-none"
              />
              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="px-5 py-2 rounded-full border border-white/20 text-white/60 text-sm hover:bg-white/5 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={async () => {
                    if (contactMessage.trim()) {
                      try {
                        const text = '【XLNICE】新客户咨询';
                        const desp = '**咨询内容**：\n' + contactMessage;
                        await fetch('https://api2.pushdeer.com/message/push', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          },
                          body: 'pushkey=PDU36537Ted3skxKhTFIC6ocmf9MxDnEL8KQOngoO&text=' + encodeURIComponent(text) + '&desp=' + encodeURIComponent(desp)
                        });
                        alert('发送成功！我们将尽快与您联系。');
                        setContactMessage('');
                        setShowContactModal(false);
                      } catch (error) {
                        alert('发送成功！我们将尽快与您联系。');
                        setContactMessage('');
                        setShowContactModal(false);
                      }
                    }
                  }}
                  className="px-5 py-2 rounded-full bg-[#8b5cf6] text-white text-sm hover:bg-[#8b5cf6]/90 transition-colors"
                >
                  发送
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI 智能咨询弹窗 */}
      <AnimatePresence>
        {showAIChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowAIChat(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="w-full max-w-md bg-[#0d0d1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-[#e6058e]/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[#e6058e]/10 to-[#00c6ff]/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e6058e] to-[#00c6ff] flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">XLNICE 智能助手</h3>
                    <p className="text-[10px] text-white/40">通常几秒内回复</p>
                  </div>
                </div>
                <button onClick={() => setShowAIChat(false)} className="p-1.5 text-white/40 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-5 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
                {/* Bot message */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e6058e] to-[#00c6ff] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5">AI</div>
                  <div className="bg-white/[0.06] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">
                      {chatStep === 0 ? '您好！👋 欢迎来到XLNICE，我是您的智能咨询助手。请问有什么可以帮您？' :
                       chatStep === 1 ? '好的！我们提供以下服务：\n\n🚀 社媒运营 — 抖音/快手/小红书等全平台互动增长\n🤖 AI工具 — 智能客服/视频生成/模型定制\n🌐 出海营销 — TikTok/Facebook/Google广告开户投放\n📊 数据获客 — 全球POI数据采集\n🛒 数字化建设 — 网站/小程序/独立站搭建\n🔧 前置咨询 — 节点搭建/账号注册/出海规划\n\n您对哪个方向感兴趣？' :
                       chatStep === 2 ? '太好了！能简单描述一下您的需求吗？比如您是做什么行业的，想解决什么问题？' :
                       chatStep === 3 ? '明白了！为了给您提供更精准的方案，请留下您的称呼 📝' :
                       chatStep === 4 ? '请留下您的联系方式（微信/手机/邮箱均可）📱' :
                       chatStep === 5 ? '最后，您希望我们什么时候联系您？或有其他补充吗？' :
                       '感谢您的咨询！我们会尽快联系您 😊'}
                    </p>
                  </div>
                </div>

                {/* Quick replies */}
                {chatStep === 0 && (
                  <div className="flex flex-wrap gap-2 justify-end">
                    {['了解服务', '我有具体需求', '咨询报价', '其他问题'].map((opt) => (
                      <button key={opt} onClick={() => setChatStep(1)} className="px-4 py-2 rounded-full border border-white/15 text-xs text-white/70 hover:bg-white/10 hover:border-white/30 transition-all">
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {chatStep === 1 && (
                  <div className="flex flex-wrap gap-2 justify-end">
                    {['社媒运营', 'AI工具', '出海营销', '数据获客', '数字化建设', '前置咨询'].map((opt) => (
                      <button key={opt} onClick={() => setChatStep(2)} className="px-4 py-2 rounded-full border border-white/15 text-xs text-white/70 hover:bg-white/10 hover:border-white/30 transition-all">
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {chatStep === 2 && (
                  <div className="flex justify-end">
                    <button onClick={() => setChatStep(3)} className="px-4 py-2 rounded-full bg-[#e6058e]/20 border border-[#e6058e]/30 text-xs text-[#e6058e] hover:bg-[#e6058e]/30 transition-all">
                      好的，继续 →
                    </button>
                  </div>
                )}

                {/* Info collection */}
                {(chatStep === 3 || chatStep === 4 || chatStep === 5) && (
                  <div className="flex gap-2 justify-end">
                    <input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder={chatStep === 3 ? '输入您的称呼...' : chatStep === 4 ? '输入微信/手机/邮箱...' : '输入补充说明...'}
                      className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#e6058e]/40 transition-colors"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && chatInput.trim()) {
                          const next = chatStep + 1;
                          if (chatStep === 3) setCollectedInfo(prev => ({ ...prev, name: chatInput }));
                          else if (chatStep === 4) setCollectedInfo(prev => ({ ...prev, contact: chatInput }));
                          else if (chatStep === 5) setCollectedInfo(prev => ({ ...prev, need: chatInput }));
                          setChatInput('');
                          setChatStep(next > 5 ? 6 : next);
                        }
                      }}
                    />
                    <button
                      onClick={() => {
                        if (!chatInput.trim()) return;
                        const next = chatStep + 1;
                        if (chatStep === 3) setCollectedInfo(prev => ({ ...prev, name: chatInput }));
                        else if (chatStep === 4) setCollectedInfo(prev => ({ ...prev, contact: chatInput }));
                        else if (chatStep === 5) setCollectedInfo(prev => ({ ...prev, need: chatInput }));
                        setChatInput('');
                        setChatStep(next > 5 ? 6 : next);
                      }}
                      className="w-10 h-10 rounded-full bg-[#e6058e] flex items-center justify-center text-white hover:bg-[#e6058e]/80 transition-colors flex-shrink-0"
                    >
                      <Send size={14} />
                    </button>
                  </div>
                )}

                {chatStep === 6 && (
                  <div className="flex justify-end">
                    <button
                      onClick={async () => {
                        const info = collectedInfo;
                        try {
                          await fetch('https://api2.pushdeer.com/message/push', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: 'pushkey=PDU36537Ted3skxKhTFIC6ocmf9MxDnEL8KQOngoO&text=' +
                              encodeURIComponent('【AI咨询】' + (info.name || '匿名')) +
                              '&desp=' + encodeURIComponent(
                                '姓名：' + (info.name || '未填') + '\n' +
                                '联系方式：' + (info.contact || '未填') + '\n' +
                                '需求：' + (info.need || '未填')
                              )
                          });
                        } catch (_) {}
                        setShowAIChat(false);
                        setChatStep(0);
                        setCollectedInfo({ name: '', contact: '', need: '' });
                      }}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e6058e] to-[#00c6ff] text-white text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      完成咨询 ✅
                    </button>
                  </div>
                )}
              </div>

              <div className="px-5 py-3 border-t border-white/5 text-center">
                <p className="text-[10px] text-white/20">信息仅用于需求沟通，不会分享给第三方</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
