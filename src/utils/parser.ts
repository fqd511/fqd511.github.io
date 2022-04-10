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
          labelCn: item.properties.labelCn.rich_text[0]?.plain_text,
          labelEn: item.properties.labelEn.rich_text[0]?.plain_text,
          descCn: item.properties.descCn.rich_text[0]?.plain_text,
          descEn: item.properties.descEn.rich_text[0]?.plain_text,
          thumbnail: item.properties.thumbnail.url,
          thumbnailFallback: item.properties.thumbnailFallback.url,
          deployHook: item.properties.deployHook.url,
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
