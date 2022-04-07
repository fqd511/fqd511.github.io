<template>
  <Default>
    <router-view />
  </Default>
</template>
<script setup lang="ts">
import Default from "~/layouts/default.vue";
import { useStore } from "~/store";

const store = useStore();
store.refreshContentList();
</script>
