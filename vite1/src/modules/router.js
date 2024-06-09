import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [
        {
            name: '首页',
            component: () => import('../pages/Home.vue')
        },
        {
            name: '其他',
            path: '/about',
            component: () => import('../pages/About.vue')
        }
    ],
    history: createWebHistory()
})

export default router