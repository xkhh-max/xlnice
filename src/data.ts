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
// AI 新纪元（由 agency-agents-zh 提供技术支持）
// ============================================================
export const AI_TOOLS: ServiceSection = {
  id: 'ai-tools',
  title: 'AI 新纪元',
  titleEn: 'AI Tools',
  description: '让AI成为您的员工，7×24小时为您工作',
  color: '#e6058e',
  gradient: 'from-[#e6058e]/10 to-transparent',
  borderColor: 'border-[#e6058e]/20',
  highlightColor: 'text-[#e6058e]',
  bgCard: 'bg-[#e6058e]/10',
  ctaTitle: '为什么选我们',
  ctaDescription: '数据安全不上云 · 买断制不用年费 · 定制化贴合业务',
  items: [
    {
      id: 'huileme',
      title: '回了么 · 智能客服',
      description: '帮您自动回复客户消息，再也不用手动一一回复，省时省力。',
      detailedDescription: '电脑自动回复客户咨询，支持微信、Telegram等多平台，再也不怕忙不过来。',
      icon: 'MessageSquare',
      features: [
        '自动回复客户消息',
        '模拟真人对话',
        '分析客户意向',
        '多平台同时支持',
        '永不疲倦'
      ]
    },
    {
      id: 'ai-video',
      title: 'AI 视频生成',
      description: '输入主题，AI帮您写脚本、配音、剪辑，一键生成视频。',
      detailedDescription: '再也不用为拍视频头疼，AI帮您搞定一切，省去团队费用。',
      icon: 'Video',
      features: [
        '自动写视频脚本',
        'AI自动配音',
        '智能剪辑合成',
        '批量生成视频',
        '一键发布多平台'
      ]
    },
    {
      id: 'prompt-engineering',
      title: 'AI 训练定制',
      description: '让AI更懂您的业务，说出您行业的话，回答更专业。',
      detailedDescription: '根据您的情况定制AI，让它成为您行业的专家，回答更准确。',
      icon: 'Sparkles',
      features: [
        '行业话术定制',
        'AI回答更准确',
        '持续优化更新'
      ]
    },
    {
      id: 'ai-phone',
      title: '智能电话助理',
      description: 'AI帮您接电话、记需求，再也不会错过任何商机。',
      detailedDescription: '忙时或夜间，AI帮您接电话，记录客户需求，不漏掉任何一个客户。',
      icon: 'Phone',
      features: [
        'AI自动接电话',
        '记录客户需求',
        '标记重点客户',
        '忙时不漏接'
      ]
    },
    {
      id: 'private-llm',
      title: '自有AI部署',
      description: '把AI部署到您自己的电脑上，数据安全可控。',
      detailedDescription: '适合对数据安全要求高的企业，AI运行在您自己的设备上。',
      icon: 'Server',
      features: [
        '数据存在本地',
        '部署到您电脑',
        '买断不用年费',
        '可定制开发'
      ]
    },
    {
      id: 'custom-software',
      title: '软件开发定制',
      description: '帮您开发专属的软件系统，按需定制。',
      detailedDescription: '不管是网站、小程序还是管理系统，都能帮您定制开发。',
      icon: 'Code',
      features: [
        '网站开发',
        '小程序开发',
        '管理系统开发',
        '功能定制'
      ]
    }
  ]
};

// ============================================================
// AI 助理员工业务
// ============================================================
export type AIAgent = {
  name: string;
  expertise: string;
  scenario: string;
  isOriginal?: boolean;
};

export type AIDepartment = {
  id: string;
  emoji: string;
  name: string;
  description: string;
  color: string;
  agents: AIAgent[];
};

