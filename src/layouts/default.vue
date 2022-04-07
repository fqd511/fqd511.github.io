<template>
  <main class="outside-container flex flex-col">
    <div class="container p-4 flex-grow-0">
      <TopBar />
    </div>
    <slot>Content is empty</slot>
  </main>
</template>

<script setup lang="ts">
import TopBar from "~/components/TopBar.vue";
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  margin: auto 0.5rem;
  font-size: medium;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  color: inherit;
}
.router-link-exact-active {
  font-weight: bold;
  font-size: larger;
  opacity: 100;
}
</style>
