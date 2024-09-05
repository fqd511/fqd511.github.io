<template>
  <div class="container max-w-full px-8 flex justify-center items-center">
    <div
      v-if="props.loading === 0"
      class="i-eos-icons-loading text-4xl m-2 self-start text-center"
    ></div>
    <p v-else-if="props.loading === -1" class="text-center">
      Service unavailable now
    </p>
    <slot v-else>empty content</slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: number;
}>();
</script>
