export const themeData = JSON.parse("{\"type\":\"blog\",\"author\":\"MapleBridge\",\"authorAvatar\":\"/images/avatar.jpg\",\"heroImage\":\"/images/hero-bg.jpg\",\"blogConfig\":{\"socialLinks\":[{\"icon\":\"reco-github\",\"link\":\"https://github.com/Map1eBr1dge\"}]},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"icon\":\"reco-home\"},{\"text\":\"文章\",\"link\":\"/posts.html\",\"icon\":\"reco-document\"},{\"text\":\"时间轴\",\"link\":\"/timeline.html\",\"icon\":\"reco-date\"},{\"text\":\"友链\",\"link\":\"/friendship-link.html\",\"icon\":\"reco-friendship\"},{\"text\":\"关于\",\"link\":\"/about.html\",\"icon\":\"reco-account\"}],\"subSidebar\":\"auto\",\"sidebarDepth\":2,\"lastUpdated\":true,\"lastUpdatedText\":\"最后更新\",\"lineNumbers\":true,\"search\":true,\"searchMaxSuggestions\":10,\"editLink\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"editLinkPattern\":\"https://github.com/Map1eBr1dge/MapleBrldge.github.io/edit/main/docs/:path\",\"docsRepo\":\"https://github.com/Map1eBr1dge/MapleBrldge.github.io\",\"docsBranch\":\"main\",\"docsDir\":\"docs\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
