<script setup>
import SideBar from "./SideBar.vue";
import UserPreview from "./UserPreview.vue";
</script>

<template>
  <div class="left">
    <UserPreview />
    <SideBar />
  </div>
</template>

<style scoped>
.left {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  padding-top: 30px;
  padding-bottom: 40px;
  background: #f0f1f4;
  z-index: 99;
}
</style>
