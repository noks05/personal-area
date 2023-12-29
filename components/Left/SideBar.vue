<script setup>
const links = [
  {
    label: "Профиль",
    icon: "i-heroicons-face-smile",
    to: "/profile",
  },
  {
    label: "Тикеты",
    icon: "i-heroicons-ticket",
    to: "/tickets",
  },
];
</script>

<template>
  <UVerticalNavigation :links="links" />
</template>

<style scoped></style>