export const AI_EMPLOYEES: AIDepartment[] = [
  {
    id: 'engineering',
    emoji: '🛠️',
    name: '工程部',
    description: '构建未来，一个 commit 一个脚印。',
    color: '#00c6ff',
    agents: [
      { name: '前端开发者', expertise: 'React/Vue、UI 实现、性能优化', scenario: '现代 Web 应用、像素级 UI' },
      { name: '后端架构师', expertise: 'API 设计、数据库架构、可扩展性', scenario: '服务端系统、微服务' },
      { name: 'AI 工程师', expertise: '机器学习、模型部署、AI 集成', scenario: 'ML 功能、数据管线' },
      { name: 'DevOps 自动化师', expertise: 'CI/CD、基础设施自动化', scenario: '流水线开发、部署自动化' },
      { name: '安全工程师', expertise: '威胁建模、代码审计、安全架构', scenario: '应用安全、漏洞评估' },
      { name: '快速原型师', expertise: '快速 POC、MVP 开发', scenario: '概念验证、黑客马拉松' },
      { name: '高级开发者', expertise: 'Laravel/Livewire/FluxUI、高端 CSS、Three.js', scenario: '高品质 Web 体验' },
      { name: '移动应用开发者', expertise: 'iOS/Android 原生、跨平台框架', scenario: '移动端开发、App 性能优化' },
      { name: '数据工程师', expertise: 'ETL/ELT、数据湖、Spark/dbt', scenario: '数据管线、数据仓库' },
      { name: '技术文档工程师', expertise: 'API 文档、开发者文档、docs-as-code', scenario: '技术文档、知识库' },
      { name: '自主优化架构师', expertise: '自适应系统、自动调优', scenario: '智能运维、自愈系统' },
      { name: '嵌入式固件工程师', expertise: 'RTOS、外设驱动、低功耗设计', scenario: 'IoT、嵌入式系统' },
      { name: '嵌入式 Linux 驱动工程师 ⭐', expertise: '内核模块、设备树、Platform/I2C/SPI 驱动', scenario: '嵌入式 Linux BSP 开发' },
      { name: 'FPGA/ASIC 数字设计工程师 ⭐', expertise: 'Verilog/SystemVerilog、时序收敛、AXI 总线', scenario: 'FPGA 开发、数字逻辑设计' },
      { name: 'IoT 方案架构师 ⭐', expertise: 'MQTT/CoAP、边缘计算、设备管理、云平台', scenario: '物联网端到端方案设计' },
      { name: '故障响应指挥官', expertise: '故障处置、SLO 管理、事后复盘', scenario: '线上故障、应急响应' },
      { name: '威胁检测工程师', expertise: 'SIEM、威胁狩猎、检测规则', scenario: '安全运营、威胁检测' },
      { name: 'Solidity 智能合约工程师', expertise: 'Solidity、EVM、Gas 优化、DeFi', scenario: '智能合约开发、Web3' },
      { name: '微信小程序开发者 ⭐', expertise: 'WXML/WXSS、微信支付、云开发', scenario: '微信小程序全栈开发' },
      { name: '代码审查员', expertise: '代码审查、安全审计、质量把关', scenario: 'PR 审查、代码质量' },
      { name: '数据库优化师', expertise: 'Schema 设计、查询优化、索引策略', scenario: '数据库性能调优' },
      { name: 'Git 工作流大师', expertise: '分支策略、约定式提交、变基', scenario: 'Git 工作流规范' },
      { name: '软件架构师', expertise: '系统设计、DDD、架构决策', scenario: '系统架构设计' },
      { name: 'SRE 站点可靠性工程师', expertise: 'SLO、可观测性、混沌工程', scenario: '站点可靠性工程' },
      { name: 'AI 数据修复工程师', expertise: '自愈管道、SLM 语义聚类、零数据丢失', scenario: '大规模数据异常修复' },
      { name: '飞书集成开发工程师 ⭐', expertise: '飞书机器人、审批流、多维表格', scenario: '飞书生态集成开发' },
      { name: '钉钉集成开发工程师 ⭐', expertise: '钉钉机器人、酷应用、连接器', scenario: '钉钉生态集成开发' },
      { name: 'CMS 开发者', expertise: 'Drupal/WordPress、主题开发、自定义插件', scenario: 'CMS 站点开发与内容架构' },
      { name: '邮件智能工程师', expertise: '邮件解析、结构化提取、AI 推理数据', scenario: '智能体邮件集成' },
      { name: 'Filament 优化专家', expertise: 'Filament PHP 后台重构、高影响力改造', scenario: 'PHP 后台管理优化' },
    ]
  },
  {
    id: 'design',
    emoji: '🎨',
    name: '设计部',
    description: '让产品好看、好用、有惊喜。',
    color: '#e6058e',
    agents: [
      { name: '界面设计师', expertise: '视觉设计、图标、按钮', scenario: '让软件界面更好看' },
      { name: '用户体验研究员', expertise: '用户测试、需求分析', scenario: '了解用户真正想要什么' },
      { name: '品牌设计师', expertise: 'Logo、VI、视觉风格', scenario: '打造统一品牌形象' },
      { name: 'AI作图师', expertise: 'AI生成图片、海报', scenario: '快速出图、做宣传物料' },
      { name: '数据可视化师', expertise: '图表、仪表盘', scenario: '让数据一目了然' },
    ]
  },
  {
    id: 'marketing',
    emoji: '📢',
    name: '营销部',
    description: '一个真实互动一个粉丝地增长。',
    color: '#ffa500',
    agents: [
      // 国内平台
      { name: '小红书运营专家 ⭐', expertise: '种草笔记、达人合作、爆款内容', scenario: '小红书获客、品牌种草', isOriginal: true },
      { name: '抖音策略师 ⭐', expertise: '短视频策划、算法优化、直播带货', scenario: '抖音增长、短视频营销', isOriginal: true },
      { name: '微信公众号运营 ⭐', expertise: '公众号内容、社群运营、裂变增长', scenario: '微信生态营销', isOriginal: true },
      { name: 'B站内容策略师 ⭐', expertise: 'UP主运营、弹幕文化、中长视频', scenario: 'B站内容增长、品牌合作', isOriginal: true },
      { name: '快手策略师 ⭐', expertise: '下沉市场、老铁文化、直播电商', scenario: '快手运营、社区信任', isOriginal: true },
      { name: '中国电商运营专家', expertise: '淘宝/拼多多/京东、广告投放、大促作战', scenario: '电商全链路深度运营' },
      { name: '电商运营师 ⭐', expertise: '淘宝/拼多多/京东、直播带货、大促', scenario: '电商全平台运营', isOriginal: true },
      { name: '百度 SEO 专家 ⭐', expertise: '百度优化、百科/知道/贴吧生态', scenario: '百度搜索营销', isOriginal: true },
      { name: '私域流量运营师 ⭐', expertise: '企微SCRM、社群运营、用户生命周期', scenario: '私域体系搭建、复购增长', isOriginal: true },
      { name: '直播电商主播教练 ⭐', expertise: '直播话术、选品排品、千川投放', scenario: '直播带货、主播孵化', isOriginal: true },
      { name: '跨境电商运营专家 ⭐', expertise: 'Amazon/Shopee/Lazada、海外仓、品牌出海', scenario: '跨境电商全链路运营', isOriginal: true },
      { name: '短视频剪辑指导师 ⭐', expertise: '剪映/PR/达芬奇、调色、音频、特效', scenario: '短视频剪辑技术指导', isOriginal: true },
      { name: '微博运营策略师 ⭐', expertise: '热搜运营、超话、舆情公关、粉丝经济', scenario: '微博全链路运营', isOriginal: true },
      { name: '播客内容策略师 ⭐', expertise: '小宇宙/喜马拉雅、音频制作、商业化', scenario: '播客内容创作与增长', isOriginal: true },
      { name: '微信视频号运营策略师 ⭐', expertise: '视频号直播、社交裂变、私域闭环', scenario: '视频号运营与变现', isOriginal: true },
      { name: '知识付费产品策划师 ⭐', expertise: '得到/知识星球/小鹅通、内容定价', scenario: '知识付费产品运营', isOriginal: true },
      { name: '小红书专家', expertise: '生活方式内容、趋势策略', scenario: '小红书品牌建设' },
      { name: '微信公众号管理', expertise: '订阅者运营、内容营销', scenario: '微信公众号增长' },
      { name: '知乎策略师', expertise: '知识型内容、思想领袖建设', scenario: '知乎品牌权威' },
      { name: '中国市场本地化策略师 ⭐', expertise: '抖音/小红书/微信/B站全栈本地化', scenario: '中国市场进入策略', isOriginal: true },
      // 出海营销
      { name: 'TikTok 策略师', expertise: '病毒式内容、算法优化', scenario: '出海短视频营销' },
      { name: 'Twitter 互动官', expertise: '实时互动、思想领袖', scenario: '出海品牌社交' },
      { name: 'Instagram 策展师', expertise: '视觉叙事、社区运营', scenario: '出海视觉营销' },
      { name: 'Reddit 社区运营', expertise: '社区文化、真实互动', scenario: '出海社区营销' },
      { name: '应用商店优化师', expertise: 'ASO、转化优化', scenario: 'App 出海推广' },
      { name: '视频优化专家', expertise: 'YouTube 算法、观众留存、跨平台分发', scenario: '视频营销与 SEO' },
      // 通用
      { name: '增长黑客', expertise: '快速获客、病毒循环、实验', scenario: '用户增长、转化优化' },
      { name: '内容创作者', expertise: '多平台内容、编辑日历', scenario: '内容策略、品牌故事' },
      { name: '社交媒体策略师', expertise: '跨平台策略、整合营销', scenario: '全渠道社交运营' },
      { name: 'SEO 专家', expertise: '搜索引擎优化、技术 SEO', scenario: 'Google SEO、内容优化' },
      { name: '轮播图增长引擎', expertise: '轮播图内容、自动化投放', scenario: '社交媒体轮播素材' },
      { name: 'LinkedIn 内容创作专家', expertise: 'LinkedIn 职场内容、B2B 获客', scenario: 'LinkedIn 品牌建设' },
      { name: '图书联合作者', expertise: '思想领袖力图书、代笔协作', scenario: '图书策划与撰写' },
      { name: 'AI 引文策略师', expertise: 'AEO/GEO 优化、AI 平台可见性审计', scenario: 'AI 搜索引擎品牌可见性' },
    ]
  },
  {
    id: 'paid-media',
    emoji: '💰',
    name: '付费广告部',
    description: '精准投放，每一分预算都花在刀刃上。',
    color: '#22c55e',
    agents: [
      { name: '广告投放师', expertise: '广告开户、投放优化', scenario: '在抖音、微信上打广告' },
      { name: '广告素材师', expertise: '图片、视频广告制作', scenario: '制作吸引人的广告' },
      { name: '搜索引擎广告师', expertise: '百度/Google推广', scenario: '让别人搜索时看到你' },
    ]
  },
  {
    id: 'sales',
    emoji: '💼',
    name: '销售部',
    description: '从线索到成交，让每一单都有章法。',
    color: '#8b5cf6',
    agents: [
      { name: '大客户销售', expertise: '大客户服务、关系维护', scenario: '搞定大单子' },
      { name: '销售培训师', expertise: '销售技巧、话术培训', scenario: '提升销售团队能力' },
      { name: '投标专员', expertise: '投招标、方案撰写', scenario: '参与招投标拿项目' },
      { name: '售前顾问', expertise: '方案讲解、产品演示', scenario: '帮客户了解产品价值' },
      { name: '客户开发', expertise: '开拓新客户、市场拓展', scenario: '找新客户、扩大市场' },
    ]
  },
  {
    id: 'finance',
    emoji: '🏦',
    name: '金融部',
    description: '让每一笔钱都清清楚楚。',
    color: '#ec4899',
    agents: [
      { name: '财务预测分析师 ⭐', expertise: '收入预测、场景建模、现金流', scenario: 'SaaS 财务规划、融资对接', isOriginal: true },
      { name: '发票管理专家', expertise: '增值税发票、金税系统、三单匹配', scenario: '发票全生命周期管理', isOriginal: true },
      { name: '金融风控分析师 ⭐', expertise: '交易风控、反洗钱、电信诈骗', scenario: '支付风控、合规审查', isOriginal: true },
    ]
  },
  {
    id: 'hr',
    emoji: '👔',
    name: '人事部',
    description: '找对人、用好人、留住人。',
    color: '#06b6d4',
    agents: [
      { name: '招聘专员', expertise: '简历筛选、面试安排', scenario: '帮你找到合适的员工' },
      { name: '绩效考核师', expertise: 'KPI、奖金方案', scenario: '设计员工考核和激励' },
    ]
  },
  {
    id: 'legal',
    emoji: '⚖️',
    name: '法务部',
    description: '合规是底线，风控是生命线。',
    color: '#f59e0b',
    agents: [
      { name: '合同审查专家 ⭐', expertise: '民法典合同编、电子签章、风险评估', scenario: '合同审查与风控', isOriginal: true },
      { name: '制度文件撰写专家 ⭐', expertise: 'PIPL/数据安全法、隐私政策', scenario: '合规制度与政策撰写', isOriginal: true },
    ]
  },
  {
    id: 'supply-chain',
    emoji: '🚚',
    name: '供应链部',
    description: '从工厂到用户，每一环都不掉链子。',
    color: '#84cc16',
    agents: [
      { name: '库存预测专家 ⭐', expertise: '需求预测、安全库存、618/双11备货', scenario: '库存管理与补货优化', isOriginal: true },
      { name: '供应商评估专家 ⭐', expertise: '1688供应商、验厂、国标质检', scenario: '供应商准入与分级管理', isOriginal: true },
      { name: '物流路线优化师 ⭐', expertise: '顺丰/通达系、冷链、跨境物流', scenario: '物流成本优化与路线规划', isOriginal: true },
    ]
  },
  {
    id: 'product',
    emoji: '📦',
    name: '产品部',
    description: '在正确的时间做正确的事。',
    color: '#a855f7',
    agents: [
      { name: '产品经理', expertise: '产品规划、功能优先级', scenario: '规划产品功能、安排开发顺序' },
      { name: '市场调研员', expertise: '竞品分析、行业趋势', scenario: '了解市场动向和对手' },
      { name: '用户反馈分析师', expertise: '用户意见整理、需求提炼', scenario: '从用户反馈中找到改进方向' },
    ]
  },
  {
    id: 'project-management',
    emoji: '📋',
    name: '项目管理部',
    description: '让项目按时按质交付。',
    color: '#14b8a6',
    agents: [
      { name: '高级项目经理', expertise: '需求拆解、范围管控', scenario: '大型项目管理' },
      { name: '项目牧羊人', expertise: '跨团队协调、进度跟踪', scenario: '多团队项目协调' },
      { name: '实验追踪员', expertise: 'A/B 测试、实验管理', scenario: '数据驱动决策' },
      { name: '工作室制片人', expertise: '创意项目管理、资源调度', scenario: '内容/创意项目' },
      { name: '工作室运营', expertise: '工作室日常运营管理', scenario: '团队运营效率' },
      { name: 'Jira 工作流管家', expertise: 'Jira 配置、工作流优化', scenario: 'Jira 项目管理' },
    ]
  },
  {
    id: 'testing',
    emoji: '🧪',
    name: '测试部',
    description: '打破一切，让用户不必承受。',
    color: '#f97316',
    agents: [
      { name: '证据收集者', expertise: '截图 QA、视觉验证', scenario: 'UI 测试、Bug 文档' },
      { name: '现实检验者', expertise: '证据驱动认证、质量关卡', scenario: '生产就绪评估' },
      { name: 'API 测试员', expertise: 'API 验证、集成测试', scenario: '接口测试、端点验证' },
      { name: '性能基准师', expertise: '性能测试、优化', scenario: '压测、性能调优' },
      { name: '无障碍审核员', expertise: 'WCAG 审核、辅助技术测试', scenario: '无障碍合规、包容性设计' },
      { name: '测试结果分析师', expertise: '测试数据分析、质量度量', scenario: '质量趋势、发布决策' },
      { name: '工具评估师', expertise: '工具选型、功能对比', scenario: '技术选型、工具采购' },
      { name: '工作流优化师', expertise: '流程分析、自动化', scenario: '效率提升、流程改进' },
      { name: '嵌入式测试工程师 ⭐', expertise: 'HIL 测试、固件自动化测试、EMC 测试', scenario: '嵌入式质量保障、量产测试', isOriginal: true },
    ]
  },
  {
    id: 'support',
    emoji: '🤝',
    name: '客服部',
    description: '运营的中流砥柱。',
    color: '#64748b',
    agents: [
      { name: '智能客服', expertise: '自动回复、常见问题解答', scenario: '7x24小时自动回答客户问题' },
      { name: '数据分析师', expertise: '数据分析、报表', scenario: '帮您分析业务数据' },
      { name: '财务助理', expertise: '账目整理、成本分析', scenario: '帮您管好财务' },
    ]
  },
  {
    id: 'specialized',
    emoji: '🔬',
    name: '专项顾问',
    description: '针对特定需求的专家支援。',
    color: '#6366f1',
    agents: [
      { name: '合同审查顾问', expertise: '合同审核、风险提示', scenario: '帮您看懂合同、避免风险' },
      { name: '合规顾问', expertise: '政策法规、行业合规', scenario: '确保业务合法合规' },
      { name: '培训课程设计师', expertise: '企业培训、员工学习', scenario: '帮您设计员工培训方案' },
      { name: '会议助手', expertise: '会议记录、待办事项', scenario: '自动整理会议内容、跟进任务' },
      { name: '文档助手', expertise: '报告、方案、合同撰写', scenario: '帮您写各种文档材料' },
      { name: '跨境电商顾问', expertise: '海外开店、物流通关', scenario: '指导您做出口电商' },
    ]
  },
  {
    id: 'spatial-computing',
    emoji: '🥽',
    name: '空间计算部',
    description: '构建下一代空间交互体验。',
    color: '#0ea5e9',
    agents: [
      { name: 'visionOS 空间工程师', expertise: 'visionOS、SwiftUI 空间 UI', scenario: 'Apple Vision Pro 开发' },
      { name: 'macOS Metal 空间工程师', expertise: 'Metal、GPU 渲染', scenario: 'macOS 高性能图形' },
      { name: 'XR 界面架构师', expertise: '空间 UI 架构、交互设计', scenario: 'XR 应用界面设计' },
      { name: 'XR 沉浸式开发者', expertise: 'WebXR、沉浸式体验', scenario: 'VR/AR 应用开发' },
      { name: 'XR 座舱交互专家', expertise: '座舱 UI、多模态交互', scenario: '汽车/航空 XR 交互' },
      { name: '终端集成专家', expertise: '终端模拟、系统集成', scenario: '空间计算终端工具' },
    ]
  },
  {
    id: 'game-development',
    emoji: '🎮',
    name: '游戏开发部',
    description: '从独立游戏到 3A 大作，全引擎覆盖。',
    color: '#22d3ee',
    agents: [
      // 通用
      { name: '游戏设计师', expertise: '游戏机制、系统设计、平衡性', scenario: '游戏核心玩法设计' },
      { name: '关卡设计师', expertise: '关卡布局、节奏控制、空间叙事', scenario: '关卡设计、场景构建' },
      { name: '叙事设计师', expertise: '剧情设计、对话系统、世界观', scenario: '游戏剧情、互动叙事' },
      { name: '技术美术', expertise: 'Shader、渲染管线、美术工具', scenario: '画面效果、性能优化' },
      { name: '游戏音频工程师', expertise: '音效设计、音频引擎、空间音频', scenario: '游戏音效、配乐' },
      // Unity
      { name: 'Unity 架构师', expertise: 'Unity 架构、ECS、性能优化', scenario: 'Unity 项目架构' },
      { name: 'Unity 编辑器工具开发者', expertise: '编辑器扩展、自定义工具', scenario: 'Unity 工具链开发' },
      { name: 'Unity 多人游戏工程师', expertise: 'Netcode、同步、网络架构', scenario: 'Unity 联机游戏' },
      { name: 'Unity Shader Graph 美术师', expertise: 'Shader Graph、URP/HDRP', scenario: 'Unity 视觉效果' },
      // Unreal Engine
      { name: 'Unreal 多人游戏架构师', expertise: 'Replication、网络同步', scenario: 'UE 联机架构' },
      { name: 'Unreal 系统工程师', expertise: 'Gameplay 框架、C++ 系统', scenario: 'UE 核心系统开发' },
      { name: 'Unreal 技术美术', expertise: '材质、Niagara、渲染管线', scenario: 'UE 画面与性能' },
      { name: 'Unreal 世界构建师', expertise: '开放世界、地形、关卡串流', scenario: 'UE 场景构建' },
      // Blender
      { name: 'Blender 插件工程师', expertise: 'Python 插件、资源验证、导出自动化', scenario: 'Blender 管线工具开发' },
      // Godot
      { name: 'Godot 游戏脚本开发者', expertise: 'GDScript、场景树、信号系统', scenario: 'Godot 游戏逻辑' },
      { name: 'Godot 多人游戏工程师', expertise: 'MultiplayerAPI、网络同步', scenario: 'Godot 联机游戏' },
      { name: 'Godot Shader 开发者', expertise: 'Godot Shader Language、视觉效果', scenario: 'Godot 画面效果' },
      // Roblox Studio
      { name: 'Roblox 虚拟形象创作者', expertise: '虚拟形象、UGC 资产', scenario: 'Roblox 角色设计' },
      { name: 'Roblox 体验设计师', expertise: '体验设计、游戏循环', scenario: 'Roblox 游戏设计' },
      { name: 'Roblox 系统脚本工程师', expertise: 'Luau 脚本、数据存储', scenario: 'Roblox 游戏开发' },
    ]
  },
  {
    id: 'academic',
    emoji: '📖',
    name: '学术部',
    description: '为叙事设计、世界构建和文化研究提供学术级支撑。',
    color: '#a78bfa',
    agents: [
      { name: '人类学家', expertise: '文化体系、仪式、民族志', scenario: '世界观设计、文化构建' },
      { name: '地理学家', expertise: '自然与人文地理、空间分析', scenario: '地图构建、场景设计' },
      { name: '历史学家', expertise: '历史分析、史料考证', scenario: '历史题材验证、年代设定' },
      { name: '叙事学家', expertise: '叙事理论、故事结构', scenario: '剧情设计、角色弧线' },
      { name: '心理学家', expertise: '行为心理、人格理论', scenario: '角色心理塑造、动机设计' },
      { name: '学习规划师 ⭐', expertise: '考研/考公/法考备考、学习方法论', scenario: '个性化学习计划与备考规划', isOriginal: true },
    ]
  },
];

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
    category: 'AI 新纪元',
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
    category: 'AI 助理员工',
    color: '#8b5cf6',
    services: [
      { title: '部署全部AI工具', id: 'ai-employees' },
      { title: '部署定制AI员工', id: 'ai-employees' },
      { title: '193个AI专家角色', id: 'ai-employees' }
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
  { href: '#ai-employees', label: 'AI员工' },
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
