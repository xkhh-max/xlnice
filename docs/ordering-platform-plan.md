# 站点升级方案：静态展示 → 功能性下单平台

> 基于采集获客业务，参照 gongxiangjia.com 首屏风格
> 需要服务器（Node.js 后端 + 数据库）

---

## 一、需求拆解

**目标**：将当前纯展示网站，改造为：
1. 首屏像 gongxiangjia.com 的菜单导航样式
2. 支持服务分类浏览
3. 用户可直接下单购买/订阅采集获客服务
4. 订单管理（用户查看、后台处理）

**核心差异** vs 当前静态站：

| 当前 | 目标 |
|------|------|
| 纯展示，无交互 | 功能完整：浏览 → 下单 → 支付 → 使用 |
| 所有内容在 JS 里硬编码 | 数据在服务器 D1/MySQL，动态加载 |
| 无用户系统 | 注册/登录/订单管理 |
| 无支付 | 集成支付接口 |
| 静态部署 (Pages) | 需服务器运行后端 |

---

## 二、技术方案

### 推荐技术栈

| 层 | 技术 | 说明 |
|---|------|------|
| **前端** | React + Vite + Tailwind | 已有的，保持不动，扩展页面路由 |
| **路由** | React Router v6 | 新增 `/order` `/my-orders` `/admin-orders` 等页面 |
| **后端** | Cloudflare Pages Functions 或 Node.js (Express) | 利用已有 functions/ 目录或新起服务 |
| **数据库** | Cloudflare D1 (SQLite) 或 MySQL | 已有 D1 配置，可直接复用 |
| **支付** | 支付宝当面付 / 微信支付 Native | 最简单的方式，生成付款码 |
| **部署** | 服务器（云服务器 ECS/轻量） | 你提到的后期上服务器 |

### Pages Functions 方案（不需额外服务器）

Cloudflare Pages 本身支持 Functions（Serverless），可以先跑起来，流量大了再上服务器：

```
xlnice.top/
├── 前端静态 (Vite build → docs/)
└── /api/*  (Cloudflare Pages Functions → functions/)
    ├── /api/products      — 获取服务列表
    ├── /api/orders        — 创建/查询订单
    ├── /api/auth          — 登录注册
    └── /api/payment       — 支付回调
```

### 服务器方案（推荐，你要的功能更多）

如果上服务器，建议用：

```
服务器 (阿里云/腾讯云 轻量 2C4G)
├── Nginx 反向代理
├── Node.js (Express) API
├── MySQL / SQLite (D1 兼容)
└── Redis (可选，缓存)
```

---

## 三、实施步骤

### Phase 1：首屏改造 & 菜单导航 (3-5天)

**目标**：新首屏像 gongxiangjia.com，分类导航清晰

```
新首屏布局：
┌─────────────────────────────────────┐
│ Logo  [社媒运营] [数据获客] [出海服务] [AI工具] [下单] │ ← 顶部菜单
├─────────────────────────────────────┤
│                                     │
│    🔍 搜索服务...                     │ ← 搜索条
│                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│  │社媒   │ │数据   │ │出海   │ │AI    │ │ ← 四大分类卡片
│  │运营   │ │获客   │ │营销   │ │工具  │ │
│  └──────┘ └──────┘ └──────┘ └──────┘ │
│                                     │
│  ┌──────────── 推荐服务 ───────────┐ │
│  │ 商品卡片  商品卡片  商品卡片  商品卡片  │ │ ← 可下单的商品
│  └──────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**具体工作**：
1. 引入 React Router，拆分页面
2. 重写 Hero 区域为分类菜单布局
3. 新增商品列表组件（Card + 价格 + 下单按钮）
4. 移动端底部 Tab 导航

**涉及文件**：
- `src/App.tsx` → 重写路由结构
- `src/pages/Home.tsx` → 新首页
- `src/pages/Products.tsx` → 商品列表
- `src/components/NavCategories.tsx` → 分类菜单
- `src/data.ts` → 扩展商品数据（带价格）

### Phase 2：商品数据 + Server API (3-5天)

**目标**：服务列表可动态管理，不再是硬编码

1. 设计数据库表结构

```sql
-- 服务商品表
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,       -- social-media / data / overseas / ai
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),         -- 价格（分）
  unit TEXT DEFAULT '次',      -- 单位
  stock INT DEFAULT -1,        -- -1 不限
  status TEXT DEFAULT 'on',    -- on / off
  sort_order INT DEFAULT 0,
  created_at DATETIME
);

-- 订单表
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  product_id TEXT,
  quantity INT DEFAULT 1,
  total_price DECIMAL(10,2),
  status TEXT DEFAULT 'pending', -- pending/paid/completed/cancelled
  contact_info TEXT,            -- 买家联系方式
  remark TEXT,
  created_at DATETIME,
  paid_at DATETIME
);

