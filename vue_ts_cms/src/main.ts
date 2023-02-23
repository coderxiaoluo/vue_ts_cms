import { createApp } from 'vue'
import App from './App.vue'
// 引入css
import 'normalize.css'
import './assets/index.less'
// router
import router from './routers'

// stores
import store from './stores'

// import { useRightClick } from './utils/rightClick'
// useRightClick()

// icons
import elementIcons from './icons/element-icon'

// Element-pius css
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).use(elementIcons).mount('#app')
