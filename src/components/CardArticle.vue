<script setup lang="ts">
import VLazyImage from "v-lazy-image"
import Article from "../assets/article.png"
</script>
<template>
    <div>
        <router-link to="/post/1">
            <v-lazy-image
                :src="Article"
                alt="t"
                class="w-full max-h-52 object-cover object-center rounded-xl"
            />
        </router-link>
        <div class="py-2 space-y-1">
            <router-link to="/post/1" class="font-semibold leading-5">
                Lorem ipsum dolor sit amet.
            </router-link>
            <p class="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nihil eum molestias neque.
            </p>
        </div>
        <div class="flex items-center justify-between text-gray-700 text-sm">
            <div class="flex items-center space-x-1">
                <!-- prettier-ignore -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
				</svg>
                <div>Rido Ananda</div>
            </div>
            <router-link
                to="/post/1"
                class="underline decoration-dotted decoration-blue-500/90 underline-offset-4 text-xs"
            >
                9 January 2022
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.v-lazy-image {
    @apply blur-lg transition-all duration-500;
}
.v-lazy-image-loaded {
    @apply blur-none
    /* filter: blur(5px);
    transition: filter 1.6s;
    will-change: filter; */;
}
</style>
