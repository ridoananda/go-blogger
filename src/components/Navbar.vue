<script lang="ts" setup>
import { ref } from "vue"
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
} from "@headlessui/vue"
import NavLink from "./NavLink.vue"
import Logo from "./Logo.vue"

const openModalSearch = ref(false)
const sidebar = ref(false)
const query = ref("")

const clearSearchInput = () => {
    query.value = ""
}
</script>
<template>
    <div
        class="flex items-center justify-between py-2 border-b border-gray-300 fixed bg-white container mx-auto left-0 right-0"
    >
        <div @click="sidebar = true">
            <!-- prettier-ignore -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
			</svg>
        </div>
        <Logo />
        <div @click="openModalSearch = true">
            <!-- prettier-ignore -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
        </div>
        <!-- Search Modal -->
        <TransitionRoot appear :show="openModalSearch" as="template">
            <Dialog as="div" @close="openModalSearch = false">
                <div
                    class="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm"
                >
                    <div class="min-h-screen px-4 text-center">
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <DialogOverlay class="fixed inset-0" />
                        </TransitionChild>
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <div
                                class="w-full max-w-md py-2 px-3 my-5 overflow-hidden text-left transition-all transform bg-white rounded-2xl border max-h-screen mx-auto"
                            >
                                <div
                                    class="my-2 flex border rounded-xl space-x-2 p-2 items-center text-gray-500"
                                >
                                    <!-- prettier-ignore -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
                                    <input
                                        type="text"
                                        class="bg-transparent focus:outline-none focus:ring-0 w-full text-sm"
                                        placeholder="Search post . . ."
                                        v-model="query"
                                    />
                                    <!-- prettier-ignore -->
                                    <svg @click="clearSearchInput" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!-- Sidebar -->
        <TransitionRoot appear :show="sidebar" as="template">
            <Dialog as="div" @close="sidebar = false">
                <div
                    class="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm"
                >
                    <div class="min-h-screen">
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <DialogOverlay class="fixed inset-0" />
                        </TransitionChild>
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-90 -translate-x-52"
                            enter-to="opacity-100 translate-x-0"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 translate-x-0"
                            leave-to="opacity-90 -translate-x-52"
                        >
                            <div
                                class="w-10/12 min-h-screen py-2 px-3 overflow-hidden text-left transition-all transform bg-white border-r max-h-screen"
                            >
                                <div
                                    class="mt-3 mb-5 flex justify-between items-center"
                                >
                                    <Logo />
                                    <!-- prettier-ignore -->
                                    <svg @click="sidebar = false" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
											</svg>
                                </div>
                                <div class="mt-4 space-y-3 px-2">
                                    <NavLink
                                        to="/"
                                        exact
                                        @click="sidebar = false"
                                        >Home</NavLink
                                    >
                                    <NavLink
                                        to="/about"
                                        @click="sidebar = false"
                                        >About</NavLink
                                    >
                                    <NavLink
                                        to="/disclamer"
                                        @click="sidebar = false"
                                        >Disclaimer</NavLink
                                    >
                                    <NavLink
                                        to="/contact"
                                        @click="sidebar = false"
                                        >Contact us</NavLink
                                    >
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
