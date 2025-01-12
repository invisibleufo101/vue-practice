<script setup>
import { ref, computed } from "vue";

// get "job" object that has been passed from its parent class "JobListing"
const props = defineProps({
  job: Object
});

const isDescriptionFull = ref(false); 

// function to toggle from truncated description to full description
// just like Youtube's description page.
const toggleDescription = () => {
  isDescriptionFull.value = !isDescriptionFull.value;
};

const jobListDescription = computed(() => {
  let description = props.job.description;
  // variables values stored in ref() must be accessed by .value
  if (!isDescriptionFull.value) {
    description = description.substring(0, 90) + "..."; // truncate description til the 89th char with elipses attached (...)
  } 
  return description;
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>
      <div class="mb-5">
        <div>
          {{ jobListDescription }}
        </div>

        <!-- @click directive for toggling description -->
        <button type="button" @click="toggleDescription" class="text-green-500 hover:text-green-600 mb-5">
          <!-- Button's text changes depending on the state of "isDescriptionFull" -->
          {{ isDescriptionFull ? "Less" : "More" }}
        </button>
      </div>
      <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>
      <div class="border border-gray-100 mb-5"></div>
      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ job.location }}
        </div>
        <RouterLink 
          :to="`/jobs/${job.id}`" 
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>