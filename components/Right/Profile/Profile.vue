<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
const photo = ref("");
const photoUser = reactive({ photo });

function handlerChange(event) {
  photoUser.photo = URL.createObjectURL(event.target.files[0]);
}
</script>

<template>
  <div>
    <form class="form">
      <div class="mb-3">
        <img
          class="user-img"
          v-bind:src="photoUser.photo"
          alt="user photo"
          width="300"
          height="300"
        />
        <input
          class="form-control"
          type="file"
          accept="image/*"
          @change="handlerChange"
        />
      </div>

      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">name</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="name"
        />
      </div>

      <div class="mb-3">
        <label for="formGroupExampleInput3" class="form-label">last-name</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput3"
          placeholder="last name"
        />
      </div>

      <div class="mb-3">
        <label for="formGroupExampleInput4" class="form-label">last-name</label>
        <select
          class="form-select"
          id="formGroupExampleInput4"
          aria-label=".form-select-lg example"
          name="town"
        >
          <option selected>Open this select menu</option>
          <option value="1">Moscow</option>
          <option value="2">Cheljabinsk</option>
          <option value="3">Penza</option>
        </select>
      </div>

      <div class="date-picker">
        <VueDatePicker v-model="date"></VueDatePicker>
      </div>
      <button class="btn btn-primary" type="submit">Save</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  max-width: 300px;
}
.user-img {
  object-fit: contain;
}
.date-picker {
  margin-bottom: 10px;
}
</style>
