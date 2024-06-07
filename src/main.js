// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.less'
import './api/flexible.js'
import './utils/rem'
import store from './store'
import MavonEditor from 'mavon-editor'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(MavonEditor)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

// 创建一个新的Axios实例
const instance = Axios.create({
  baseURL: 'http://127.0.0.1:7777', // 这里将"your-default-ip"替换为你想要设置的默认IP地址
})
 
// 将该实例添加到Vue原型上，以便在组件中直接调用
Vue.prototype.$http = instance

