<script setup lang="ts">
const route = useRoute();
const links = [
  {
    label: "Content Tracking",
    to: "/content-tracking",
  },
  {
    label: "Cookie Management",
    to: "/cookie-management",
  },
  {
    label: "Custom Dimensions",
    to: "/custom-dimensions",
  },
  {
    label: "Custom Events",
    to: "/custom-events",
  },
  {
    label: "Download and Outlink",
    to: "/download-and-outlink",
  },
  {
    label: "E-commerce",
    to: "/ecommerce",
  },
  {
    label: "Goal Conversion",
    to: "/goal-conversion",
  },
  {
    label: "Page Views",
    to: "/page-views",
  },
  {
    label: "Site Search",
    to: "/site-search",
  },
  {
    label: "User Management",
    to: "/user-management",
  },
];
</script>

<template>
  <UVerticalNavigation :links="links" />
</template>
