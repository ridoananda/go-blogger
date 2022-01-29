import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/disclaimer",
        name: "Disclaimer",
        component: () => import("../views/Disclaimer.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
    },
    {
        path: "/post/:id",
        name: "PostDetail",
        component: () => import("../views/post/Detail.vue"),
    },
]

const router = createRouter({
    history: createWebHashHistory("go-blogger"),
    routes,
})

export default router
