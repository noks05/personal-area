<script setup>
import { getTicketsData } from "~/fetching/getTicketsData";

const route = useRoute();
const id = route.params.id;
const ticketData = await getTicketsData(id);
</script>

<template>
  <UContainer class="max-w-80 p-0 m-0">
    <ul class="text-gray-500 dark:text-gray-400 text-sm">
      <li class="mb-4">
        <div class="truncate text-slate-800">Имя :</div>
        <div class="border p-2 rounded-md">
          {{ ticketData.name.split(" ")[0] }}
        </div>
      </li>
      <li class="mb-4">
        <div class="truncate text-slate-800">Фамилия :</div>
        <div class="border p-2 rounded-md">
          {{ ticketData.name.split(" ")[1] }}
        </div>
      </li>
      <li class="mb-4">
        <div class="truncate text-slate-800">Заголовок :</div>
        <div class="border p-2 rounded-md">{{ ticketData.username }}</div>
      </li>
      <li class="mb-4">
        <div class="truncate text-slate-800">Сообщение :</div>
        <div class="border p-2 rounded-md">
          {{ ticketData.company.catchPhrase.split(" ")[0] }}
        </div>
      </li>
      <li class="mb-4">
        <div class="truncate text-slate-800">Дата создания :</div>
        <div class="border p-2 rounded-md">
          {{
            createRandomDate(
              new Date("2023", "02", String(id % 10)),
              new Date()
            )
          }}
        </div>
      </li>
    </ul>
  </UContainer>
</template>

<style scoped></style>
