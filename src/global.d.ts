import { NuxtAppWithPiwikPRO } from "./types";
declare global {
  interface ImportMeta {
    browser: boolean;
    client: boolean;
    dev: boolean;
    server: boolean;
    test: boolean;
  }

  function useNuxtApp(): NuxtAppWithPiwikPRO;
}
