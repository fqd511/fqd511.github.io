<template>
  <div class="flex w-full gap-3 p-4 items-center justify-center">
    <a
      href="mailto:hi@fanqidi.com"
      title="Contact me!"
      class="i-ic-baseline-mail-outline w-5 h-5"
    >
      hi@fanqidi.com
    </a>
    <a href="https://www.beian.miit.gov.cn" class="no-underline text-current"
      >粤ICP备17031034号</a
    >
    <a
      title="Subscribe to my newsletter!"
      href="https://tinyletter.com/511"
      target="_blank"
      class="i-ic-baseline-rss-feed w-5 h-5"
    ></a>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
a:focus {
  color: $primary-color;
}
</style>
