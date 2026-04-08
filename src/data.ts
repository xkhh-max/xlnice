/**
 * XLNICE 业务配置文件
 * 
 * 本文件是网站的唯一数据来源
 * 修改本文件即可更新网站内容，无需触碰 App.tsx
 * 
 * 更新日志：
 * 2026.04.07 - v2.0 初始版本，包含 AI工具/数据获客/出海营销/数字化建设 四大板块
 */

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
  Database,
  Target,
  Layers,
  Briefcase,
  Monitor,
  FileText,
  Palette,
  Factory,
  Rocket,
  ShoppingBag,
  MessageCircle
} from 'lucide-react';

// ============================================================
// 品牌信息
// ============================================================
export const BRAND = {
  name: '润凯文化',
  subtitle: '效率nice',
  englishName: 'XLNICE',
  website: 'https://xlnice.top',
  email: 'moomomiimi001@gmail.com',
  telegram: 'https://t.me/caixukuntg',
  address: '中国',
  tagline: '让技术简单，让出海不难',
  description: '我们致力于为想出海的老板提供一站式 AI + 营销解决方案。让技术回归简单，让出海触手可及。'
} as const;

// ============================================================
// Hero 配置
// ============================================================
export const HERO_CONFIG = {
  headline: '帮国内老板把商品卖到全球',
  tagline: '不会发帖？不懂投放？我们帮您一条龙搞定出海营销',
  keywords: [
    { text: '国内', color: '#00c6ff' },
    { text: '出海', color: '#e6058e' },
    { text: '全球', color: '#ffa500' },
    { text: '效率', color: '#22c55e' }
  ]
} as const;

// ============================================================
// 目标客户 - 适合谁
// ============================================================
export const TARGET_CUSTOMERS = [
  {
    id: 'factory',
    title: '国内厂家',
    desc: '有自己的产品，想快速卖到海外',
    icon: 'Factory'
  },
  {
    id: 'trader',
    title: '传统企业老板',
    desc: '有稳定业务，想拓展跨境渠道',
    icon: 'Briefcase'
  },
  {
    id: 'startup',
    title: '创业者',
    desc: '想低成本快速启动出海业务',
    icon: 'Rocket'
  },
  {
    id: 'ecommerce',
    title: '跨境电商从业者',
    desc: '已有店铺，想获取更多流量',
    icon: 'ShoppingBag'
  }
] as const;

// ============================================================
// 品牌价值观
// ============================================================
export const VALUE_PILLARS = [
  {
    id: 'reliable',
    title: '可靠 · 简单 · 直接',
    body: '磨平复杂流程，不雕饰承诺，用最直观的界面让效率可触达。',
    icon: '✓'
  },
  {
    id: 'privacy',
    title: '绝对隐私',
    body: '所有数据本地保存，零网络依赖，在金融、政府、私域场景放心使用。',
    icon: '🔒'
  },
  {
    id: 'automation',
    title: '释放双手',
    body: '一次配置永久运行，自动处理高频重复工单，让人专注高价值创造。',
    icon: '⚡'
  }
] as const;

// ============================================================
// 目标受众
// ============================================================
export const TARGET_AUDIENCES = [
  { id: 'ecommerce', text: '想将商品卖到海外的老板', icon: 'ShoppingCart' },
  { id: 'crossborder', text: '跨境电商从业者', icon: 'TrendingUp' },
  { id: 'brand', text: '需要曝光品牌的创业者', icon: 'Users' },
  { id: 'privacy', text: '注重数据隐私的企业', icon: 'ShieldCheck' }
] as const;

// ============================================================
// 核心数据
// ============================================================
export const STATS = [
  { label: '平均节省时间', value: '3-5 小时/天', note: '高频对话自动完成' },
  { label: '服务企业数', value: '500+', note: '持续增长中' },
  { label: '覆盖国家地区', value: '200+', note: '全球数据覆盖' },
  { label: '客户满意度', value: '98%', note: '好评为先' }
] as const;

// ============================================================
// 服务板块定义
// ============================================================

export type ServiceCategory = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  color: string;
  gradient: string;
  borderColor: string;
  highlightColor: string;
  ctaText?: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  icon: string;
  features?: string[];
  scenarios?: { title: string; desc: string }[];
  painPoints?: { title: string; stat: string }[];
};

export type ServiceSection = ServiceCategory & {
  items: ServiceItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  bgCard?: string;
};

