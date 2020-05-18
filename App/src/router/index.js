import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recomendaciones from "../views/Recomendaciones.vue";
import ViewMapa from "../views/ViewMapa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Recomendaciones",
    name: "Recomendaciones",
    component: Recomendaciones
  },
  {
    path: "/ViewMapa",
    name: "ViewMapa",
    component: ViewMapa
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
