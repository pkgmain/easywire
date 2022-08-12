<script setup>
import ProfileHeader from "../components/ProfileHeader.vue";
import RecentActivity from "../components/RecentActivity.vue";
import AccountOverview from "../components/AccountOverview.vue";
</script>

<template>
  <div>
    <ProfileHeader/>

    <div class="mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AccountOverview/>
      </div>

      <RecentActivity/>
    </div>
  </div>
</template>


