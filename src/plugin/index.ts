import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import PiwikPRO, * as PiwikPROServices from "@piwikpro/vue-piwik-pro";
import { PluginArgs, PiwikPROServicesType } from "../types";

export default defineNuxtPlugin<{ piwikPRO: PiwikPROServicesType }>({
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
