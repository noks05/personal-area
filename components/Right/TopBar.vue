<script setup>
const authData = useAuthStore();

const route = useRoute();

function getNamePage() {
  const path = route.path;
  if (path === "/profile")
    return { img: "i-heroicons-face-smile", text: "Профиль" };
  else if (path === "/" || path === "/tickets")
    return { img: "i-heroicons-ticket", text: "Тикеты" };
  return "";
}

const links = [
  {
    label: getNamePage().text,
    icon: getNamePage().img,
  },
];

const items = [
  [
    {
      label: "admin@example.com",
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Профиль",
      icon: "i-heroicons-face-smile",
      to: "/profile",
    },
    {
      label: "Тикеты",
      icon: "i-heroicons-ticket",
      to: "/tickets",
    },
    {
      label: "Выйти",
      icon: "i-heroicons-arrow-left-on-rectangle",
      to: "/login",
      click: () => authData.setAuthState(false),
    },
  ],
];
</script>

<template>
  <div class="top-bar bg-gray-100 rounded-md">
    <UBreadcrumb :links="links" />

    <UDropdown
      :items="items"
      :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ placement: 'bottom-start' }"
    >
      <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

      <template #account="{ item }">
        <div class="text-left">
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>

        <UIcon
          :name="item.icon"
          class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
        />
      </template>
    </UDropdown>
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
}
</style>
