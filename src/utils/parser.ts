/* eslint-disable @typescript-eslint/no-explicit-any */
import { IContentItem, TagEnum } from "~/model/type";

export function parserContent(raw: any[]): IContentItem[] {
  return raw
    .map(
      (item: any) =>
        ({
          id: item.properties.Name.title[0].plain_text,
          isHidden: item.properties.hidden.checkbox,
          link: item.properties.link.url,
          order: item.properties.order.number,
          labelCn: item.properties.label_cn.rich_text[0]?.plain_text,
          labelEn: item.properties.label_en.rich_text[0]?.plain_text,
          descCn: item.properties.desc_cn.rich_text[0]?.plain_text,
          descEn: item.properties.desc_en.rich_text[0]?.plain_text,
          thumbnail: item.properties.thumbnail.url,
          thumbnailFallback: item.properties.thumbnail_fallback.url,
          deployHook: item.properties.deploy_hook.url,
          tags: item.properties.tags.multi_select.map(
            (tag: any) =>
              ({
                id: tag.id,
                label: tag.name,
                color: tag.color,
              } as TagEnum)
          ),
        } as IContentItem)
    )
    .sort((a, b) => a.order - b.order);
}
