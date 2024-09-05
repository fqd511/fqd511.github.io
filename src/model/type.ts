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
  labelCn: string;
  labelEn: string;
  descCn: string;
  descEn: string;
  thumbnail: Nullable<string>;
  thumbnailFallback: Nullable<string>;
  deployHook: Nullable<string>;
  tags: TagEnum[];
}
