<template>
  <header>
    <RouterLink to="/" class="logo">eReportCard</RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/users">List Students</RouterLink>
    </nav>
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "./stores/store";

const store = useStore();

function testVault() {
  store.addGrade();
}
</script>

<style scoped>
header {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
}

.logo {
  font-weight: bold;
}

nav {
  display: flex;
  gap: 20px;
  justify-self: flex-end;
}

.content {
  padding: 15px 0px;
}
</style>
