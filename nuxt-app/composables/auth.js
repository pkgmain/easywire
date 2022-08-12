import {useCookie, useState} from "nuxt/app";

export function useAuth() {
    const key = "isAuthenticated";
    const cookie = useCookie(key, {default: () => false})
    const isAuthenticated = useState(key, () => cookie)

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
