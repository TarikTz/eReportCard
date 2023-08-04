<template>
  <main>
    <div class="top">
      <TheTitle title="Students" />
      <RouterLink to="/users/add-new">Add New</RouterLink>
    </div>

    <div class="content">
      <div v-for="student in store.students" class="students">
        <div v-if="student.document.ssn" class="student">
          <div>
            {{ student._id }}
          </div>
          <div>
            {{ student.document.first_name }} {{ student.document.last_name }}
          </div>
          <div>
            {{ student.document.ssn }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import { useStore } from "@/stores/store";

const store = useStore();

store.listUsers();
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

.students {
  margin-top: 40px;
}

.student {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2c3e50;
  padding: 15px 0px;
}
</style>
