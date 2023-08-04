<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  title: String,
});

const { title } = toRefs(props);
</script>

<style scoped>
h1 {
  padding-left: 20px;
  border-left: 2px solid #2c3e50;
}
</style>
