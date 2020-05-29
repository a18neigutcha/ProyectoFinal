import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
/* import Recomendaciones from "../views/Recomendaciones.vue"; */
/* import ViewMapa from "../views/ViewMapa.vue"; */
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import UserPage from "../views/UserPage.vue";
/* import Admin from "../views/Admin.vue" */
import Actividades from "../views/Actividades";
import LugarInfo from "../views/LugarInfo";
import AgregarActividades from "../views/AgregarActividades";
import MisLugares from "../views/MisLugares";
import LugarUpdate  from "../views/LugarUpdate";
import ConfigUser from "../views/ConfigUser";
import Help from "../views/Help";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  /* {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /webpackChunkName: "about"/ "../views/About.vue")
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
  }, */
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/UserPage',
    name: 'UserPage',
    component: UserPage
  }/* ,{
    path: '/Admin',
    name: 'Admin',
    component: Admin
  } */,{
    path: '/Actividades',
    name: 'Actividades',
    component: Actividades
  },{
    path: '/LugarInfo/:id',
    name: 'LugarInfo',
    component: LugarInfo
  },{
    path: '/AgregarActividades',
    name: 'AgregarActividades',
    component: AgregarActividades
  },{
    path: '/MisLugares',
    name: 'MisLugares',
    component: MisLugares
  },{
    path: '/MisLugares/:id',
    name: 'LugarUpdate',
    component: LugarUpdate
  },
  {
    path: '/ConfigUser',
    name: 'ConfigUser',
    component: ConfigUser
  },{
    path: '/Help',
    name: 'Help',
    component: Help
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