-- 用户表（简单版）
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  wechat_id TEXT UNIQUE,
  nickname TEXT,
  phone TEXT,
  created_at DATETIME
);
```

2. 构建 API 接口

```
GET  /api/products?category=xxx  — 获取商品列表
GET  /api/products/:id           — 商品详情
POST /api/orders                 — 创建订单
GET  /api/orders?user_id=xxx     — 查询订单
POST /api/auth/wechat            — 微信登录
```

3. 前端对接 API（react-query 或原生 fetch）

**涉及文件**：
- `functions/api/products.js`
- `functions/api/orders.js`
- `functions/api/auth.js`
- `wrangler.toml` → D1 绑定配置
- `src/api/index.ts` → 前端 API 封装

### Phase 3：下单 & 支付流程 (3-5天)

**目标**：用户能选服务 → 下单 → 支付 → 完成

```
用户流程：
浏览商品 → 选择规格(数量) → 填写联系方式 → 创建订单
  → 生成支付码(微信/支付宝) → 扫码支付 → 支付成功
  → 订单状态更新 → 后台收到通知 → 人工/自动交付
```

1. 商品详情页 + 下单表单
2. 支付码生成页（静态码 / 动态码）
3. 支付结果回调处理
4. 订单状态实时更新

**支付方案**（最简单）：
- **支付宝当面付**：生成二维码，用户扫码付
- **微信支付 Native**：生成二维码
- 或直接 **人工转账**：显示收款码 → 用户转账 → 后台手动确认

### Phase 4：用户系统 & 订单管理 (2-3天)

**目标**：用户登录后可查看订单历史，管理员后台可处理订单

1. 简单登录（微信扫码 / 手机号）
2. 用户中心：我的订单、未支付、已完成
3. 管理后台：订单列表、状态管理、发货交付

**涉及文件**：
- `src/pages/MyOrders.tsx`
- `src/pages/OrderDetail.tsx`
- `src/pages/admin/OrdersManage.tsx`
- `functions/api/admin/orders.js`

### Phase 5：原有内容融合 (1-2天)

**目标**：新功能 + 原有品牌展示共存

1. 首页 = 新首屏（分类菜单 + 商品推荐）
2. 品牌介绍 = 放到「关于」页面或首页底部
3. 作品展示、客户案例等 = 保留在对应页面
4. 联系区 = 保留，在所有页面底部

```
导航结构：
首页 | 服务 | 关于 | 案例 | 联系 | [登录] [下单]
                         ↑
                   保留原品牌内容
```

---

## 四、文件变更清单

```
新增：
src/
├── pages/
│   ├── Home.tsx              ← 新首页（菜单导航+商品）
│   ├── Products.tsx          ← 商品列表页
│   ├── ProductDetail.tsx     ← 商品详情+下单
│   ├── OrderConfirm.tsx      ← 确认订单
│   ├── MyOrders.tsx          ← 我的订单
│   └── admin/
│       └── OrdersManage.tsx  ← 后台订单管理
├── components/
│   ├── NavCategories.tsx     ← 分类导航组件
│   ├── ProductCard.tsx       ← 商品卡片
│   └── OrderForm.tsx         ← 下单表单
├── api/
│   └── client.ts             ← API 封装
└── hooks/
    └── useOrders.ts          ← 订单状态管理

functions/
├── api/
│   ├── products.js
│   ├── orders.js
│   └── auth.js
└── _middleware.js            ← CORS/鉴权

修改：
src/
├── App.tsx                   ← 路由改造
├── main.tsx                  ← BrowserRouter
└── data.ts                   ← 扩展服务数据（价格/规格）

wrangler.toml                 ← D1 数据库绑定
```

---

## 五、依赖新增

```json
{
  "dependencies": {
    "react-router-dom": "^7.x",
    "react-query": "^5.x"     // 或直接 fetch
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.x"
  }
}
```

---

## 六、工作量估算

| 阶段 | 内容 | 估算 |
|------|------|------|
| Phase 1 | 首屏+菜单导航改造 | 3-5天 |
| Phase 2 | API + 数据库 | 3-5天 |
| Phase 3 | 下单支付流程 | 3-5天 |
| Phase 4 | 用户系统+订单管理 | 2-3天 |
| Phase 5 | 内容融合+测试部署 | 1-2天 |
| **合计** | | **2-3周** |

---

## 七、注意事项

1. **支付需企业资质** — 微信/支付宝支付接口需要营业执照，如果目前没有，可以先走「人工转账+后台确认」模式
2. **Cloudflare D1 限制** — 免费版 5GB 存储，每天 10万次读请求，够初期使用
3. **后续迁移** — 如果业务增长，D1 可平滑迁移到 MySQL，API 层改动很小
4. **先最小可用** — 建议先做 Phase 1+2（商品展示+下单），支付走人工，验证模式可行再上支付

---

> **建议实施顺序**：Phase 1 → Phase 2 → Phase 3(先人工支付) → Phase 4 → Phase 5 → 上支付
>
> **先发版（本周可做）**：新首屏 + 商品列表 + 下单表单（人工收款）— 不需要支付接口就能跑起来
