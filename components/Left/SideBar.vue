<script setup>
const links = [
  {
    label: "Profile",
    icon: "i-heroicons-face-smile",
    to: "/profile",
  },
  {
    label: "Tickets",
    icon: "i-heroicons-ticket",
    to: "/tickets",
  },
];
</script>

<template>
  <UVerticalNavigation :links="links" />
</template>

<style scoped></style>
