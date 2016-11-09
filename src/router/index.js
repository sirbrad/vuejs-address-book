import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import UserShow from "../views/users/Show.vue";
import Home from "../views/Home.vue";

export default new Router({
  routes: [
    { path: "/user/:id", component: UserShow, name: "user-show" },
    { path: "*", component: Home }
  ]
});
