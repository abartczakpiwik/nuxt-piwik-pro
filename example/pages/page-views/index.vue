<script setup lang="ts">
import { ref } from "vue";

const pageData = {
  title: "PageViews",
  heading: "Send page views and virtual page views",
  description: "Page views are tracked automatically but method can be invoked manually with specified parameters.",
  methods: [
    {
      method: "trackEvent",
      usage: "piwikPRO.PageViews.trackPageView(customPageTitle?: string): void",
      desc: "Tracks page view of the page that the function was run on.",
    },
  ],
};

const toastMessage = ref("");
const isToastVisible = ref(false);
const nuxtApp = useNuxtApp();

const showToast = (message: string) => {
  toastMessage.value = message;
  isToastVisible.value = true;
};
</script>

<template>
  <UContainer class="prose p-8">
    <h1>{{ pageData.title }}</h1>
    <p>{{ pageData.description }}</p>
    <h3>Methods:</h3>
    <ul>
      <li v-for="method in pageData.methods" :key="method.method">
        <h4>{{ method.method }}</h4>
        <p>{{ method.desc }}</p>
        <code class="lang-ts">{{ method.usage }}</code>
      </li>
    </ul>
    <h2>Sample usage</h2>
    <p>To see tracking methods usage please turn developers tools in your browser and track results on the console.</p>
    <p>
      You can use methods from that collection in page props for example
      <code class="lang-ts">onMounted()</code>
      (methods are invoked when the page starts) or as on example below on the button click using <code class="lang-ts">@click</code>
      prop.
    </p>
    <button
      class="btn"
      @click="
        () => {
          nuxtApp.$piwikPRO.PageViews.trackPageView('optional title from button');
          showToast('PageViews.trackPageView(\'optional title from button\')');
        }
      ">
      PageViews.trackPageView
    </button>
  </UContainer>

  <Toast :message="toastMessage" v-model="isToastVisible" />
</template>

<style scoped></style>
