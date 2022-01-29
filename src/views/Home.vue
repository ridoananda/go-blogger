<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import CardArticleSkeleton from "../components/skeleton/CardArticleSkeleton.vue"

const CardArticle = defineAsyncComponent({
    loader: () => import("../components/CardArticle.vue"),
})
</script>
<template>
    <div
        class="container pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 sm:gap-x-3 lg:gap-x-5"
    >
        <CardArticle v-for="i in 8" :key="i" />
    </div>
</template>
