import { InitOptions } from "@piwikpro/vue-piwik-pro";
import * as PiwikPROServices from "@piwikpro/vue-piwik-pro";

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

export type PiwikPROServicesType = typeof PiwikPROServices;
export type NuxtAppWithPiwikPRO = { $piwikPRO?: PiwikPROServicesType };

export type PiwikPROHandler<T = unknown> = (piwikPRO: PiwikPROServicesType) => T | Promise<T>;

export type HandlePiwikPROReturnedType<T = unknown> = Promise<T | undefined>;
