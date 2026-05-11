import comp from "D:/fengqiao/maplebridge/docs/.vuepress/.temp/pages/blogs/hello-world.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/hello-world.html\",\"title\":\"Hello World\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Hello World\",\"date\":\"2024-01-01T00:00:00.000Z\",\"categories\":[\"随笔\"],\"tags\":[\"博客\",\"VuePress\"],\"isShowComments\":true},\"headers\":[{\"level\":2,\"title\":\"关于这个博客\",\"slug\":\"关于这个博客\",\"link\":\"#关于这个博客\",\"children\":[]},{\"level\":2,\"title\":\"技术栈\",\"slug\":\"技术栈\",\"link\":\"#技术栈\",\"children\":[]},{\"level\":2,\"title\":\"主题特性\",\"slug\":\"主题特性\",\"link\":\"#主题特性\",\"children\":[]},{\"level\":2,\"title\":\"未来计划\",\"slug\":\"未来计划\",\"link\":\"#未来计划\",\"children\":[]}],\"git\":{\"createdTime\":1778428582000,\"updatedTime\":1778430172000,\"contributors\":[{\"name\":\"mylingzai\",\"email\":\"1706208350@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blogs/hello-world.md\"}")
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
