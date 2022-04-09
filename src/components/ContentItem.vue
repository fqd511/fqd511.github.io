<template>
  <a
    class="block relative shadow-md hover:shadow-lg transition rounded-lg gap-2 p-4 h-32 w-72 flex items-stretch no-underline text-gray-900 dark:text-gray-200"
    :href="item?.link || undefined"
    target="_blank"
    @click="onClick"
  >
    <div
      :style="{
        background: `center/contain no-repeat url(${item.thumbnail}),center/contain no-repeat url(${item.thumbnail_fallback})`,
      }"
      class="h-28 w-28 flex-shrink-0 flex-grow-0"
    ></div>
    <div class="flex flex-col items-start gap-2 p-1">
      <span :title="isEn ? item.label_en : item.label_cn" class="font-bold">{{
        isEn ? item.label_en : item.label_cn
      }}</span>
      <span
        :title="isEn ? item.desc_en : item.desc_cn"
        class="text-opacity-80 text-xs truncate whitespace-normal"
        >{{ isEn ? item.desc_en : item.desc_cn }}</span
      >
    </div>
    <div
      class="text-white text-xs absolute rounded right-2 bottom-2 py-0.5 px-1"
      v-for="tag in item.tags"
      :key="tag.id"
      :style="{ 'background-color': tag.color }"
    >
      {{ tag.label }}
    </div>
  </a>
</template>

<script lang="ts" setup>
import { IContentItem } from "~/model/type";

const { item } = defineProps<{
  item: IContentItem;
}>();

const { locale } = useI18n();
const isEn = computed(() => locale.value === "en");

/**
 * intercept click to trigger re-deploy
 * @param e
 */
const onClick = (e: PointerEvent) => {
  // if ctrl+click || meta+click, invoke deploy hook
  if (e.metaKey || e.ctrlKey) {
    e.preventDefault();
    e.stopPropagation();
    if (!item.deploy_hook) {
      alert("There is no deploy hook binding to this one!");
    } else {
      fetch(item.deploy_hook)
        .then((res) => {
          alert(`Successfully deployed ${item.id}!`);
          console.dir(res);
        })
        .catch((err) => {
          alert(`Failed to deploy ${item.id}!`);
          console.error(err);
        });
    }
  }
};
</script>
