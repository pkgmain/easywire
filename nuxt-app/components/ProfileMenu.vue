<script setup>
import {ChevronDownIcon} from "@heroicons/vue/solid"
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import {useRouter} from "nuxt/app";

const router = useRouter()

function handleSignOut() {
  router.push({path: "/"})
}
</script>

<template>
  <Menu as="div" class="ml-3 relative">
    <div>
      <MenuButton
          class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
        <img class="h-8 w-8 rounded-full"
             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt=""/>
        <span class="hidden ml-3 text-gray-700 text-sm font-medium lg:block"><span
            class="sr-only">Open user menu for </span>Emilia Birch</span>
        <ChevronDownIcon class="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block" aria-hidden="true"/>
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
          class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button @click="handleSignOut"
                  :class="[active ? 'bg-gray-100' : '', 'block w-full text-start px-4 py-2 text-sm text-gray-700']">
            Logout
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
