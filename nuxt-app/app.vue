<script setup>
import {useHead, useRoute} from "nuxt/app";
import {computed, provide, ref, watchEffect} from "#imports";
import TheMobileNav from "./components/TheMobileNav.vue";
import TheDesktopNav from "./components/TheDesktopNav.vue";
import SearchBar from "./components/SearchBar.vue";
import {useAuth} from "./composables/auth";

const route = useRoute()
const bgClass = computed(() =>
    route.path === "/"
        ? "bg-gradient-to-tr from-gray-100 to-cyan-600"
        : "bg-gray-100")

watchEffect(() => {
  useHead({
    htmlAttrs: {
      class: `h-full ${bgClass.value}`
    },

    bodyAttrs: {
      class: "h-full"
    }
  })
})

const showMobileNav = ref(false)
provide("showMobileNav", showMobileNav)

const {isAuthenticated} = useAuth()
</script>

<template>
  <div class="min-h-full">
    <TheMobileNav v-if="isAuthenticated"/>
    <TheDesktopNav v-if="isAuthenticated"/>

    <div class="flex flex-col flex-1" :class="{'lg:pl-64': isAuthenticated}">
      <SearchBar v-if="isAuthenticated"/>
      <main class="flex-1" :class="{'pb-8': $route.path !== '/'}">
        <NuxtPage/>
      </main>
    </div>
  </div>
</template>
