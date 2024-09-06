export const INTEGRATION_ID: string = import.meta.env.VITE_INTEGRATION_ID ||process?.env.VITE_INTEGRATION_ID || "VITE_INTEGRATION_ID";

export const db = {
  cms: (import.meta.env.VITE_DB ||process?.env.VITE_DB || "VITE_DB") as string,
};
