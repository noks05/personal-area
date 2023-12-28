<script setup lang="ts">
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import type { FormError, FormSubmitEvent } from "#ui/types";

const photo = ref("");
const photoUser = reactive({ photo });
function handlerChange(event: any) {
  photoUser.photo = URL.createObjectURL(event.target.files[0]);
}
const countries = [
  "Москва",
  "Новосибирск",
  "Пенза",
  "Волгоград",
  "Калининград",
];
const country = ref(countries[0]);
const date = ref();

const state = reactive({
  file: undefined,
  name: undefined,
  lastName: undefined,
  country: country,
  date: date,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: "name", message: "Required" });
  if (!state.lastName) errors.push({ path: "lastName", message: "Required" });
  if (!state.country) errors.push({ path: "country", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  console.log(event.data);
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
          v-bind:src="photoUser.photo"
          alt="Avatar"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-md',
          }"
          size="6xl"
          v-if="photoUser.photo.length"
        />
        <UIcon
          name="i-lets-icons-user-scan-light"
          dynamic
          class="size-40"
          v-else
        />

        <UInput
          v-model="state.file"
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
      <USelect v-model="state.country" :options="countries" />
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
