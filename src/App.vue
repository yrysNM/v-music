<template>
  <page-template>
    <template #content>
      <router-view></router-view>
    </template>
  </page-template>
</template>

<script lang="ts">
import pageTemplate from "./template/pageTemplate.vue";

export default {
  components: {
    pageTemplate,
  },
};
</script>

<style scoped></style>
