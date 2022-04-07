import { defineStore } from "pinia";
import { db } from "~/model";
import { parserContent, request } from "~/utils";
import { IContentItem } from "~/model/type";
import { mockContent } from "~/mock";

// const isMock = true;
const isMock = false;

export const getContent = isMock
  ? () => Promise.resolve(mockContent)
  : request(db.cms);

export const useStore = defineStore("store", {
  state: () => ({
    loadingCMS: 1 as number,
    rawContent: [] as any[],
    showAll: false,
  }),
  getters: {
    itemList(state): IContentItem[] {
      return parserContent(state.rawContent);
    },
  },
  actions: {
    async refreshContentList() {
      this.loadingCMS = 0;
      this.rawContent = [];
      await getContent()
        .then((res) => {
          this.rawContent = res;
          this.loadingCMS = 1;
        })
        .catch((err) => {
          console.error(err);
          this.loadingCMS = -1;
        });
    },
  },
});
