import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

import global from './global/global'
Vue.prototype.GLOBAL = global

// 引入全局 js
import '@/plugins/vant'
import '@/assets/js/flexable.js'
import '@/assets/js/adapter-latest.js'
import '@/assets/js/js-sdk.umd.js'
Vue.config.productionTip = false

// 添加响应拦截器 headers 里加 token
axios.defaults.timeout = 30000
axios.interceptors.request.use(
  (config) => {
    let token = window.sessionStorage.getItem('token')
    if (token) config.headers.token = token
    config.headers.common = {
      Accept: 'application/json, text/plain, */*'
    }
    // console.log(config)
    return config
  },
  (err) => {
    console.log('error' + err)
    return Promise.reject(err)
  }
)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
