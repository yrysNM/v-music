import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/", 
        name: "HomeView",
        component: () => import("../views/HomeView.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes, 
    linkExactActiveClass: 'text-yellow-500'
}); 

/**
 * @TODO add auth protect router
 */
// router.beforeEach((to, from, next) => {
    // if(!to.meta.require)
// })

export default router;