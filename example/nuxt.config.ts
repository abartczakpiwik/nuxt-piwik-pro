export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    config: {
      plugins: ["@tailwindcss/typography"],
    },
  },
  modules: [
    "@nuxt/ui",
    [
      "@piwikpro/nuxt-piwik-pro",
      {
        containerId: process.env.PIWIK_PRO_CONTAINER_ID,
        containerUrl: process.env.PIWIK_PRO_CONTAINER_URL,
        nonce: process.env.PIWIK_PRO_NONCE,
        dataLayerName: process.env.PIWIK_PRO_DATA_LAYER_NAME,
      },
    ],
  ],
});
