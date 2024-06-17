<script lang="ts" setup>
import { onMounted, ref } from "vue";

import { usePiwikPro } from "@piwikpro/nuxt-piwik-pro/helpers";

const customDimValue = ref<string>("");
const toastMessage = ref("");
const isToastVisible = ref(false);

const showToast = (message: string) => {
  toastMessage.value = message;
  isToastVisible.value = true;
};

const nuxtAppContext = useNuxtApp();

const callAsyncMethods = async () => {
  usePiwikPro(nuxtAppContext, async ({ CustomDimensions }) => {
    CustomDimensions.setCustomDimensionValue(12, "value");
    const cDimValue = await CustomDimensions.getCustomDimensionValue(12);
    customDimValue.value = cDimValue ?? "";
    CustomDimensions.deleteCustomDimension("12");
  });
};

onMounted(() => {
  callAsyncMethods();
});
</script>

<template>
  <div class="prose">
    <h2>Examples results</h2>
    <div>
      <p>
        <code class="lang-ts">$piwikPRO.CustomDimensions.getCustomDimensionValue()</code> -
        {{ customDimValue }}
      </p>
    </div>
    <h2>Sample usage</h2>
    <p>To see tracking methods usage please turn developers tools in your browser and track results on the console.</p>
    <p>
      You can use methods from that collection in page props for example{' '}
      <code class="lang-ts">onMounted</code> (methods are invoked when the page starts) or as on example below on the button click using
      <code class="lang-ts">@click</code> event.
    </p>
    <button
      class="btn"
      @click="
        () => {
          nuxtAppContext.$piwikPRO.CustomDimensions.setCustomDimensionValue(12, 'value');
          showToast('CustomDimensions.setCustomDimensionValue(12, \'value\')');
        }
      ">
      CustomDimensions.setCustomDimensionValue
    </button>
    <button
      class="btn"
      @click="
        async () => {
          nuxtAppContext.$piwikPRO.CustomDimensions.getCustomDimensionValue(12);
          customDimValue = (await nuxtAppContext.$piwikPRO.CustomDimensions.getCustomDimensionValue(12)) ?? '';
          showToast('CustomDimensions.getCustomDimensionValue(12)');
        }
      ">
      CustomDimensions.getCustomDimensionValue
    </button>
    <button
      class="btn"
      @click="
        () => {
          nuxtAppContext.$piwikPRO.CustomDimensions.deleteCustomDimension('12');
          showToast('CustomDimensions.deleteCustomDimension(\'12\')');
        }
      ">
      CustomDimensions.deleteCustomDimension
    </button>
  </div>
  <Toast :message="toastMessage" v-model="isToastVisible" />
</template>
