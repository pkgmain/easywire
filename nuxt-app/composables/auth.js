import {ref} from "#imports"
import {useCookie, useState} from "nuxt/app";

export function useAuth() {
    const key = "isAuthenticated";
    let isAuthenticated
    let cookie
    try {
        cookie = useCookie(key, {default: () => false})
        isAuthenticated = useState(key, () => cookie)
    } catch (err) {
        cookie = ref(false)
        isAuthenticated = useState(key, () => ref(false))
    }

    function signIn() {
        cookie.value = true;
        isAuthenticated.value = true;
    }

    function signOut() {
        cookie.value = false;
        isAuthenticated.value = false;
    }

    return {
        signIn,
        signOut,
        isAuthenticated
    }
}
