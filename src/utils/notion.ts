import { integration_id } from "~/model";

const commonOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Notion-Version": "2022-02-22",
    Authorization: `Bearer ${integration_id}`,
  },
};

function getOption({
  method = "POST",
  param,
}: {
  method?: string;
  param?: Record<string, unknown>;
}) {
  return param
    ? Object.assign(
        {},
        { ...commonOptions, method },
        { body: JSON.stringify(param) }
      )
    : { ...commonOptions, method };
}

export function request(
  db_id: string,
  param?: Record<string, unknown>
): () => Promise<any[]> {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://proxy.fanqidi.com/notion/v1"
      : "";
  return () =>
    fetch(`${prefix}/databases/${db_id}/query`, getOption({ param }))
      .then((response) => response.json())
      .then((res: any) => {
        if (res.has_more) {
          return request(db_id, { start_cursor: res.next_cursor })().then(
            (nest) => res.results.concat(nest)
          );
        } else {
          return res.results as any[];
        }
      });
}
