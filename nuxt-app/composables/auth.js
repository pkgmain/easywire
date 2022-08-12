import {useState} from "nuxt/app";

export function useAuth() {
    const isAuthenticated = useState("isAuthenticated", () => false)

    function signIn() {
        isAuthenticated.value = true;
    }

    function signOut() {
        isAuthenticated.value = false;
    }

    return {
        signIn,
        signOut,
        isAuthenticated
    }
}
