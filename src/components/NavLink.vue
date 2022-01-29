<script lang="ts" setup>
const props = defineProps<{ to: string }>()
</script>
<template>
    <router-link :to="to">
        <span>
            <slot></slot>
        </span>
    </router-link>
</template>
<style scoped>
.router-link-active span {
    @apply font-semibold relative;
}
.router-link-active span::after {
    content: "";
    @apply absolute -bottom-1 left-0 w-1/2 h-[2px] bg-blue-500 rounded;
}
</style>
