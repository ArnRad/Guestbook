import Vue from "vue";
import Router from "vue-router";
import Table from "@/components/Table";
import AdminLogin from "@/components/AdminLogin";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Table",
      component: Table
    },

    {
      path: "/admin",
      name: "AdminLogin",
      component: AdminLogin
    }
  ]
});
