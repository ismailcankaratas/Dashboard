import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Pages",
    name: "Pages",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Pages" */ "../views/Pages/index.vue"),
  },
  {
    path: "/Components",
    name: "Components",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Components" */ "../views/Components/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let title = "Dashboard | " + to.name;
  if( to.name == undefined ) {
    title = "Böyle bir sayfa bulunamadı";
  }
  document.title = title;
  next();
})


export default router;
