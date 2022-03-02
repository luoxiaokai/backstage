import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less';
import http from 'axios'
import './api/mock'

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$http = http


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
