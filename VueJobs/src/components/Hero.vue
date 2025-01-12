<script setup>
// defineProps(): is a macro used in Vue Composition API. 
// shorthand way to define props so that data from parent component to its child can be possible.

defineProps({
  title: {
    type: String, // type declaration (String, Boolean, Array, Number, etc)
    default: 'Become a Vue Developer!', // default fallback value
  }
});

// defineProps() also returns an object that contains all the props passed to a component (parent -> child)

// const props = defineProps({
//   title: {
//     type: String,
//     default: "Become a Vue Developer!",
//   }
// });

</script>

<template>
  <section class="bg-green-700 py-20 mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          Find the Vue job that fits your skills and needs
        </p>
      </div>
    </div>
  </section>
</template>