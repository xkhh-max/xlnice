import { motion, useScroll } from 'framer-motion';
import {
  Github,
  Globe,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Zap,
  ExternalLink,
} from 'lucide-react';

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

const features = [
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

const scenarios = [
  {
    title: '个人 / 中小企业办公',
    detail:
      '自动化关键词回复，解放运营、客服的重复任务；本地 AI 优化英文沟通，未来支持更多语言。',
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
  { label: '目标用户', value: '10 万+', note: 'AI+RPA 行业拓展速度' },
  { label: '商业目标', value: '500 万营收', note: '2026 年目标' },
];

const contactLinks = [
  { label: '官网', link: 'https://xlnice.top', icon: <Globe size={20} /> },
  { label: '邮箱', link: 'mailto:moomomiimi001@gmail.com', icon: <MessageCircle size={20} /> },
  { label: '社交', link: 'https://xlnice.top', icon: <Github size={20} /> },
];

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#03030a] text-white min-h-screen font-sans overflow-x-hidden">
      <motion.div
        className="fixed inset-x-0 top-0 h-1 origin-left z-50 bg-gradient-to-r from-[#00c6ff] via-[#e6058e] to-[#ffa500]"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative">
        <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl border-b border-white/10 bg-black/60">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-lg tracking-[0.4em] uppercase font-black">XLNICE · 回了么</div>
            <div className="hidden md:flex gap-6 text-xs tracking-[0.3em] uppercase opacity-60">
              <a href="#preface" className="hover:opacity-100">前言</a>
              <a href="#mission" className="hover:opacity-100">使命</a>
              <a href="#features" className="hover:opacity-100">功能</a>
              <a href="#scenarios" className="hover:opacity-100">场景</a>
              <a href="#contact" className="hover:opacity-100">联系</a>
            </div>
          </div>
        </nav>

        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,198,255,0.35),_transparent_45%)]" />
          <div className="absolute inset-y-0 right-10 w-1/3 bg-gradient-to-l from-[#e6058e]/30 via-transparent to-transparent blur-3xl" />

          <div className="relative max-w-4xl space-y-8">
            <h1 className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">回了么</h1>
            <p className="text-[18px] uppercase tracking-[0.4em] text-[#00c6ff]">润凯文化 · 效率nice</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">全球获客 + 视觉 RPA × 本地 AI</h1>
            <p className="text-lg md:text-xl text-white/70">
              不联网、严格合规、穿透全球所有社交聊天软件界面，做到真正的在保证隐私安全的情况下提升效率，隐私泛滥的时代，借助“最笨却最安全”的方式，一次配置即可实现获客到全平台自动回复。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#ff5f6d] text-sm font-semibold uppercase tracking-[0.4em]"
              >
                立即咨询
              </a>
              <a
                href="https://xlnice.top"
                className="px-8 py-3 rounded-full border border-white/40 text-sm font-semibold uppercase tracking-[0.4em]"
                target="_blank"
                rel="noreferrer"
              >
                访问官网
              </a>
            </div>
          </div>
        </section>
      </header>

      <main className="space-y-24">
        <section id="preface" className="max-w-6xl mx-auto px-6">
          <div className="glass-panel p-8 lg:p-12 border border-white/10 bg-white/5 backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">前言</p>
            <h2 className="text-3xl md:text-4xl font-black mt-4">抓住时代浪潮，守护隐私</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              “回了么”是润凯文化/效率nice 推出的本地智能回复助手，面向金融、Z府、企业等高隐私场景。我们用纯视觉 RPA 模拟人类操作，无需联网即可运行，确保用户数据完全留在本地，不触发封号风险。
            </p>
            <p className="mt-2 text-lg text-white/70 leading-relaxed">
              已完成核心开发的测试版，致力于自动化高频重复聊天，让你把手从长时间重复的回复里抽出来，专注高价值创造。
              帮助个人和企业实现高效、精准、持续的运营，现在结合之前的全球获客软件可无缝衔接，帮助个人实现高效、精准的沟通获客。
            </p>
          </div>
        </section>

        <section id="mission" className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.5em] text-[#00c6ff]">公司介绍 / 价值观</p>
              <h2 className="text-3xl md:text-4xl font-black">润凯文化 · 效率nice 的使命</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {valuePillars.map((value) => (
                <div key={value.title} className="glass-panel p-6 border border-white/10 bg-white/5 backdrop-blur-2xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{value.title}</p>
                  <p className="mt-4 text-base text-white/70 leading-relaxed">{value.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
            <h3 className="text-2xl font-black">公司信念</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>用技术让效率可感知，保持简单 易用 可靠 ，技术很简单复杂的是人！</li>
              <li>绝对隐私，让每一条关于你和客户信息都留在你的电脑</li>
              <li>一次配置，永久自动化运行，持续释放双手；</li>
              <li>服务中小企业与个人用户，构建信任与效率的长期伙伴关系。</li>
            </ul>
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">核心功能模块</p>
            <h2 className="text-3xl md:text-4xl font-black">稳定、可观测的自动化逻辑</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel border border-white/10 bg-white/5 backdrop-blur-2xl p-6 space-y-4"
              >
                <div className="flex items-center gap-3 text-[#00c6ff]">
                  {feature.icon}
                  <h3 className="text-xl font-black">{feature.title}</h3>
                </div>
                <p className="text-white/70">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="scenarios" className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">适用场景</p>
            <h2 className="text-3xl md:text-4xl font-black">适配所有对话平台与业务场景</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="glass-panel border border-white/10 bg-white/5 p-6 space-y-3">
                <h3 className="text-xl font-black">{scenario.title}</h3>
                <p className="text-white/70 leading-relaxed">{scenario.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">市场展望</p>
            <h2 className="text-3xl md:text-4xl font-black">数据驱动的商业策略</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div className="glass-panel border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 text-center">
                <p className="text-4xl font-black text-[#e6058e]">{stat.value}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60 mt-2">{stat.label}</p>
                <p className="mt-3 text-white/70 text-sm">{stat.note}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">联系我们</p>
            <h3 className="text-2xl font-black">润凯文化 / 效率nice</h3>
            <p className="text-white/70">
              版本：1.0 · 发布日期：2026年1月14日 · 公众号「润凯文化」 · 社交账号「效率nice」。
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.4em]">联系细节</p>
            <ul className="space-y-2 text-white/70">
              <li>
                邮箱：<a href="mailto:moomomiimi001@gmail.com" className="text-[#00c6ff]">moomomiimi001@gmail.com</a>
              </li>
              <li>
                官网：<a href="https://xlnice.top" className="text-[#00c6ff]">xlnice.top</a>
              </li>
              <li>社交：效率nice / 视觉化运营</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em]">保持联系</p>
            <div className="flex gap-4 text-[#00c6ff]">
              {contactLinks.map((entry) => (
                <a
                  key={entry.label}
                  href={entry.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm uppercase tracking-[0.3em]"
                >
                  {entry.icon}
                  <span>{entry.label}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/xkhh-max"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-white/30 text-xs uppercase tracking-[0.4em] flex items-center gap-2 justify-center"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://xlnice.top"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#e6058e] text-xs uppercase tracking-[0.4em] flex items-center gap-2 justify-center"
              >
                <ExternalLink size={16} /> 官网
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs uppercase tracking-[0.4em] pb-6 text-white/40">
          © 2026 XLNICE SPACE · 回了么 · 本地隐私 · 远程信任
        </div>
      </footer>
    </div>
  );
}

export default App;
