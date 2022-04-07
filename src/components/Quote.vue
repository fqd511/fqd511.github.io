<template>
  <figure class="quote p-6 max-w-3xl m-auto leading-8 flex flex-col">
    <blockquote
      class="m-0"
      cite="https://en.wikipedia.org/wiki/Finite_and_Infinite_Games"
    >
      <p>
        There are at least two kinds of games. One could be called finite, the
        other, infinite. A finite game is played for the purpose of winning, an
        infinite game for the purpose of continuing the play.
      </p>
    </blockquote>
    <figcaption class="text-right">
      <span>—James P. Carse, </span>
      <cite>Finite and Infinite Games</cite>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import TypeIt from "typeit";

onMounted(() => {
  // @ts-ignore
  new TypeIt(".quote", {
    speed: 80,
    waitUntilVisible: true,
    cursor: false,
  }).go();
});
</script>
<style lang="scss" scoped>
figure.quote::before {
  height: 0;
}
</style>
