import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/index'

Vue.use(VueResource)

import App from './App.vue'

const app = new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
