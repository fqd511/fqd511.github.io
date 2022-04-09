<template>
  <div
    class="no-scroll-bar overflow-auto container flex-grow flex flex-wrap sm:w-88 sm:gap-4 md:w-176 gap-6 py-6 justify-start mx-auto max-w-3xl content"
  >
    <ContentItem
      v-for="item in store.itemList"
      v-show="!item.isHidden || store.showAll"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "~/store";
import ContentItem from "~/components/ContentItem.vue";

const store = useStore();
</script>