// ============================================================
// AI 智能化工具
// ============================================================
export const AI_TOOLS: ServiceSection = {
  id: 'ai-tools',
  title: 'AI 智能化工具',
  titleEn: 'AI Tools',
  description: '用人工智能提升效率，降低运营成本',
  color: '#e6058e',
  gradient: 'from-[#e6058e]/10 to-transparent',
  borderColor: 'border-[#e6058e]/20',
  highlightColor: 'text-[#e6058e]',
  bgCard: 'bg-[#e6058e]/10',
  ctaTitle: '核心优势',
  ctaDescription: '纯本地运行 · 数据不上云 · 支持私有化部署 · 适配多种开源大模型',
  items: [
    {
      id: 'huileme',
      title: '回了么 · 智能客服',
      description: '纯视觉 RPA × 本地私有化 AI，不联网、不封号，模拟真人自动回复多平台消息。',
      detailedDescription: '专为高隐私需求场景设计，拔掉网线也能用的智能客服。支持关键词触发、AI 生成回复、客户画像构建，彻底解决多平台回复效率低、易封号的问题。',
      icon: 'MessageSquare',
      features: [
        '关键词触发自动回复',
        '本地大模型生成回复',
        '客户画像与意向分析',
        '多平台覆盖（微信、Telegram等）',
        '零封号风险',
        '纯本地数据存储'
      ]
    },
    {
      id: 'ai-video',
      title: 'AI 视频生成',
      description: '自动制作并发布科普教育视频，一键生成脚本、配音、画面，批量产出内容。',
      detailedDescription: '输入主题或关键词，AI 自动生成视频脚本、旁白配音、画面素材，自动剪辑合成。支持批量生产，一键分发至多平台。',
      icon: 'Video',
      features: [
        'AI 生成视频脚本',
        '自动配音与字幕',
        '智能画面匹配',
        '多平台一键分发',
        '批量内容生产'
      ]
    },
    {
      id: 'prompt-engineering',
      title: '提示词工程',
      description: '为企业定制 GPT/LLM 提示词库，让 AI 输出稳定、可控、符合业务需求。',
      detailedDescription: '根据企业业务场景和目标，定制化设计提示词模板库，提升 AI 输出质量和一致性。适用于客服、销售、内容创作等多种场景。',
      icon: 'Sparkles',
      features: [
        '业务场景调研',
        '提示词设计与测试',
        '输出质量优化',
        '持续迭代更新'
      ]
    },
    {
      id: 'ai-phone',
      title: '智能电话客服',
      description: 'AI 驱动的电话接听与意向筛选，自动记录对话、标注意向、生成跟进清单。',
      detailedDescription: '7×24 小时接听电话，AI 自动与客户对话，识别意向等级，自动生成跟进记录。解决夜间/忙时无人接听、客户流失问题。',
      icon: 'Phone',
      features: [
        'AI 自动接听来电',
        '意向识别与分级',
        '自动生成跟进清单',
        '通话记录存档',
        '多轮对话能力'
      ]
    },
    {
      id: 'private-llm',
      title: '私有大模型部署',
      description: '基于 Qwen / Llama 等开源模型，部署到您的本地服务器，数据不出门。',
      detailedDescription: '为企业提供完全私有的大模型部署方案，模型运行在您的服务器上，数据全程本地处理。满足金融、医疗、政府等高合规要求。',
      icon: 'Server',
      features: [
        '开源模型（Qwen/Llama等）',
        '私有化部署',
        '数据完全本地化',
        'API 接口对接',
        '定制微调服务'
      ]
    },
    {
      id: 'custom-software',
      title: '软件定制开发',
      description: '按需定制桌面软件、Web 应用、系统集成，满足独特业务场景。',
      detailedDescription: '从需求调研到交付运维，提供全流程软件开发服务。包括桌面工具、Web 平台、系统集成、数据处理等多种类型。',
      icon: 'Code',
      features: [
        '桌面软件开发',
        'Web 应用开发',
        '系统集成',
        'API 开发',
        '技术咨询'
      ]
    }
  ]
};

