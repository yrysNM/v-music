import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import useUserStore from "../stores/user";

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/about',
  name: 'about',
  component: () => import('../views/About.vue')
},
{
  name: "manage",
  /**
   * @FEATURE alias same redirect
   */
  // alias: "/manage",
  path: "/manage-music",
  component: () => import("../views/Manage.vue"),
  beforeEnter: (to, from, next) => {
    console.log("Manage Route Guard");
    next();
  },
  meta: {
    requiresAuth: true,
  }
},
{
  path: "/manage",
  redirect: { name: 'manage' },
},
{
  path: "/:catchAll(.*)*",
  redirect: { name: 'home' }
}];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  // console.log(to.meta);
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" })
  }
});

export default router
