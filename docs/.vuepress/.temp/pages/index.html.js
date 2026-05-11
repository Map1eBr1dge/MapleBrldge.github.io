import comp from "D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"Blog\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/images/hero-bg.jpg\",\"title\":\"MapleBridge\",\"description\":\"记录学习与生活，分享技术与感悟\"},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/Map1eBr1dge\"}]},\"footer\":{\"startYear\":2024}},\"headers\":[],\"git\":{\"createdTime\":1778428582000,\"updatedTime\":1778430172000,\"contributors\":[{\"name\":\"mylingzai\",\"email\":\"1706208350@qq.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
