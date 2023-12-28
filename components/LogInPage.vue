<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const passwordInputType = ref<string>("password");

const state = reactive({
  login: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.login) errors.push({ path: "login", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  console.log(event.data);
}
function showPassword() {
  const typeInput = passwordInputType.value;
  if (!typeInput) return;
  const nextTypeInput = typeInput === "password" ? "text" : "password";

  passwordInputType.value = nextTypeInput;
}
</script>

<template>
  <div class="wrapper bg-gray-100">
    <UContainer class="max-w-96 w-full p-5 border rounded-md bg-white">
      <UForm
        class="space-y-4"
        :validate="validate"
        :state="state"
        @submit="onSubmit"
      >
        <UFormGroup label="Login" name="login">
          <UInput v-model="state.login" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            v-model="state.password"
            v-bind:type="passwordInputType"
            :ui="{ icon: { trailing: { pointer: '' } } }"
          >
            <template #trailing>
              <UButton
                v-show="passwordInputType === 'password'"
                variant="link"
                icon="i-heroicons-eye"
                color="#374151"
                @click="showPassword"
              />
              <UButton
                v-show="passwordInputType === 'text'"
                variant="link"
                icon="i-heroicons-eye-slash"
                color="#374151"
                @click="showPassword"
              />
            </template>
          </UInput>
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </UContainer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
