import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function elementIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default elementIcons
