<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div>
    <UButton class="m-4" label="Pages" @click="isOpen = true" />

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
          @click="isOpen = false" />
        <Navigation />
      </div>
    </USlideover>
  </div>
</template>
