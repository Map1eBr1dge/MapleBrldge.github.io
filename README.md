# MapleBridge 个人博客

使用 VuePress v2 + GitHub Pages + GitHub Actions 搭建的个人博客。

## 技术栈

- **VuePress v2**: 静态网站生成器
- **GitHub Pages**: 免费静态网站托管
- **GitHub Actions**: 自动化部署

## 项目结构

```
maplebridge/
├── docs/                       # 文档目录
│   ├── .vuepress/             # VuePress 配置
│   │   └── config.js          # 配置文件
│   ├── posts/                 # 文章目录
│   │   ├── README.md          # 文章列表页
│   │   └── hello-world.md     # 示例文章
│   ├── about/                 # 关于页面
│   │   └── README.md
│   └── README.md              # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署配置
├── package.json               # 项目依赖
└── README.md                  # 本文件
```

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:8080 查看效果。

### 构建

```bash
npm run docs:build
```

构建产物位于 `docs/.vuepress/dist` 目录。

## 部署

项目配置了 GitHub Actions，当代码推送到 `main` 分支时会自动构建并部署到 GitHub Pages。

### GitHub Pages 设置步骤

1. 进入 GitHub 仓库页面
2. 点击 **Settings** → **Pages**
3. 在 **Build and deployment** 下选择 **GitHub Actions** 作为 Source

## 添加新文章

1. 在 `docs/posts/` 目录下创建新的 `.md` 文件
2. 在 `docs/posts/README.md` 中添加文章链接
3. 提交并推送到 main 分支，自动部署

## 自定义配置

编辑 `docs/.vuepress/config.js` 文件可以修改：
- 网站标题和描述
- 导航栏
- 侧边栏
- 主题颜色等

## 参考文档

- [VuePress v2 文档](https://v2.vuepress.vuejs.org/zh/)
- [GitHub Pages 文档](https://docs.github.com/zh/pages)
- [GitHub Actions 文档](https://docs.github.com/zh/actions)
