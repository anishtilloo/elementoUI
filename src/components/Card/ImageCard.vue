<script lang="ts" setup>
defineProps<{
    displayData: {
        image: string;
        title: string;
        description: string;
        link: string;
    }
}>();
</script>

<template>
    <div class="bg-black border border-white/30 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
            :src="displayData.image"
            :alt="displayData.title"
            class="w-full h-48 object-cover"
        />
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 ">
                {{ displayData.title }}
            </h3>
            <p class="mb-4">
                {{ displayData.description }}
            </p>
            <a
                :href="displayData.link"
                target="_blank"
                class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            >
                View Project
        </a>
        </div>
    </div>
</template>