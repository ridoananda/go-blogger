<script setup lang="ts">
const props = defineProps<{ to: string }>()
</script>
<template>
    <div>
        <router-link :to="to">
            <slot></slot>
        </router-link>
    </div>
</template>
<style scoped>
.router-link-active {
    @apply font-semibold relative;
}
.router-link-active::after {
    content: "";
    @apply absolute -bottom-1 left-0 w-1/2 h-[2px] bg-blue-500 rounded;
}
</style>
