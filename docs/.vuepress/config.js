import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // 网站标题
  title: 'MapleBridge',
  // 网站描述
  description: 'MapleBridge的个人博客',

  // 基础配置 - 对应GitHub Pages仓库名
  base: '/',

  // 语言配置
  lang: 'zh-CN',

  // 开发服务器配置
  port: 3000,

  // 打包工具
  bundler: viteBundler(),

  // 主题配置
  theme: recoTheme({
    // 主题模式 - 博客模式
    type: 'blog',

    // 作者信息
    author: 'MapleBridge',
    authorAvatar: '/images/avatar.jpg',

    // 首页背景图
    heroImage: '/images/hero-bg.jpg',

    // 博客配置
    blogConfig: {
      // 社交链接
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/Map1eBr1dge' },
      ],
    },

    // 导航栏配置
    navbar: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '文章', link: '/posts.html', icon: 'reco-document' },
      { text: '时间轴', link: '/timeline.html', icon: 'reco-date' },
      { text: '友链', link: '/friendship-link.html', icon: 'reco-friendship' },
      { text: '关于', link: '/about.html', icon: 'reco-account' },
    ],

    // 子侧边栏
    subSidebar: 'auto',
    sidebarDepth: 2,

    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新',

    // 代码块行号
    lineNumbers: true,

    // 内置搜索
    search: true,
    searchMaxSuggestions: 10,

    // 编辑链接
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    editLinkPattern: 'https://github.com/Map1eBr1dge/MapleBrldge.github.io/edit/main/docs/:path',

    // 文档页脚
    docsRepo: 'https://github.com/Map1eBr1dge/MapleBrldge.github.io',
    docsBranch: 'main',
    docsDir: 'docs',

    // 评论配置（Valine - 需要在 LeanCloud 注册获取 AppId 和 AppKey）
    // valineConfig: {
    //   appId: '你的AppId',
    //   appKey: '你的AppKey',
    //   showComment: false
    // },
  }),

  // Head 配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],

  // 插件配置
  plugins: [
    // 返回顶部
    ['@vuepress-reco/vuepress-plugin-back-to-top'],
    
    // 分页插件
    ['@vuepress-reco/vuepress-plugin-pagation', {
      perPage: 5
    }],
    
    // PWA - 内容刷新弹窗
    ['@vuepress/plugin-pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    
    // 代码复制增强
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功! 🎉"
      }
    }],
    
    // 网站地图
    ['vuepress-plugin-sitemap', {
      hostname: 'https://map1ebr1dge.github.io/'
    }],
  ],
})
