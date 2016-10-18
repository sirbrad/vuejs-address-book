import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import UserView from '../views/UserView.vue'
import Home from '../views/Home.vue'

export default new Router({
  routes: [
    { path: "/user/:id", component: UserView },
    { path: "*", component: Home }
  ]
})
