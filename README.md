# 🌐 云汇导航 (YunHui Nav)

一个简洁、美观、响应式的**网址导航网站**（综合门户），类似 yinghezhinan.com。
基于开源项目 **[猫猫导航 / lh-nav](https://github.com/xtgm/lh-nav)**（原作者 [maodeyu180/mao_nav](https://github.com/maodeyu180/mao_nav)）改造而来，在保留其「前端 + 可视化后台 + GitHub 数据存储」架构的基础上，做了品牌化重构并内置了一套更贴近综合门户的默认数据。

> 特性一览
> - 🎨 **现代化设计** — 左侧分类导航 + 右侧卡片网格，支持暗色模式与移动端适配
> - 🔍 **多搜索引擎** — 内置 Google / 百度 / Bing / DuckDuckGo 切换
> - 📁 **分类管理** — 内置 18 个常用分类（影视、音乐、社交、购物、新闻、AI、开发……），可自由增删改
> - 🛠️ **可视化后台** — `/admin` 后台支持分类/站点增删改查、拖拽排序、改标题、设搜索引擎、上传 Logo
> - ☁️ **Serverless** — 无需数据库，数据以 JSON 存于仓库，后台改动自动写回仓库并触发重新部署
> - 🔒 **访问保护** — 可开启全站访问密码（`VITE_OPEN_LOCK`）
> - 🌐 **免费部署** — 一键部署到 Cloudflare Pages / Vercel

---

## 🧱 技术栈

| 角色 | 技术 |
| --- | --- |
| 前端框架 | Vue 3 + Vite 5 |
| 状态管理 | Pinia |
| 路由 | Vue Router 4 |
| 拖拽排序 | vuedraggable |
| 后台存储 | GitHub API（数据写回仓库，无需自建后端） |
| 部署 | 静态构建（Cloudflare Pages / Vercel） |

> 说明：本项目采用「Serverless 后台」架构——所谓「后台管理系统」即 `/admin` 可视化界面，它通过 GitHub Token 把导航数据直接写回仓库里的 `src/mock/mock_data.js`，再由平台自动重新构建上线。无需额外数据库或服务端。

---

## 📂 目录结构

```
yunhui-nav/
├── public/                 # 静态资源（favicon、logo、站点图标）
├── src/
│   ├── apis/               # GitHub API 交互（读取/保存导航数据、上传 Logo）
│   ├── assets/             # 样式与图片资源
│   ├── components/
│   │   ├── admin/          # 后台组件（分类管理、站点管理、系统设置、弹框）
│   │   └── icons/          # 图标组件
│   ├── config/site.js      # ⭐ 集中配置（品牌名、标题、GitHub 地址等）
│   ├── mock/mock_data.js   # ⭐ 导航数据（分类 + 站点），后台改动会写回这里
│   ├── router/             # 路由（/ 前台, /admin 后台）
│   ├── stores/counter.js   # 主题（暗色模式）状态
│   ├── views/              # 页面（NavHomeView 前台, AdminView 后台）
│   ├── App.vue             # 根组件（含标题看门狗）
│   └── main.js             # 入口
├── index.html              # HTML 模板（标题/描述占位符）
├── vite.config.js          # Vite 配置（注入标题/描述）
├── .env.example            # 环境变量示例
└── wrangler.toml          # Cloudflare 部署配置
```

---

## 🚀 快速开始（本地开发）

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev
# 浏览器访问 http://localhost:5173
```

> 本地开发时若不配置 GitHub Token，前台可正常预览（使用 `src/mock/mock_data.js` 的默认数据），
> 但 `/admin` 的「保存到 GitHub」功能需要配置 Token 才能持久化（见下方环境变量）。

构建生产版本：

```bash
npm run build      # 产物输出到 dist/
npm run preview    # 本地预览构建产物
```

---

## ⚙️ 环境变量配置

复制 `.env.example` 为 `.env`（本地）或在部署平台的环境变量中配置：

| 变量名 | 必填 | 说明 |
| :--- | :---: | :--- |
| `VITE_SITE_TITLE` | ⚪ | **网站标题**（标签页/首页大标题，最高优先级覆盖默认值） |
| `VITE_SITE_DESCRIPTION` | ⚪ | 网站描述，用于 SEO |
| `VITE_ADMIN_TITLE` | ⚪ | 后台标题 |
| `VITE_ADMIN_PASSWORD` | ✅ | **管理密钥**，进入 `/admin` 时使用 |
| `VITE_GITHUB_TOKEN` | ✅ | **GitHub Token**，后台保存数据到仓库时使用（需 `Contents: Read&Write` + `Metadata: Read`） |
| `VITE_GITHUB_OWNER` | ⚪ | 你的 GitHub 用户名 |
| `VITE_GITHUB_REPO` | ⚪ | 仓库名称 |
| `VITE_GITHUB_BRANCH` | ⚪ | 数据存储分支（默认 `main`） |
| `VITE_GITHUB_URL` | ⚪ | 前台「源码」入口地址（默认 `https://github.com`） |
| `VITE_OPEN_LOCK` | ⚪ | 设为 `true` 时，访问前台也需输入密钥 |
| `VITE_DEFAULT_SEARCH_ENGINE` | ⚪ | 默认搜索引擎：`google`/`baidu`/`bing`/`duckduckgo` |

> 💡 即使不配置任何环境变量，站点也能以默认品牌「云汇导航」与内置数据正常运行。

---

## 🛠️ 后台管理系统（`/admin`）

部署后访问 `你的域名/admin`：

1. 输入 `VITE_ADMIN_PASSWORD` 进入后台。
2. 三个标签页：
   - **📁 分类管理** — 新增/编辑/删除分类，拖拽排序。
   - **🌐 站点管理** — 在某个分类下新增/编辑/删除网站，自动获取图标，拖拽排序。
   - **⚙️ 系统设置** — 测试 GitHub 连接、修改站点标题、设置默认搜索引擎、上传 Logo。
3. 修改完成后点击「保存到 GitHub」，数据会写回 `src/mock/mock_data.js`，平台将在 2–3 分钟内自动重新部署。

> 也可以不走后台，直接编辑 `src/mock/mock_data.js` 来自定义分类与站点（提交即生效）。

---

## 🌍 部署

### Cloudflare Pages（推荐，免费）
1. 把本项目推送到你的 GitHub 仓库。
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git。
3. Framework preset: `Vue`；Build command: `npm run build`；Output: `dist`。
4. （可选）在 Environment Variables 中填写上述变量。
5. Save and Deploy。

### Vercel（免费）
1. 推送仓库后，Vercel 导入仓库。
2. Framework: `Vite`；Build: `npm run build`；Output: `dist`。
3. 部署即可，之后每次 push 自动重新部署。

---

## 🙏 致谢

本项目基于对以下开源项目的改造，衷心感谢原作者：

- **[xtgm/lh-nav](https://github.com/xtgm/lh-nav)**（本仓库改造基线）
- **[maodeyu180/mao_nav](https://github.com/maodeyu180/mao_nav)**（原项目 / 猫猫导航）

## 📄 许可证

基于 **MIT** 许可证开源，可自由使用、修改与分发，请保留原作者署名与许可证声明。
