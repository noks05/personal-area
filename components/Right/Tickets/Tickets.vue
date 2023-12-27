<script setup>
const people = [
  {
    id: 1,
    author: "Lindsay Walton",
    title: "Front-end Developer",
    message: "lindsay.walton@example.com",
    date: "Member",
    more: "43553Member",
  },
  {
    id: 2,
    author: "Courtney Henry",
    title: "Designer",
    message: "courtney.henry@example.com",
    date: "Admin",
    more: "43553Admin",
  },
  {
    id: 3,
    author: "Tom Cook",
    title: "Director of Product",
    message: "tom.cook@example.com",
    date: "Member",
    more: "43553Member",
  },
  {
    id: 4,
    author: "Whitney Francis",
    title: "Copywriter",
    message: "whitney.francis@example.com",
    date: "Admin",
    more: "43553Admin",
  },
  {
    id: 5,
    author: "Leonard Krasner",
    title: "Senior Designer",
    message: "leonard.krasner@example.com",
    date: "Owner",
    more: "43553Owner",
  },
  {
    id: 6,
    author: "Floyd Miles",
    title: "Principal Designer",
    message: "floyd.miles@example.com",
    date: "Member",
    more: "43553Member",
  },
];
const columns = [
  {
    key: "author",
    label: "author",
  },
  {
    key: "id",
    label: "id",
  },
  {
    key: "title",
    label: "title",
  },
  {
    key: "message",
    label: "message",
  },
  {
    key: "date",
    label: "date",
  },

  {
    key: "more",
    label: "more",
  },
];
</script>

<template>
  <UTable :rows="people" :columns="columns" />
</template>

<style scoped></style>
