# xlnice.top 网站优化计划文档（v2）

> 最后更新：2026-06-06
> 用途：跟踪已实施和待实施的优化项

---

## ✅ 已实施完毕

| # | 项目 | 涉及文件 | 状态 |
|---|------|---------|------|
| A | 小程序用户数 700+ → **1000+** | `data.ts` | ✅ |
| B | 融军官网 `rongjun.fun` → Projects 区 | `data.ts` | ✅ |
| C | **抖音业务** — 点赞评论涨粉、直播间控评 | `data.ts` `DOUYIN_SERVICES` | ✅ |
| D | **微信二维码** — 桌面拷贝 → Contact 区 | 文件 + `CONTACT_INFO` | ✅ |
| E | **Telegram + 其他渠道 QR** — 桌面拷贝 → Contact 区 | 文件 + `CONTACT_INFO` | ✅ |
| F | **China Sourcing** — 全新英文板块 (Product Sourcing / Factory Direct / Supply Chain / Trade Consulting) | `data.ts` `App.tsx` | ✅ |
| G | **SEO h1 优化** — 含出海营销·AI工具·网站搭建·跨境电商·数据获客等关键词 | `data.ts` `HERO_CONFIG` | ✅ |
| H | **HTML title+description** — 更多具体业务关键词 | `index.html` | ✅ |
| I | **ErrorBoundary** — 包裹 AI Tools / AI Employees / China Sourcing 三大区块 | `components/ErrorBoundary.tsx` | ✅ |
| J | **CSS 品牌色变量** — `index.css` 定义 `--color-brand-*` ×7，`tailwind.config.js` 添加 `brand.*` 色系 | `index.css` + `tailwind.config.js` | ✅ |
| K | **JSON-LD 结构化数据** — Organization 类型添加到 index.html | `index.html` | ✅ |
| L | **Sitemap 修复** — 删除所有 #hash 链接，只保留首页 URL | `docs/sitemap.xml` + `public/sitemap.xml` | ✅ |
| M | **Alt 文本 + loading="lazy"** — 所有 QR 图片 | `App.tsx` | ✅ |
| N | **Hero CTA 差异化说明** — 两个按钮下各加一行解释文字 | `App.tsx` | ✅ |
| O | **浮动联系按钮** — 页面滚动超过 600px 后左下角渐显，「立即咨询」 | `App.tsx` | ✅ |
| P | **联系区重构** — 5列挤在一起 → 2行×3列网格，卡片加大到 w-36，悬停效果统一 | `App.tsx` | ✅ |
| Q | **"四大服务板块" → "核心服务板块"** 标题更新 | `App.tsx` | ✅ |
| R | **客户案例占位** — 3个半真实案例卡片（带图标和脱敏描述），替代灰色骨架 | `App.tsx` | ✅ |
| S | **免费咨询输入框** — 功能完整：输入推送 PushDeer + 反馈提示 | `App.tsx` | ✅ |
| T | **China Sourcing CTA** — 按钮文字缩短为 "Get a Quote →" | `App.tsx` | ✅ |
| U | **导航栏更新** — 新增「项目」「前置咨询」入口 | `data.ts` `NAV_LINKS` | ✅ |
| V | **标签切换 "其他联系方式" → "更多渠道"** — 更准确 | `data.ts` `CONTACT_INFO` | ✅ |

---

## 📋 待实施事项（按优先级）

### Phase 1：快速见效（1-2天）

| 优先级 | 项目 | 说明 | 工作量 |
|--------|------|------|--------|
| **P1** | ⑭ 代码分割 | `React.lazy()` 拆分 AI 员工列表 + China Sourcing 板块 | 1h |
| **P1** | ⑰ 客户案例补充 | 你提供真实截图和数据后替换占位内容 | 30min |
| **P1** | ⑳ CTA 差异化 | 不同板块用不同按钮文案：「免费诊断」「预约演示」「下载方案」「立即开户」 | 30min |
| **P1** | ⑪ 移动端 nav 图标化 | 汉堡菜单展开项加 lucide 小图标 | 20min |
| **P1** | ⑧ CTA 文案再打磨 | 测试上线后根据转化数据优化描述文字 | 15min |

### Phase 2：SEO + 技术

| 优先级 | 项目 | 说明 | 工作量 |
|--------|------|------|--------|
| **P1** | ④ OG 社交分享图 | 制作 1200×630px 封面图（品牌名+核心服务+网址） | 30min |
| **P1** | ⑤ 预渲染/SSG | `vite-plugin-prerender` 生成静态首页 HTML | 2h |
| **P1** | ⑦ 内部链接优化 | "核心服务板块" 4个卡片点击跳转到对应区块 | 10min |
| **P2** | ⑬ PushDeer 通知增强 | 真实失败状态反馈（目前 error 也 alert "成功"） | 20min |
| **P2** | ⑮ PWA 支持 | `manifest.json` + Service Worker | 1h |
| **P3** | ⑯ 图片转 WebP | QR 码图片压缩（最大 473KB → ~50KB） | 15min |

### Phase 3：体验打磨

| 优先级 | 项目 | 说明 | 工作量 |
|--------|------|------|--------|
| **P2** | ⑫ 服务板块间过渡 | 添加横向渐变色分隔装饰线 | 10min |
| **P2** | ㉒ 定价参考 | 底部加「基础/标准/定制」三档，降低咨询门槛 | 1h |
| **P2** | ⑨ 项目卡片加预览图 | 每个项目加 favicon 或截图缩小图 | 20min |
| **P2** | ⑩ 图片统一 WebP | 所有 QR 码图片转格式 | 15min |

### Phase 4：法律 + 基建

| 优先级 | 项目 | 说明 | 工作量 |
|--------|------|------|--------|
| **P1** | ㉓ 隐私政策 + 服务条款 | 法律必要，尤其 GDPR。新建独立页 | 1h |
| **P1** | ㉔ HTTPS 强制跳转 | 确认 http→https 301 重定向 | 30min |
| **P2** | ㉕ Cookie 同意弹窗 | GDPR 合规 | 1h |
| **P2** | ㉖ CDN (Cloudflare) | **用户备注：以后再说** | — |
| **P2** | ㉗ 智能 FAQ 预设回复 | **用户备注：不接 API，预设回复引导留资** | 1h |
| **P3** | ㉘ 英文版 `/en` | 追加英文版本 | 2h+ |
| **P3** | ㉚ Favicon 多格式 | `favicon.ico` + apple-touch-icon | 15min |

---

## 📁 最终文件清单

```
src/
├── components/
│   └── ErrorBoundary.tsx              ← 新增
├── App.tsx                            ← 大改（全面优化）
├── data.ts                            ← 修改（新增板块+配置）
├── index.css                          ← 修改（CSS变量）
tailwind.config.js                     ← 修改（brand颜色）
index.html                             ← 修改（title/JSON-LD/meta）
public/
├── sitemap.xml                        ← 修改
├── qrcode/
│   ├── wechat-personal-new.jpg        ← 新增
│   ├── telegram-personal.png          ← 新增
│   └── other-contact.jpg              ← 新增
docs/
├── sitemap.xml                        ← 修改
└── optimization-plan.md               ← 本文档
```

---

> **下一步**：请在浏览器中预览效果，指出还需要调整的地方，然后继续迭代。
