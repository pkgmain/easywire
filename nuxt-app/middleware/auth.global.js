import {defineNuxtRouteMiddleware, navigateTo} from "nuxt/app";
import {useAuth} from "~/composables/auth";

export default defineNuxtRouteMiddleware((to) => {
    const {isAuthenticated} = useAuth()

    if (isAuthenticated.value || to.path === "/auth/sign-in") return

    return navigateTo("/auth/sign-in")
})
