import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import PiwikPRO, * as PiwikPROServices from "@piwikpro/vue-piwik-pro";
import { type InitOptions } from "@piwikpro/vue-piwik-pro";

declare global {
  interface ImportMeta {
    browser: boolean;
    client: boolean;
    dev: boolean;
    server: boolean;
    test: boolean;
  }
}

export type PluginArgs = {
  containerId: string;
  containerUrl: string;
} & InitOptions;

export default defineNuxtPlugin<{ piwikPRO: typeof PiwikPROServices }>({
  name: "piwik-pro",
  setup() {
    try {
      if (import.meta.client) {
        const { public: publicConfig } = useRuntimeConfig();
        const { containerId, containerUrl, nonce, dataLayerName } = publicConfig as PluginArgs;

        PiwikPRO.initialize(containerId ?? "", containerUrl ?? "", {
          nonce,
          dataLayerName,
        });
      }
    } catch (err) {
      console.error(err);
    }

    return {
      provide: {
        piwikPRO: PiwikPROServices,
      },
    };
  },
});
