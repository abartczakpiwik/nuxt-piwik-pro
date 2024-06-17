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
      await callback($piwikPRO);
    }
  }
  return undefined;
};
