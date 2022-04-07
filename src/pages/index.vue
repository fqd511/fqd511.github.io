<template>
  <div
    class="flex flex-col p-x-4 overflow-y-auto overflow-x-hidden flex-grow items-center"
  >
    <Quote class="flex-grow flex-shrink" />
    <Content />
    <Footer />
  </div>
</template>

<script setup>
import Quote from "~/components/Quote.vue";
import Content from "~/components/Content.vue";
import Footer from "~/components/Footer.vue";
</script>
