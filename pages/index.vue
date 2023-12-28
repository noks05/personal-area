<script setup>
import "../assets/css/main.css";
import "../assets/css/normalize.css";
import Left from "../components/Left/Left.vue";
import Right from "../components/Right/Right.vue";
</script>

<template>
  <div class="main-wrapper">
    <Left />
    <Right />
  </div>
</template>

<style scoped>
.main-wrapper {
  height: 100vh;
}
</style>
