<script setup lang="ts">
import TheTitle from "../components/TheTitle.vue";
</script>

<template>
  <main>
    <TheTitle title="Welcome"></TheTitle>
    <p>
      eReportCard is designed to make the management of student grades as easy
      as possible. It is your handy assistant in the world of education. Start
      using eReportCard today and experience the ease of grade management!
    </p>
    <RouterLink to="/users">Start Now</RouterLink>
  </main>
</template>

<style scoped>
p {
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 20px;
}

a {
  margin-top: 40px;
  display: block;
  background: #2c3e50;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  width: fit-content;
}
</style>
