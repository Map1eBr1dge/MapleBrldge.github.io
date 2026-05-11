import "D:/fengqiao/maplebridge/node_modules/vuepress-theme-reco/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "D:/fengqiao/maplebridge/node_modules/vuepress-theme-reco/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "D:/fengqiao/maplebridge/node_modules/vuepress-theme-reco/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "D:/fengqiao/maplebridge/node_modules/vuepress-theme-reco/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "D:/fengqiao/maplebridge/node_modules/vuepress-theme-reco/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "D:/fengqiao/maplebridge/node_modules/vuepress-theme-reco/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