// ============================================================
// 全球数据获客
// ============================================================
export const DATA_ACQUISITION: ServiceSection = {
  id: 'data-acquisition',
  title: '全球数据获客',
  titleEn: 'Data Acquisition',
  description: '精准数据是成功出海的第一步',
  color: '#00c6ff',
  gradient: 'from-[#00c6ff]/10 to-transparent',
  borderColor: 'border-[#00c6ff]/20',
  highlightColor: 'text-[#00c6ff]',
  bgCard: 'bg-[#00c6ff]/10',
  items: [
    {
      id: 'global-acquisition',
      title: '全球采集获客引擎',
      description: '中国全境 + 全球 200+ 国家地区，58 个行业分类，实时 POI 数据，智能筛选精准客户。',
      detailedDescription: '打破信息茧房，让全球商家数据成为您的私有获客利器。每日实时更新，彻底解决数据过时难题。',
      icon: 'Globe',
      painPoints: [
        { title: '数据过时', stat: '获客成本攀升至 1500元/条' },
        { title: '视野狭窄', stat: '83% 销售因找不到客户影响业绩' },
        { title: '筛选困难', stat: '转化率极低、大海捞针' }
      ],
      features: [
        '全域数据覆盖 200+ 国家',
        '58 个行业精细分类',
        '智能地理位置筛选',
        '实时 POI 数据更新',
        '一键导出 Excel/CSV/VCF',
        'API 对接 CRM 系统'
      ],
      scenarios: [
        { title: '餐饮连锁选址', desc: '3天完成市场分析，识别优质选址，客流超预期40%' },
        { title: 'B2B 精准获客', desc: '2个月获得137个精准线索，转化率达18%' },
        { title: '市场调研分析', desc: '快速识别商业缺口，为产品开发提供数据支撑' }
      ]
    }
  ]
};

// ============================================================
// 出海营销服务 - 三大平台开户
// ============================================================
export const PLATFORM_SERVICES = [
  {
    id: 'tiktok',
    title: 'TikTok',
    subtitle: '短视频流量红利',
    color: '#ff0050',
    icon: 'Video',
    highlights: [
      '官方渠道企业户开户',
      '快速下号，零风险',
      '专业团队运营',
      '内容创作指导'
    ],
    scenario: '适合想快速起量、打造爆款的品牌'
  },
  {
    id: 'facebook',
    title: 'Facebook',
    subtitle: '精准社交营销',
    color: '#1877f2',
    icon: 'Users',
    highlights: [
      '企业户开户稳定',
      '精准受众定向',
      'Pixel 追踪转化',
      'Instagram 联动'
    ],
    scenario: '适合面向 C 端消费者、品牌曝光'
  },
  {
    id: 'google',
    title: 'Google',
    subtitle: '搜索意图最强',
    color: '#4285f4',
    icon: 'Search',
    highlights: [
      '搜索 + 展示 + YouTube',
      '企业户快速开通',
      'SEO 优化加持',
      'Performance Max'
    ],
    scenario: '适合有明确购买意图的客户'
  }
] as const;

// ============================================================
// 出海营销服务
// ============================================================
export const OVERSEAS_MARKETING: ServiceSection = {
  id: 'overseas',
  title: '出海营销服务',
  titleEn: 'Overseas Marketing',
  description: '一站式解决海外流量获取与转化',
  color: '#ffa500',
  gradient: 'from-[#ffa500]/10 to-transparent',
  borderColor: 'border-[#ffa500]/20',
  highlightColor: 'text-[#ffa500]',
  bgCard: 'bg-[#ffa500]/10',
  ctaTitle: '服务亮点',
  ctaDescription: '官方渠道开户 · 专业团队运营 · 效果透明可查 · 持续优化 ROI',
  items: [
    {
      id: 'tiktok',
      title: 'TikTok 全链路服务',
      description: 'TK 开户、代运营、内容创作、广告投放，助力品牌快速出海。',
      detailedDescription: '从账号开设到内容运营，从广告投放到数据优化，提供 TikTok 全链路服务。专业团队操盘，帮助品牌在 TikTok 获得曝光与转化。',
      icon: 'TrendingUp',
      features: [
        'TikTok 企业账号开户',
        '账号代运营服务',
        '短视频内容创作',
        'TikTok 广告投放',
        '网红 KOL 对接',
        '数据分析与优化'
      ]
    },
    {
      id: 'facebook',
      title: 'Facebook 企业开户',
      description: '企业户、广告户快速下号，代投放代运营，精准覆盖海外用户。',
      detailedDescription: '官方授权渠道，Facebook 企业户开户更快、更稳定。专业优化师操盘，让广告投放效果最大化。',
      icon: 'Users',
      features: [
        'Facebook 企业户开户',
        '广告账户代运营',
        '精准受众定向',
        'Pixel 追踪设置',
        '转化追踪优化'
      ]
    },
    {
      id: 'google',
      title: 'Google 广告开户',
      description: 'Google Ads 企业户开通，搜索广告 + YouTube + Display 全覆盖。',
      detailedDescription: '官方渠道 Google Ads 开户，涵盖搜索广告、展示广告、YouTube 广告、购物广告等多种形式。',
      icon: 'Megaphone',
      features: [
        'Google Ads 企业户',
        '搜索广告（Search）',
        '展示广告（Display）',
        'YouTube 广告',
        '购物广告',
        'Performance Max'
      ]
    }
  ]
};

