<script setup>
import TopBar from "./TopBar.vue";
import Profile from "./Profile/Profile.vue";
import Tickets from "./Tickets/Tickets.vue";
const route = useRoute();
console.log(route.path);
</script>

<template>
  <div class="right">
    <TopBar />
    <Profile v-if="route.path === '/' || route.path === '/profile'" />
    <Tickets v-else-if="route.path === '/tickets'" />
  </div>
</template>

<style scoped>
.right {
  padding-top: 20px;
  padding-bottom: 100px;
  padding-left: 280px;
  padding-right: 40px;
}
</style>
