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
  Factory,
  Rocket,
  ShoppingBag,
  Briefcase,
  MessageCircle,
  Bot,
  UsersRound,
  Wrench,
  Layers
} from 'lucide-react';
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
  SOCIAL_LINKS,
  ALL_SERVICES,
  HERO_CONFIG,
  TARGET_CUSTOMERS,
  PLATFORM_SERVICES,
  CONTACT_INFO
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
  Layers
};

function App() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set());
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
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
            {NAV_LINKS.slice(0, 4).map((link) => (
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
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-[0.1em] hover:bg-white/90 transition-colors"
            >
              立即咨询
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-[0.1em] hover:bg-white/90 transition-colors"
            >
              不方便直接联系？
            </button>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">四大服务板块</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { ...AI_TOOLS, icon: 'Sparkles', gradient: 'from-[#e6058e]/10' },
              { ...DATA_ACQUISITION, icon: 'Globe', gradient: 'from-[#00c6ff]/10' },
              { ...OVERSEAS_MARKETING, icon: 'TrendingUp', gradient: 'from-[#ffa500]/10' },
              { ...DIGITAL_BUILDING, icon: 'Smartphone', gradient: 'from-[#22c55e]/10' }
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

        {/* AI Tools Section */}
        <section id="ai-tools" className="relative">
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
        </section>

        {/* AI 员工定制 Section */}
        <section id="ai-employees" className="relative">
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
                    // If this dept was not open, open it (and only it)
                    if (!prev.has(dept.id)) {
                      next.add(dept.id);
                    }
                    return next;
                  });
                };
                return (
                  <div key={dept.id} className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    {/* Header - Clickable Accordion */}
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

                    {/* Content */}
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

            {/* CTA */}
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
        </section>

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
            <div className="grid md:grid-cols-3 gap-6">
              {PLATFORM_SERVICES.map((platform, idx) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                  style={{ borderColor: `${platform.color}30` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
                    >
                      {renderIcon(platform.icon, 24)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{platform.title}</h3>
                      <p className="text-xs text-white/40">{platform.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {platform.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: platform.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/30 italic">{platform.scenario}</p>
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

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 微信公众号 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#e6058e]/30 transition-colors"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-white/5 border-2 border-white/10">
                  <img src={CONTACT_INFO.wechat.official} alt="微信公众号" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-white mb-1">微信公众号</h3>
                <p className="text-sm text-white/40">扫码关注，获取最新资讯</p>
              </motion.div>

              {/* 微信个人号 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#00c6ff]/30 transition-colors"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-white/5 border-2 border-white/10">
                  <img src={CONTACT_INFO.wechat.personal} alt="微信个人号" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-white mb-1">微信咨询</h3>
                <p className="text-sm text-white/40">扫码添加，1对1服务</p>
                <p className="text-xs text-[#00c6ff] mt-2 font-mono">{CONTACT_INFO.wechat.id}</p>
              </motion.div>

              {/* 电话 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-[#22c55e]/30 transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center">
                  <Phone size={40} className="text-[#22c55e]" />
                </div>
                <h3 className="font-bold text-white mb-1">电话咨询</h3>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-3xl font-bold text-[#22c55e] hover:underline block mt-2">
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-xs text-white/30 mt-2">工作日 9:00-18:00</p>
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
    </div>
  );
}

export default App;
