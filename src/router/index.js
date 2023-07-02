import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import useUserStore from "../stores/user";

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/about',
  name: 'about',
  component: () => import('../views/AboutView.vue')
},
{
  name: "manage",
  /**
   * @FEATURE alias same redirect
   */
  // alias: "/manage",
  path: "/manage-music",
  component: () => import("../views/ManageView.vue"),
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
},
{
  name: "song",
  path: "/song/:id",
  component: () => import("../views/SongView.vue")
},
];

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
