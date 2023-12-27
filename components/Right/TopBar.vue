<script setup></script>

<template>
  <div class="top-bar">
    <h5 class="name-page">Profile</h5>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle user-img"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://st3.depositphotos.com/12039478/18474/i/450/depositphotos_184748886-stock-photo-happy-young-businesswoman-relaxing-workplace.jpg"
          alt="user photo"
          height="40"
          width="40"
        />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-item" href="#">Tickets</a></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  padding: 10px 20px;
  background: #f0f1f4;
}
.user-img {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 0;
  overflow: hidden;
}
.user-img > img {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
}
</style>
