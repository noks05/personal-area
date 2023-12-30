<script setup lang="ts">
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import type { FormError, FormSubmitEvent } from "#ui/types";
import { useUserDataStore } from "~/stores/useUserDataStore";
import "@vuepic/vue-datepicker/dist/main.css";

const userData = useUserDataStore();

// const photo = ref("");
// const photoUser = reactive({ photo });
// photoUser.photo = userData.img;

const countries = [
  {
    name: "Москва",
    value: "MS",
  },
  {
    name: "Новосибирск",
    value: "NB",
  },
  {
    name: "Волгоград",
    value: "VR",
  },
  {
    name: "Калининград",
    value: "KR",
  },
  {
    name: "Пенза",
    value: "PZ",
  },
];
function getFindObj(str: string, key: string) {
  return countries.find(
    (obj: any) => String(obj[key]).toLowerCase() === String(str).toLowerCase()
  );
}
const findCountry = getFindObj(userData.country, "name")?.value;
const country = ref(findCountry || countries[0].name);

const state = reactive({
  img: userData.img,
  name: userData.fullName.split(" ")[0],
  lastName: userData.fullName.split(" ")[1],
  country: country,
  date: userData.date,
});
function handlerChange(event: any) {
  state.img = URL.createObjectURL(event.target.files[0]);
}

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: "name", message: "Required" });
  if (!state.lastName) errors.push({ path: "lastName", message: "Required" });
  if (!state.country) errors.push({ path: "country", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  const dataForm = {
    img: event.data.img,
    fullName: event.data.name + " " + event.data.lastName,
    country: getFindObj(event.data.country, "value")?.name,
    date: String(event.data.date),
  };
  userData.setUserData(dataForm);
}
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4 max-w-80"
    @submit="onSubmit"
  >
    <UFormGroup label="File" name="file">
      <label class="wrap-user-photo">
        <UAvatar
          v-bind:src="state.img"
          alt="Avatar"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-md',
          }"
          size="6xl"
          v-if="state.img.length"
        />
        <UIcon
          name="i-lets-icons-user-scan-light"
          dynamic
          class="size-40"
          v-else
        />

        <UInput
          accept="image/*"
          class="hidden"
          type="file"
          @change="handlerChange"
        />
      </label>
    </UFormGroup>

    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" type="text" />
    </UFormGroup>

    <UFormGroup label="Last Name" name="lastName">
      <UInput v-model="state.lastName" type="text" />
    </UFormGroup>

    <UFormGroup label="Country" name="country">
      <USelect
        v-model="state.country"
        :options="countries"
        option-attribute="name"
      />
    </UFormGroup>

    <UFormGroup label="Date" name="date">
      <VueDatePicker v-model="state.date"></VueDatePicker>
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

<style scoped>
.wrap-user-photo {
  cursor: pointer;
}
</style>
