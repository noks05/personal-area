<script setup>
import TopBar from "./TopBar.vue";
import Profile from "./Profile/Profile.vue";
import Tickets from "./Tickets/Tickets.vue";
import TicketMore from "./Tickets/TicketMore.vue";
const route = useRoute();
</script>

<template>
  <div class="right">
    <TopBar />
    <Tickets v-if="route.path === '/' || route.path === '/tickets'" />
    <Profile v-else-if="route.path === '/profile'" />
    <TicketMore v-else-if="route.path === `/tickets/${route.params.id}`" />
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
