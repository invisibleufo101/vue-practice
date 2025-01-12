<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>

<template>
  <!-- backtick string represents format string in JS. -->
  <!-- ${} represents whatever value is going to be in the format str -->
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>