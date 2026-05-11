export const redirects = JSON.parse("{\"/blogs/%E9%9A%8F%E7%AC%94/hello-world.html\":\"/blogs/suibi/hello-world.html\",\"/blogs/%E5%AE%89%E5%85%A8/ctf-pwn-notes.html\":\"/blogs/anquan/ctf-pwn-notes.html\",\"/blogs/%E6%95%99%E7%A8%8B/vuepress-guide.html\":\"/blogs/jiaocheng/vuepress-guide.html\",\"/blogs/%E7%94%9F%E6%B4%BB/summer-hiking.html\":\"/blogs/shenghuo/summer-hiking.html\"}")

export const routes = Object.fromEntries([
  ["/timeline.html", { loader: () => import(/* webpackChunkName: "timeline.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/timeline.html.js"), meta: {"title":""} }],
  ["/posts.html", { loader: () => import(/* webpackChunkName: "posts.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/posts.html.js"), meta: {"title":""} }],
  ["/friendship-link.html", { loader: () => import(/* webpackChunkName: "friendship-link.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/friendship-link.html.js"), meta: {"title":""} }],
  ["/categories/anquan/1.html", { loader: () => import(/* webpackChunkName: "categories_anquan_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/categories/anquan/1.html.js"), meta: {"title":""} }],
  ["/categories/shenghuo/1.html", { loader: () => import(/* webpackChunkName: "categories_shenghuo_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/categories/shenghuo/1.html.js"), meta: {"title":""} }],
  ["/categories/jiaocheng/1.html", { loader: () => import(/* webpackChunkName: "categories_jiaocheng_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/categories/jiaocheng/1.html.js"), meta: {"title":""} }],
  ["/categories/suibi/1.html", { loader: () => import(/* webpackChunkName: "categories_suibi_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/categories/suibi/1.html.js"), meta: {"title":""} }],
  ["/tags/CTF/1.html", { loader: () => import(/* webpackChunkName: "tags_CTF_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/CTF/1.html.js"), meta: {"title":""} }],
  ["/tags/Pwn/1.html", { loader: () => import(/* webpackChunkName: "tags_Pwn_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/Pwn/1.html.js"), meta: {"title":""} }],
  ["/tags/erjinzhi/1.html", { loader: () => import(/* webpackChunkName: "tags_erjinzhi_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/erjinzhi/1.html.js"), meta: {"title":""} }],
  ["/tags/suibi/1.html", { loader: () => import(/* webpackChunkName: "tags_suibi_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/suibi/1.html.js"), meta: {"title":""} }],
  ["/tags/dengshan/1.html", { loader: () => import(/* webpackChunkName: "tags_dengshan_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/dengshan/1.html.js"), meta: {"title":""} }],
  ["/tags/VuePress/1.html", { loader: () => import(/* webpackChunkName: "tags_VuePress_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/VuePress/1.html.js"), meta: {"title":""} }],
  ["/tags/boke/1.html", { loader: () => import(/* webpackChunkName: "tags_boke_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/boke/1.html.js"), meta: {"title":""} }],
  ["/tags/GitHub-Pages/1.html", { loader: () => import(/* webpackChunkName: "tags_GitHub-Pages_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/tags/GitHub-Pages/1.html.js"), meta: {"title":""} }],
  ["/posts/1.html", { loader: () => import(/* webpackChunkName: "posts_1.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/posts/1.html.js"), meta: {"title":""} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"关于我"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于我"} }],
  ["/blogs/suibi/hello-world.html", { loader: () => import(/* webpackChunkName: "blogs_随笔_hello-world.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/blogs/suibi/hello-world.html.js"), meta: {"title":"Hello World"} }],
  ["/blogs/anquan/ctf-pwn-notes.html", { loader: () => import(/* webpackChunkName: "blogs_安全_ctf-pwn-notes.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/blogs/anquan/ctf-pwn-notes.html.js"), meta: {"title":"CTF Pwn 入门笔记"} }],
  ["/blogs/jiaocheng/vuepress-guide.html", { loader: () => import(/* webpackChunkName: "blogs_教程_vuepress-guide.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/blogs/jiaocheng/vuepress-guide.html.js"), meta: {"title":"VuePress 博客搭建指南"} }],
  ["/blogs/shenghuo/summer-hiking.html", { loader: () => import(/* webpackChunkName: "blogs_生活_summer-hiking.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/blogs/shenghuo/summer-hiking.html.js"), meta: {"title":"日常随记 - 夏日登山"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
