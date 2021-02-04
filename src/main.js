import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

//全局样式表
import './assets/css/global.css' 

// 配置请求根路径
import axios from 'axios'
axios.defaults.baseURL="http://timemeetyou.com:8889/api/private/v1/"
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
