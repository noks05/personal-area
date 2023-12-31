<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const form = ref();
const authStore = useAuthStore();
const passwordInputType = ref<string>("password");

const state = reactive({
  login: "",
  password: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.login.trim())
    errors.push({ path: "login", message: "Поле не должно быть пустым" });
  if (!state.password.trim())
    errors.push({ path: "password", message: "Поле не должно быть пустым" });
  return errors;
};
function setError() {
  form.value.setErrors([
    { path: "password", message: "Неправильный логин или пароль" },
  ]);
}
async function onSubmit(event: FormSubmitEvent<any>) {
  const { login, password } = event.data;
  await authStore.checkAuth(login, password, setError);
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
        ref="form"
        class="space-y-4"
        :validate="validate"
        :state="state"
        @submit="onSubmit"
      >
        <UFormGroup label="Логин" name="login">
          <UInput v-model="state.login" />
        </UFormGroup>

        <UFormGroup label="Пароль" name="password">
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
                @click="showPassword"
              />
              <UButton
                v-show="passwordInputType === 'text'"
                variant="link"
                icon="i-heroicons-eye-slash"
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
