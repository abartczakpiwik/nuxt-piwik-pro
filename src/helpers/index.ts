import * as PiwikPROServices from "@piwikpro/vue-piwik-pro";

export type PiwikPROServicesType = typeof PiwikPROServices;
export type NuxtAppWithPiwikPRO = { $piwikPRO?: PiwikPROServicesType };

export const usePiwikPro = async <T = unknown>(
  nuxtApp: NuxtAppWithPiwikPRO,
  callback: (piwikPRO: PiwikPROServicesType) => T | Promise<T>
): Promise<T | undefined> => {
  if (import.meta.client) {
    const { $piwikPRO } = nuxtApp;
    if ($piwikPRO) {
      return await callback($piwikPRO);
    }
    console.error("Piwik PRO is not injected to Nuxt App. Pass '@piwikpro/nuxt-piwik-pro' package as a Nuxt module in 'nuxt.config' file.");
  } else {
    console.warn("Piwik PRO is client only library and cannot be use in server side.");
  }
  return undefined;
};
