import { motion, useScroll } from 'framer-motion';
import {
  Globe,
  ShieldCheck,
  Sparkles,
  Zap,
  MapPin,
  Database,
  Filter,
  Share2,
  Mail,
  Send
} from 'lucide-react';
import qrcode from './assets/qrcode.jpg';

const valuePillars = [
  {
    title: '可靠 · 简单 · 直接',
    body: '磨平复杂流程，不雕饰承诺，用最直观的界面让效率可触达。',
  },
  {
    title: '绝对隐私',
    body: '所有数据本地保存，零网络依赖，在金融、政府、私域场景放心使用。',
  },
  {
    title: '释放双手',
    body: '一次配置永久运行，自动处理高频重复工单，让人专注高价值创造。',
  },
];

// --- Product 1: 采集获客 ---
const acquisitionPainPoints = [
  {
    title: "数据过时，错失商机",
    desc: "传统数据陈旧滞后，商家搬迁或停业导致浪费大量联系时间。",
    stat: "获客成本攀升至 1500元/条"
  },
  {
    title: "覆盖有限，视野狭窄",
    desc: "仅靠本地人脉很难获取全面信息，83%销售因找不到客户影响业绩。",
    stat: "无法获取周边精准信息"
  },
  {
    title: "筛选困难，大海捞针",
    desc: "缺乏有效筛选工具，即使有数据也难以定位精准目标客户。",
    stat: "转化率极低"
  }
];

const acquisitionFeatures = [
  {
    title: '全域数据覆盖',
    description: '中国全境 + 全球200+国家地区，实时更新POI数据。',
    icon: <Globe size={24} />,
  },
  {
    title: '智能筛选系统',
    description: '按行业(58个分类)、规模、地理位置(商圈/产业集群)精准筛选。',
    icon: <Filter size={24} />,
  },
  {
    title: '多维度数据采集',
    description: '基本信息 + 经营状况(注册资本/状态) + 业务特征(主营项目)。',
    icon: <Database size={24} />,
  },
  {
    title: '一键导出分享',
    description: '支持Excel/CSV/VCF格式，云端存储，API对接CRM。',
    icon: <Share2 size={24} />,
  },
];

const acquisitionScenarios = [
  { title: "餐饮连锁选址", desc: "3天完成市场分析，识别优质选址，客流超预期40%。" },
  { title: "B2B精准获客", desc: "2个月获得137个精准线索，转化率达18%。" },
  { title: "市场调研分析", desc: "快速识别商业缺口，为产品开发提供数据支撑。" }
];

// --- Product 2: 回了么 ---
const huilemeFeatures = [
  {
    title: '自动回复与关键词触发',
    description:
      '配置关键词库+模板，支持延迟/随机回复，模拟人工节奏，保障封号风险降到最低。',
    icon: <Zap size={24} />,
  },
  {
    title: 'AI 内容助理',
    description:
      '接入本地大模型（如 Qwen / Llama），结合 RAG、上下文记忆，写出完全想象中的语气。',
    icon: <Sparkles size={24} />,
  },
  {
    title: '客户画像与主动抚触',
    description:
      '识别兴趣、历史记录，定时推送关怀消息、自动加好友，形成 24/7 的温度连接。',
    icon: <Globe size={24} />,
  },
  {
    title: '辅助工具链',
    description:
      'OCR 识别、翻译、截屏、文件互传全链路嵌入，边看边用，效率再拉满。',
    icon: <ShieldCheck size={24} />,
  },
];

const huilemeScenarios = [
  {
    title: '个人 / 中小企业办公',
    detail:
      '自动化关键词回复，解放运营、客服的重复任务；本地 AI 优化英文沟通。',
  },
  {
    title: '创新体验打造',
    detail:
      '模仿特定风格对话、纪念互动，或复制用户个性，让自动化更 "人"。',
  },
  {
    title: '专业客服与外贸',
    detail:
      '自动翻译、多平台覆盖、客户画像洞察，助力 B2B / 电商团队实现全天候响应。',
  },
  {
    title: '信创与敏感行业',
    detail:
      '纯本地部署，无需联网，兼容金融、医疗、公务的合规要求。',
  },
];

