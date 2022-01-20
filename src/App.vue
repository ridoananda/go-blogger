<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
</script>

<template>
    <div class="antialiased">
        <Navbar />
        <router-view class="pt-14 pb-6"></router-view>
    </div>
</template>
