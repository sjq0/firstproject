import Vue from 'vue'
import App from './App.vue'
//引入路由
import VueRouter from 'vue-router';
import router from '@/router/index'
//引入booystrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入vuex
import Vuex from 'vuex'
//引入store
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(ElementUI);

Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
