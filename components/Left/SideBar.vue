<script setup></script>

<template>
  <div class="sidebar">
    <ul>
      <li>
        <a href="/profile" class="link">
          <span> Профиль </span>
        </a>
      </li>
      <li>
        <a href="tickets" class="link">
          <span> Тикеты </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.link {
  color: #707070;
  display: block;
  padding: 17px 25px;
  background-color: #f0f1f4;
}
.link:hover {
  color: #fff;
  background-color: #333;
}
</style>
