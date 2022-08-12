import {computed} from "#imports";
import {useRoute} from "nuxt/app";

export function useAuth() {
    const route = useRoute();
    const isAuthenticated = computed(() => route.path === "/dashboard")

    return {isAuthenticated}
}
