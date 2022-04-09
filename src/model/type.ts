type Nullable<T> = T | null;

export interface TagEnum {
  id: string;
  label: string;
  color: string;
}

export interface IContentItem {
  id: string;
  isHidden: boolean;
  order: number;
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
