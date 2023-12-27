<script setup>
import TopBar from "./TopBar.vue";
import Profile from "./Profile/Profile.vue";
import Tickets from "./Tickets/Tickets.vue";
</script>

<template>
  <div class="right">
    <TopBar />
    <Profile />
    <!-- <Tickets /> -->
  </div>
</template>

<style scoped>
.right {
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 280px;
  padding-right: 40px;
}
</style>
