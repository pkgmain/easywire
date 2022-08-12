<script setup>
import {CheckCircleIcon, RefreshIcon, ScaleIcon} from "@heroicons/vue/outline";
import AccountOverviewCard from "./AccountOverviewCard.vue";

const cards = [
  {name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45'},
  {name: 'Pending', href: '#', icon: RefreshIcon, amount: '-$19,500.00'},
  {name: 'Processed (last 30 days)', href: '#', icon: CheckCircleIcon, amount: '$20,000.00'},
]
</script>

<template>
  <h2 class="text-lg leading-6 font-medium text-gray-900">Overview</h2>

  <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <AccountOverviewCard v-for="card in cards" :key="card.name" :card="card"/>
  </div>
</template>
