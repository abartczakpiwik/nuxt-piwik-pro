<script lang="ts" setup>
import { ref } from "vue";

const pageData = {
  title: "SiteSearch",
  heading: "Site Search Service",
  description:
    "Site search tracking gives you insights into how visitors interact with the search engine on your website - what they search for and how many results they get back.",
  methods: [
    {
      method: "trackSiteSearch",
      usage:
        "$piwikPRO.SiteSearch.trackSiteSearch(keyword: string, category?: string, searchCount?: number, dimensions?: Object)",
      desc: "Tracks search requests on a website.",
    },
  ],
};

const toastMessage = ref("");
const isToastVisible = ref(false);
const { $piwikPRO } = useNuxtApp();

const showToast = (message: string) => {
  toastMessage.value = message;
  isToastVisible.value = true;
};
</script>

<template>
  <UContainer class="prose p-8">
    <article>
      <ServicesUsageExample />
      <h2>Methods</h2>
      <ul>
        <li v-for="method in pageData.methods" :key="method.method">
          <h4>{{ method.method }}</h4>
          <p>{{ method.desc }}</p>
          <code class="lang-ts">{{ method.usage }}</code>
        </li>
      </ul>
      <h2>Sample usage</h2>
      <p>
        To see tracking methods usage please turn developers tools in your
        browser and track results on the console.
      </p>
      <p>
        You can use methods from that collection in page props for example
        <code class="lang-ts">onMounted</code> (methods are invoked when the
        page starts), as on example below on the button click using
        <code class="lang-ts">@click</code>event or text input.
      </p>
      <SearchAndList />
      <div>
        <button
          class="btn"
          @click="
            () => {
              $piwikPRO.SiteSearch.trackSiteSearch('keyword', 'button', 4);
              showToast(
                'SiteSearch.trackSiteSearch(\'keyword\', \'button\', 4)'
              );
            }
          "
        >
          SiteSearch.trackSiteSearch
        </button>
      </div>
    </article>
  </UContainer>
  <Toast v-model="isToastVisible" :message="toastMessage" />
</template>
