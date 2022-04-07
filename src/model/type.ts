type Nullable<T> = T | null;
export enum TagIdEnum {
  forked = "krG?",
  part_time = "77eb608d-e1c0-466f-9c20-ed4425a3f011",
  side_project = "3b63b0f4-7cdd-4cbd-b745-652f2b6478c6",
}

export interface TagEnum {
  id: TagIdEnum;
  label: string;
  color: string;
}

export interface IContentItem {
  id: string;
  isHidden: boolean;
  link: Nullable<string>;
  label_cn: string;
  label_en: string;
  desc_cn: string;
  desc_en: string;
  thumbnail: Nullable<string>;
  thumbnail_fallback: Nullable<string>;
  deploy_hook: Nullable<string>;
  tags: TagEnum[];
}
