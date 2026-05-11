import comp from "D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[]},{\"level\":2,\"title\":\"联系方式\",\"slug\":\"联系方式\",\"link\":\"#联系方式\",\"children\":[]},{\"level\":2,\"title\":\"关于博客\",\"slug\":\"关于博客\",\"link\":\"#关于博客\",\"children\":[]}],\"git\":{\"createdTime\":1778428582000,\"updatedTime\":1778430172000,\"contributors\":[{\"name\":\"mylingzai\",\"email\":\"1706208350@qq.com\",\"commits\":1}]},\"filePathRelative\":\"about.md\"}")
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
