import App from './App'
import store from './store/index'
import 'vant/lib/index.css';

import { Swipe, SwipeItem , Progress  } from 'vant';

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.use(store)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(Progress)
  return {
    app
  }
}
// #endif