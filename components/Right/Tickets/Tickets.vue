<script setup>
import { getTicketsData } from "../../../fetching/getTicketsData";
import { createRandomDate } from "~/utils/createRandomDate";

const columns = [
  {
    key: "id",
    label: "id",
  },
  {
    key: "author",
    label: "author",
    sortable: true,
  },
  {
    key: "title",
    label: "title",
    sortable: true,
  },
  {
    key: "message",
    label: "message",
    sortable: true,
  },
  {
    key: "date",
    label: "date",
    sortable: true,
  },

  {
    key: "more",
  },
];

function getArr() {
  return Array.from(data).map((obj, index) => ({
    author: obj.name,
    id: obj.id,
    title: obj.username,
    message: obj.company.catchPhrase,
    more: "more",
    date: String(
      createRandomDate(new Date("2023", "02", index), new Date())
    ).split("G")[0],
  }));
}
const data = await getTicketsData();
const people = [...getArr()];

// фильтр - селектор
const selectedColumns = ref([...columns]);

// пагинация
const page = ref(1);
const pageCount = 5;

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, page.value * pageCount);
});

// фильтр - по имени
const inputFilter = ref("");
const filteredRows = computed(() => {
  if (!inputFilter.value) {
    return rows.value;
  }

  return rows.value.filter(person => {
    return Object.values(person).some(value => {
      return String(value)
        .toLowerCase()
        .includes(inputFilter.value.toLowerCase());
    });
  });
});

async function goToMorePage(event) {
  const path = String(event.target.closest("tr").children[0].textContent);
  await navigateTo("/tickets/" + path);
}
</script>

<template>
  <div class="rounded-md border">
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <USelectMenu
        class="mr-4"
        v-model="selectedColumns"
        :options="columns"
        multiple
        placeholder="Колонки"
      />
      <UInput v-model="inputFilter" placeholder="Фильтровать по имени" />
    </div>

    <UTable
      :rows="filteredRows"
      :columns="selectedColumns"
      sort-asc-icon="i-heroicons-arrow-up-20-solid"
      sort-desc-icon="i-heroicons-arrow-down-20-solid"
      :sort-button="{
        icon: 'i-heroicons-sparkles-20-solid',
        color: 'primary',
        variant: 'outline',
        size: '2xs',
        square: false,
        ui: { rounded: 'rounded-full' },
      }"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Loading...',
      }"
    >
      <template #more-data="">
        <UButton color="gray" variant="solid" @click="goToMorePage"
          >Подробнее</UButton
        >
      </template>
    </UTable>

    <div
      class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
    >
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="people.length"
      />
    </div>
  </div>
</template>

<style scoped></style>
