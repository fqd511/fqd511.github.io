export const INTEGRATION_ID: string = import.meta.env.VITE_INTEGRATION_ID || "";

export const db = {
  cms: (import.meta.env.VITE_DB || "") as string,
};
