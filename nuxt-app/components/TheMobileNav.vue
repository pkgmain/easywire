<script setup>
import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/vue/outline";
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
import {inject} from "#imports";

const navigation = [
  {name: 'Home', href: '#', icon: HomeIcon, current: true},
  {name: 'History', href: '#', icon: ClockIcon, current: false},
  {name: 'Balances', href: '#', icon: ScaleIcon, current: false},
  {name: 'Cards', href: '#', icon: CreditCardIcon, current: false},
  {name: 'Recipients', href: '#', icon: UserGroupIcon, current: false},
  {name: 'Reports', href: '#', icon: DocumentReportIcon, current: false},
]
const secondaryNavigation = [
  {name: 'Settings', href: '#', icon: CogIcon},
  {name: 'Help', href: '#', icon: QuestionMarkCircleIcon},
  {name: 'Privacy', href: '#', icon: ShieldCheckIcon},
]

const showMobileNav = inject("showMobileNav")
</script>

<template>
  <TransitionRoot as="template" :show="showMobileNav">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="showMobileNav = false">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                       enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                       leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75"/>
      </TransitionChild>

      <div class="fixed inset-0 flex z-40">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                         enter-from="-translate-x-full" enter-to="translate-x-0"
                         leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                         leave-to="-translate-x-full">
          <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                             enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                             leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button"
                        class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        @click="showMobileNav = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                   alt="Easywire logo"/>
            </div>
            <nav class="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
              <div class="px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   :class="[item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']"
                   :aria-current="item.current ? 'page' : undefined">
                  <component :is="item.icon || 'div'" class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true"/>
                  {{ item.name }}
                </a>
              </div>
              <div class="mt-6 pt-6">
                <div class="px-2 space-y-1">
                  <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href"
                     class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                    <component :is="item.icon || 'div'" class="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true"/>
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </nav>
          </DialogPanel>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
