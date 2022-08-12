<script setup>
import {inject} from "#imports"
import {BellIcon, MenuAlt1Icon} from "@heroicons/vue/outline";
import {SearchIcon} from "@heroicons/vue/solid";
import ProfileMenu from "./ProfileMenu.vue";

const showMobileNav = inject("showMobileNav")
</script>

<template>
  <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
    <button type="button"
            class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
            @click="showMobileNav = true">
      <span class="sr-only">Open sidebar</span>
      <MenuAlt1Icon class="h-6 w-6" aria-hidden="true"/>
    </button>

    <div class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
      <div class="flex-1 flex">
        <form class="w-full flex md:ml-0" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
              <SearchIcon class="h-5 w-5" aria-hidden="true"/>
            </div>
            <input id="search-field" name="search-field"
                   class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                   placeholder="Search transactions" type="search"/>
          </div>
        </form>
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <button type="button"
                class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true"/>
        </button>

        <ProfileMenu/>
      </div>
    </div>
  </div>
</template>
