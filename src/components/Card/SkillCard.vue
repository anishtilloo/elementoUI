<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps({
  skillInitials: {
    type: String,
  },
  skillName: {
    type: String,
  },
  proficiency: {
    type: Number,
    validator(value: number) {
      return value < 100 && value > -1;
    },
  }, 
  initialsAndBarColor: {
    type: String,
  },
});

const skillInitialsColor = computed(() => {
  return `bg-${props.initialsAndBarColor}-500`;
})

</script>
<template>
    <div class="bg-black rounded-lg shadow p-6 w-56">
        <div class="flex items-center mb-4">
          <div :class="skillInitialsColor" class="w-12 h-12 rounded-full flex items-center justify-center text-black mr-4">
            <span class="text-xl font-bold">{{ props.skillInitials }}</span>
          </div>
          <h3 class="text-xl font-semibold">{{ skillName }}</h3>
        </div>
        <progress id="jsSkill" :class="skillInitialsColor" class="w-full h-4 rounded-full" max="100" :value="props.proficiency">{{ props.proficiency }}%</progress>
        <p class="text-sm text-gray-100 mt-2">{{ proficiency }}% proficiency</p>
      </div>
</template>