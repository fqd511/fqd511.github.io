<template>
  <a
    class="block relative shadow-md hover:shadow-lg transition rounded-lg gap-2 p-4 h-32 w-72 flex items-stretch no-underline text-gray-900 dark:text-gray-200"
    :href="item?.link || undefined"
    target="_blank"
    @click="onClick"
  >
    <div
      :style="{
        background: `center/contain no-repeat url(${item.thumbnail}),center/contain no-repeat url(${item.thumbnailFallback})`,
      }"
      class="h-28 w-28 flex-shrink-0 flex-grow-0"
    ></div>
    <div class="flex flex-col items-start gap-2 p-1">
      <span :title="isEn ? item.labelEn : item.labelCn" class="font-bold">{{
        isEn ? item.labelEn : item.labelCn
      }}</span>
      <span
        :title="isEn ? item.descEn : item.descCn"
        class="text-opacity-80 text-xs truncate whitespace-normal"
        >{{ isEn ? item.descEn : item.descCn }}</span
      >
    </div>
    <div
      v-for="tag in item.tags"
      :key="tag.id"
      class="text-white text-xs absolute rounded right-2 bottom-2 py-0.5 px-1"
      :style="{ 'background-color': tag.color }"
    >
      {{ tag.label }}
    </div>
  </a>
</template>

<script lang="ts" setup>
import { IContentItem } from "~/model/type";

const props = defineProps<{
  item: IContentItem;
}>();

const { locale } = useI18n();
const isEn = computed(() => locale.value === "en");

/**
 * intercept click to trigger re-deploy
 * @param e
 */
const onClick = (e: PointerEvent | MouseEvent) => {
  // if ctrl+click || meta+click, invoke deploy hook
  if (e.metaKey || e.ctrlKey) {
    e.preventDefault();
    e.stopPropagation();
    if (!props.item.deployHook) {
      alert("There is no deploy hook binding to this one!");
    } else {
      fetch(props.item.deployHook)
        .then((res) => {
          alert(`Successfully deployed ${props.item.id}!`);
          console.dir(res);
        })
        .catch((err) => {
          alert(`Failed to deploy ${props.item.id}!`);
          console.error(err);
        });
    }
  }
};
</script>
