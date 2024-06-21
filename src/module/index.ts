import { addPlugin, defineNuxtModule } from "nuxt/kit";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { PluginArgs } from "../types";

export default defineNuxtModule<PluginArgs>({
  meta: {
    name: "piwik-pro",
    configKey: "piwikPro",
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public = {
      ...nuxt.options.runtimeConfig.public,
      ...options,
    };
    addPlugin({
      src: resolve(dirname(fileURLToPath(import.meta.url)), "..", "plugin"),
      mode: "client",
      name: "piwik-pro",
    });
  },
});
