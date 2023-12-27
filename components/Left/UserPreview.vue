<script setup></script>

<template>
  <div class="user-preview">
    <div class="user-img">
      <img
        src="https://st3.depositphotos.com/12039478/18474/i/450/depositphotos_184748886-stock-photo-happy-young-businesswoman-relaxing-workplace.jpg"
        alt="user photo"
        height="40"
        width="40"
      />
    </div>
    <span class="user-name">Инга Лермонтова</span>
  </div>
</template>

<style scoped>
.user-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.user-img {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  padding: 5px;
  margin-bottom: 10px;
  overflow: hidden;
}
.user-img > img {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
}
</style>
