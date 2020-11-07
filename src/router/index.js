import Vue from "vue";
import VueRouter from "vue-router";
import register from "../components/register";
import about from "../components/about";
import HelloWorld from "../components/HelloWorld";
import login from "../components/login";
import customer from "../views/Customer.vue";
import invoice from "../views/Invoice.vue";
import pembelian from "../views/Pembelian.vue";

import pekerjaan from "../views/pekerjaan.vue";
import syncfusion from "../views/syncfusion.vue";
import gridsync from "../components/Grid.vue"
import custsync from "../views/CustomerSync.vue"
import invsync from "../views/InvoiceSync.vue"
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: login,
    },
    {
      path: "/register",
      component: register,
    },
    {
      path: "/about",
      component: about,
    },
    {
      path: "/home",
      component: HelloWorld,
    },
    {
      path: "/customer",
      component: customer,
    },
    {
      path: "/invoice",
      component: invoice,
    },
    {
      path: "/pembelian",
      component: pembelian,
    },
    {
      path: "/pekerjaan",
      component: pekerjaan,
    },
    {
      path:"/syncfusion",
      component: syncfusion
    },
    {
      path:"/gridsyncfusion",
      component: gridsync
    },
    {
      path:"/custsync",
      component:custsync
    },
    {
      path:"/invosync",
      component:invsync
    }
  ],
});
