<script setup>
import SideBar from "./SideBar.vue";
const userData = useUserDataStore();
</script>

<template>
  <div class="left">
    <div class="flex flex-col items-center mb-14">
      <UAvatar
        class="block mb-3"
        size="5xl"
        v-bind:src="userData.img"
        alt="Avatar"
      />
      <span class="font-medium text-lg text-slate-800">
        {{ userData.fullName }}
      </span>
      <span class="font-medium text-xs text-slate-500">
        Дата рождения : {{ new Date(userData.date).toDateString() }}
      </span>
      <span class="font-medium text-xs text-slate-500">
        Город : {{ userData.country }}
      </span>
    </div>
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
