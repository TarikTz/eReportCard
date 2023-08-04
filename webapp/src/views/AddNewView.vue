<template>
  <main>
    <div class="top">
      <TheTitle title="Add new student" />
      <RouterLink to="/users">Cancel</RouterLink>
    </div>
    <div class="content">
      <form @submit.prevent="createStudent">
        <div class="form-group">
          <label for="first_name">First name</label>
          <input
            id="first_name"
            v-model="student.first_name"
            placeholder="Enter student's firstname"
          />
        </div>
        <div class="form-group">
          <label for="last_name">Last name</label>
          <input
            id="last_name"
            v-model="student.last_name"
            placeholder="Enter student's last name"
          />
        </div>
        <div class="form-group">
          <label for="ssn">Student ID</label>
          <input
            id="ssn"
            v-model="student.ssn"
            placeholder="Enter student's id"
          />
        </div>
        <span class="error" v-if="hasErrors">All fields are required</span>
        <span class="success" v-if="isAdded">Student has been added</span>
        <button type="submit">Create Student</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import { useStore } from "@/stores/store";
import axios from "axios";
import { ref } from "vue";

const store = useStore();

const student = {
  first_name: "",
  last_name: "",
  ssn: "",
};

let hasErrors = ref(false);
let isAdded = ref(false);

function getData() {
  store.listUsers();
}

async function createStudent() {
  hasErrors.value = false;
  if (!student.first_name && !student.last_name && !student.ssn) {
    hasErrors.value = true;
    isAdded.value = false;
    return;
  }

  console.log("createStudent ok");

  const res = await axios.put(
    store.api + "ledger/default/collection/default/document",
    {
      document: student,
    },
    {
      headers: {
        "X-API-Key": store.apiKey,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  hasErrors.value = false;
  isAdded.value = true;
  console.log(res.data);
}
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  display: block;
  background: #2c3e50;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  width: fit-content;
}

.error {
  font-size: 0.8rem;
  color: red;
  border: 1px solid red;
  padding: 5px;
}

.success {
  font-size: 0.8rem;
  color: green;
  border: 1px solid green;
  padding: 5px;
}

.content {
  margin-top: 40px;
}

form {
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-width: 500px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

form input {
  background: #2c3e50;
  padding: 10px;
  color: #fff;
  border: none;
}

button {
  cursor: pointer;
  display: block;
  background: #2c3e50;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  width: fit-content;
  font-weight: bold;
  border: none;
  color: #fff;
}
</style>
