import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Disclaimer from "../views/Disclaimer.vue"
import Contact from "../views/Contact.vue"
import PostDetail from "../views/post/Detail.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/disclaimer",
        name: "Disclaimer",
        component: Disclaimer,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/post/:id",
        name: "PostDetail",
        component: PostDetail,
    },
]

const router = createRouter({
    history: createWebHashHistory("go-blogger"),
    routes,
})

export default router
