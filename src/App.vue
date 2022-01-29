<script lang="ts" setup>
import { defineAsyncComponent, defineComponent } from "vue"
import NavbarSkeleton from "./components/skeleton/NavbarSkeleton.vue"

const Navbar = defineAsyncComponent({
    loader: () => import("./components/Navbar.vue"),
    loadingComponent: NavbarSkeleton,
})
</script>
<template>
    <div class="antialiased">
        <Navbar />
        <div class="pt-12 pb-6">
            <router-view></router-view>
        </div>
    </div>
</template>
