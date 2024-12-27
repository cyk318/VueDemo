import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [
        // 给你留个案例
        // {
        //     redirect: '/login',
        // },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: () => import("../components/Login.vue")
        // },
    ],
    history: createWebHistory()
})

export default router