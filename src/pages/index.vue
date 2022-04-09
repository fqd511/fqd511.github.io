<template>
  <div
    class="flex no-scroll-bar flex-col p-x-4 overflow-y-auto overflow-x-hidden flex-grow items-center"
  >
    <Quote class="flex-grow flex-shrink" />
    <Loading :loading="loadingCMS" class="flex-grow">
      <Content />
    </Loading>
    <Footer />
  </div>
</template>

<script setup>
import Quote from "~/components/Quote.vue";
import Content from "~/components/Content.vue";
import Footer from "~/components/Footer.vue";
import Loading from "~/components/Loading.vue";

import { useStore } from "~/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { loadingCMS } = storeToRefs(store);
</script>
