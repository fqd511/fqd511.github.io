/* eslint-disable @typescript-eslint/no-explicit-any */
import { INTEGRATION_ID } from "~/model";

const commonOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Notion-Version": "2022-02-22",
    Authorization: `Bearer ${INTEGRATION_ID}`,
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
    ? {
        ...commonOptions,
        method,
        body: JSON.stringify(param),
      }
    : { ...commonOptions, method };
}

const prefix = import.meta.env.VITE_PROXY||process?.env.VITE_PROXY||'localhost';
export function request(
  DB_ID: string,
  param?: Record<string, unknown>
): () => Promise<any[]> {
  return () =>
    fetch(`${prefix}/databases/${DB_ID}/query`, getOption({ param }))
      .then((response) => response.json())
      .then((res: any) => {
        if (res.has_more) {
          return request(DB_ID, { start_cursor: res.next_cursor })().then(
            (nest) => res.results.concat(nest)
          );
        }
        return res.results as any[];
      });
}
