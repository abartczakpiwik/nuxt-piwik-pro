<script setup lang="ts">
const isOpen = ref(false);
const route = useRoute();
const isNotHomePage = ref(route.path !== "/");
watch(
  () => route.path,
  (value) => (isNotHomePage.value = value !== "/")
);
</script>

<template>
  <div v-if="isNotHomePage">
    <UButton class="m-4" icon="i-heroicons-bars-3" @click="isOpen = true" />
    <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false"
        />
        <Navigation />
      </div>
    </USlideover>
  </div>
</template>
