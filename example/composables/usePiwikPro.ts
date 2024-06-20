import { handlePiwikPRO, type PiwikPROHandler, type HandlePiwikPROReturnedType } from "@piwikpro/nuxt-piwik-pro/utils";

export const usePiwikPro = <T = unknown>(handler: PiwikPROHandler<T>): HandlePiwikPROReturnedType<T> => handlePiwikPRO(useNuxtApp(), handler);
