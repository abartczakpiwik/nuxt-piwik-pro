import * as PiwikPROServices from "@piwikpro/vue-piwik-pro";

export type PiwikPROServicesType = typeof PiwikPROServices;
export type NuxtAppWithPiwikPRO = { $piwikPRO?: PiwikPROServicesType };
export type PiwikPROHandler<T = unknown> = (piwikPRO: PiwikPROServicesType) => T | Promise<T>;
export type HandlePiwikPROReturnedType<T = unknown> = Promise<T | undefined>;

export const handlePiwikPRO = async <T = unknown>(nuxtApp: NuxtAppWithPiwikPRO, handler: PiwikPROHandler<T>): HandlePiwikPROReturnedType<T> => {
  if (import.meta.client) {
    const { $piwikPRO } = nuxtApp;
    if ($piwikPRO) {
      return await handler($piwikPRO);
    }
    console.error("Piwik PRO is not injected to Nuxt App. Pass '@piwikpro/nuxt-piwik-pro' package as a Nuxt module in 'nuxt.config' file.");
  } else {
    console.warn("Piwik PRO is client only library and cannot be use in server side.");
  }
  return undefined;
};
