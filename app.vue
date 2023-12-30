<script setup>
import "../assets/css/main.css";
import "../assets/css/normalize.css";

// const { data } = await useFetch(
//   "https://run.mocky.io/v3/f7f63484-9aa3-4e4d-b91c-94e649ace58b"
// );
// console.log(await data.json());

// const r = await fetch("https://fakestoreapi.com/products/1")
//   .then(res => res.json())
//   .then(json => console.log(json));
</script>

<template>
  <div class="main-wrapper">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.main-wrapper {
  height: 100vh;
}
</style>
