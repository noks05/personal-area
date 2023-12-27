<script setup>
import "./assets/css/main.css";
import "./assets/css/normalize.css";
import Left from "./components/Left/Left.vue";
import Right from "./components/Right/Right.vue";
import LogInPage from "./components/LogInPage.vue";
</script>

<template>
  <div class="main-wrapper">
    <Left />
    <Right />
    <!-- <LogInPage /> -->
  </div>
</template>

<style scoped>
.main-wrapper {
  height: 100vh;
}
</style>
