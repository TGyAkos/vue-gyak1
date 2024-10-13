import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {TsxCart} from "@/views/Cart.tsx";

;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: TsxCart
        },
        {
            path: '/counter',
            name: 'counter',
            component: () => import('@/views/CounterView.vue')
        },
        {
            path: '/userList',
            name: 'userList',
            component: () => import('@/views/UserView.vue')
        }
    ]
})

export default router