// ============================================================
// 数字化建设
// ============================================================
export const DIGITAL_BUILDING: ServiceSection = {
  id: 'digital',
  title: '数字化建设',
  titleEn: 'Digital Building',
  description: '打造您的线上门户与产品矩阵',
  color: '#22c55e',
  gradient: 'from-[#22c55e]/10 to-transparent',
  borderColor: 'border-[#22c55e]/20',
  highlightColor: 'text-[#22c55e]',
  bgCard: 'bg-[#22c55e]/10',
  items: [
    {
      id: 'website',
      title: '网站制作',
      description: '企业官网、品牌站、营销页，响应式设计，SEO 友好，支持中英双语。',
      detailedDescription: '从设计到开发，提供高品质网站制作服务。注重用户体验、加载速度、搜索引擎优化，支持中英文切换。',
      icon: 'Globe',
      features: [
        '企业官网建设',
        '品牌展示站',
        '营销落地页',
        '响应式设计',
        'SEO 基础优化',
        '中英双语支持'
      ]
    },
    {
      id: 'miniprogram',
      title: '小程序开发',
      description: '微信小程序、抖音小程序，定制开发，集成支付、会员、直播等功能。',
      detailedDescription: '全平台小程序定制开发，涵盖微信小程序、抖音小程序等，支持营销、电商、工具等多种类型。',
      icon: 'Smartphone',
      features: [
        '微信小程序开发',
        '抖音小程序开发',
        '支付功能集成',
        '会员系统',
        '直播功能',
        '附近的小程序'
      ]
    }
  ]
};

// ============================================================
// 联系方式
// ============================================================
export const CONTACT_INFO = {
  title: '立即开始',
  subtitle: '先聊聊再说，期待与您合作',
  wechat: {
    official: '/qrcode/wechat-official.jpg',
    personal: '/qrcode/wechat-personal.jpg',
    id: 'Jianbangzz'
  },
  phone: '18500207859',
  email: 'moomomiimi001@gmail.com',
  telegram: {
    url: 'https://t.me/caixukuntg',
    name: 'caixukuntg'
  }
} as const;

// ============================================================
// 所有服务汇总（用于导航和页脚）
// ============================================================
export const ALL_SERVICES = [
  {
    category: 'AI 工具',
    color: '#e6058e',
    services: [
      { title: '回了么 · 智能客服', id: 'ai-tools#huileme' },
      { title: 'AI 视频生成', id: 'ai-tools#ai-video' },
      { title: '提示词工程', id: 'ai-tools#prompt-engineering' },
      { title: '智能电话客服', id: 'ai-tools#ai-phone' },
      { title: '私有大模型部署', id: 'ai-tools#private-llm' },
      { title: '软件定制开发', id: 'ai-tools#custom-software' }
    ]
  },
  {
    category: '数据获客',
    color: '#00c6ff',
    services: [
      { title: '全球 POI 数据', id: 'data-acquisition' },
      { title: '智能筛选系统', id: 'data-acquisition' },
      { title: 'B2B 精准获客', id: 'data-acquisition' },
      { title: 'CRM 对接', id: 'data-acquisition' }
    ]
  },
  {
    category: '出海服务',
    color: '#ffa500',
    services: [
      { title: 'TikTok 开户', id: 'overseas#tiktok' },
      { title: 'Facebook 开户', id: 'overseas#facebook' },
      { title: 'Google 开户', id: 'overseas#google' }
    ]
  },
  {
    category: '数字化建设',
    color: '#22c55e',
    services: [
      { title: '网站制作', id: 'digital#website' },
      { title: '小程序开发', id: 'digital#miniprogram' }
    ]
  }
] as const;

// ============================================================
// 导航链接
// ============================================================
export const NAV_LINKS = [
  { href: '#about', label: '关于' },
  { href: '#ai-tools', label: 'AI工具' },
  { href: '#data-acquisition', label: '数据获客' },
  { href: '#overseas', label: '出海服务' },
  { href: '#digital', label: '数字化建设' },
  { href: '#contact', label: '联系' }
] as const;

// ============================================================
// 社交链接
// ============================================================
export const SOCIAL_LINKS = [
  {
    platform: '邮箱',
    label: '发送邮件',
    href: `mailto:${BRAND.email}`,
    icon: 'Mail'
  },
  {
    platform: 'Telegram',
    label: 'Telegram 频道',
    href: BRAND.telegram,
    icon: 'Send'
  },
  {
    platform: '官网',
    label: '访问官网',
    href: BRAND.website,
    icon: 'Globe'
  }
] as const;

// ============================================================
// 图标映射（供组件使用）
// ============================================================
export const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
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
  Database,
  Target,
  Layers,
  Briefcase,
  Monitor,
  FileText,
  Palette,
  Factory,
  Rocket,
  ShoppingBag,
  MessageCircle
};
