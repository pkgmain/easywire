import {defineNuxtConfig} from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        async (inlineOptions, nuxt) => {
            nuxt.hook('components:dirs', (dirs) => {
                dirs.push("~/node_modules/@heroicons/vue/outline")
                dirs.push("~/node_modules/@heroicons/vue/solid")
                dirs.push("~/node_modules/@headlessui/vue/dist/components")
            });
        },
    ],

})