const stats = [
  { label: '平均节省时间', value: '3-5 小时/天', note: '高频对话自动完成' },
  { label: '封号风控', value: '95%+ 降低', note: '纯视觉模拟真人操作' },
  { label: '商业目标', value: '500 万营收', note: '2026 年目标' },
  { label: '成本节约', value: '80%+', note: '相比传统获客方式' },
];

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#03030a] text-white min-h-screen font-sans overflow-x-hidden selection:bg-[#00c6ff]/30 selection:text-white">
      <motion.div
        className="fixed inset-x-0 top-0 h-1 origin-left z-50 bg-gradient-to-r from-[#00c6ff] via-[#e6058e] to-[#ffa500]"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative">
        <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl border-b border-white/10 bg-black/60">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-lg tracking-[0.4em] uppercase font-black">XLNICE · 效率nice</div>
            <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase font-medium text-white/60">
              <a href="#about" className="hover:text-white transition-colors">关于</a>
              <a href="#product-acquisition" className="hover:text-[#00c6ff] transition-colors">采集获客</a>
              <a href="#product-huileme" className="hover:text-[#e6058e] transition-colors">回了么</a>
              <a href="#contact" className="hover:text-white transition-colors">联系</a>
            </div>
          </div>
        </nav>

        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,198,255,0.15),_transparent_50%)]" />
          <div className="absolute inset-y-0 right-10 w-1/3 bg-gradient-to-l from-[#e6058e]/15 via-transparent to-transparent blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl space-y-10"
          >
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.5em] text-white/50 mb-6 font-medium">润凯文化 · 效率nice</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-2 tracking-tight">
                全球精准获客<br />
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/60 to-white/90 block mt-4">
                  ×
                </span>
                <span className="bg-gradient-to-r from-[#e6058e] to-[#ff5f6d] bg-clip-text text-transparent mt-2 block">纯本地智能回复</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              从 <span className="text-[#00c6ff] font-medium">全球海量数据采集</span> 到 <span className="text-[#e6058e] font-medium">全自动隐私回复</span>。<br />
              我们提供一站式、零隐私风险的自动化商业闭环。
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a
                href="#product-acquisition"
                className="px-8 py-4 rounded-full border border-[#00c6ff]/30 bg-[#00c6ff]/5 hover:bg-[#00c6ff]/20 text-[#00c6ff] text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95"
              >
                了解采集获客
              </a>
              <a
                href="#product-huileme"
                className="px-8 py-4 rounded-full border border-[#e6058e]/30 bg-[#e6058e]/5 hover:bg-[#e6058e]/20 text-[#e6058e] text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95"
              >
                了解回了么
              </a>
            </div>
          </motion.div>
        </section>
      </header>

      <main className="space-y-32 pb-24">

        {/* --- Company / Preface --- */}
        <section id="about" className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Who We Are</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">技术很简单，复杂的是人</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed font-light">
              润凯文化/效率nice 致力于通过技术简化人际互动。
              我们坚持 <span className="text-white font-medium">可靠、简单、直接</span>，并视 <span className="text-white font-medium">隐私</span> 为生命线。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {valuePillars.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#00c6ff] font-bold">{value.title}</p>
                <p className="mt-4 text-base text-white/70 leading-relaxed">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Product 1: Acquisition --- */}
        <section id="product-acquisition" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00c6ff]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between border-b border-white/10 pb-12">
              <div className="space-y-4">
                <span className="px-4 py-1.5 rounded-full bg-[#00c6ff]/10 text-[#00c6ff] text-xs font-bold tracking-widest uppercase">Product 01</span>
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                  全球<span className="text-[#00c6ff]">采集获客</span>引擎
                </h2>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  打破信息茧房，让全球商家数据成为您的私有获客利器。<br />每日实时更新，痛击数据过时难题。
                </p>
              </div>
              <div className="bg-[#00c6ff]/10 p-8 rounded-3xl max-w-xs backdrop-blur-md border border-[#00c6ff]/20">
                <p className="text-sm text-[#00c6ff] font-bold uppercase tracking-wider mb-3">核心价值</p>
                <p className="text-white/80 text-sm leading-relaxed">彻底解决“数据过时”、“覆盖有限”、“筛选困难”三大传统获客痛点。</p>
              </div>
            </div>

            {/* Pain Points Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {acquisitionPainPoints.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#00c6ff]/30 transition-all group">
                  <p className="text-red-400 text-xs font-bold uppercase mb-3 tracking-wider">痛点 {i + 1}</p>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00c6ff] transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-sm mb-6 h-10 leading-relaxed">{item.desc}</p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">现状</p>
                    <p className="text-[#00c6ff] font-mono text-sm">{item.stat}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="space-y-10">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <MapPin className="text-[#00c6ff]" />
                核心功能亮点
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {acquisitionFeatures.map((f, idx) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel p-6 border border-white/10 bg-gradient-to-b from-white/10 to-transparent hover:bg-white/10 transition-colors"
                  >
                    <div className="text-[#00c6ff] mb-5">{f.icon}</div>
                    <h4 className="text-lg font-bold mb-3">{f.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{f.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scenarios */}
            <div className="grid md:grid-cols-3 gap-4">
              {acquisitionScenarios.map((s) => (
                <div key={s.title} className="bg-[#00c6ff]/5 border border-[#00c6ff]/10 p-6 rounded-2xl hover:bg-[#00c6ff]/10 transition-colors">
                  <p className="text-[#00c6ff] text-xs font-bold uppercase tracking-widest mb-2">应用场景</p>
                  <h4 className="text-lg font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-white/60">{s.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* --- Product 2: Huileme --- */}
        <section id="product-huileme" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6058e]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between border-b border-white/10 pb-12">
              <div className="space-y-4">
                <span className="px-4 py-1.5 rounded-full bg-[#e6058e]/10 text-[#e6058e] text-xs font-bold tracking-widest uppercase">Product 02</span>
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                  <span className="text-[#e6058e]">回了么</span> 智能助理
                </h2>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  纯视觉 RPA × 本地私有化 AI。<br />不hook进程，不联网，最笨却最安全的回复软件。
                </p>
              </div>
              <div className="bg-[#e6058e]/10 p-8 rounded-3xl max-w-xs backdrop-blur-md border border-[#e6058e]/20">
                <p className="text-sm text-[#e6058e] font-bold uppercase tracking-wider mb-3">绝对安全</p>
                <p className="text-white/80 text-sm leading-relaxed">专为金融、政府及高隐私需求场景设计。拔掉网线也能用的智能客服。</p>
              </div>
            </div>

            {/* Features Grid (Existing updated) */}
            <div className="grid gap-6 md:grid-cols-2">
              {huilemeFeatures.map((feature, idx) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel border border-white/10 bg-white/5 p-8 flex flex-col justify-center hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4 text-[#e6058e] mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-base">{feature.description}</p>
                </motion.article>
              ))}
            </div>

            {/* Scenarios (Existing updated) */}
            <div className="space-y-10">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Zap className="text-[#e6058e]" />
                全场景覆盖
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {huilemeScenarios.map((scenario) => (
                  <div key={scenario.title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <h3 className="text-base font-bold text-white mb-3">{scenario.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed font-medium">{scenario.detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- Market Stats --- */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="glass-panel border border-white/10 bg-gradient-to-r from-[#00c6ff]/10 to-[#e6058e]/10 p-10 md:p-16 rounded-[2.5rem]">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer id="contact" className="border-t border-white/10 bg-black/80 backdrop-blur-2xl pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-12 mb-20">

            {/* Left: Brand & Statement */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-3xl font-black text-white">润凯文化 <span className="text-white/30">/</span> 效率nice</h3>
              <p className="text-white/60 text-base leading-relaxed max-w-sm">
                我们致力于为个人和中小企业提供安全、私密、高效的自动化解决方案。<br />
                让技术回归简单，让效率触手可及。
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <a href="mailto:moomomiimi001@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#00c6ff] transition-colors group">
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#00c6ff]/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm tracking-wide">moomomiimi001@gmail.com</span>
                </a>
                <a href="https://t.me/caixukuntg" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-[#00c6ff] transition-colors group">
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#00c6ff]/20 transition-colors">
                    <Send size={18} />
                  </div>
                  <span className="text-sm tracking-wide">t.me/caixukuntg</span>
                </a>
                <a href="https://xlnice.top" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-[#00c6ff] transition-colors group">
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#00c6ff]/20 transition-colors">
                    <Globe size={18} />
                  </div>
                  <span className="text-sm tracking-wide">xlnice.top</span>
                </a>
              </div>
            </div>

            {/* Middle: Links */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00c6ff]">采集获客</h4>
                <ul className="space-y-3 text-sm text-white/60 font-medium">
                  <li>全球POI数据采集</li>
                  <li>智能筛选系统</li>
                  <li>B2B精准获客</li>
                  <li>CRM无缝对接</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6058e]">回了么</h4>
                <ul className="space-y-3 text-sm text-white/60 font-medium">
                  <li>纯视觉 RPA</li>
                  <li>本地 AI 大模型</li>
                  <li>零封号风险</li>
                  <li>全平台自动回复</li>
                </ul>
              </div>
            </div>

            {/* Right: QR Code */}
            <div className="lg:col-span-3 flex flex-col lg:items-end">
              <div className="space-y-4 text-center lg:text-right">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">关注我们</p>
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00c6ff] to-[#e6058e] rounded-xl opacity-30 group-hover:opacity-100 transition-opacity blur-md duration-500"></div>
                  <div className="relative p-2 bg-black rounded-xl border border-white/10">
                    <img src={qrcode} alt="WeChat QR Code" className="w-32 h-32 rounded-lg" />
                  </div>
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">扫码关注 · 获取最新私有化工具</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
            <p>© 2026 XLNICE SPACE · All rights reserved.</p>
            <p>Version 1.0 · 2026.01.14</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
