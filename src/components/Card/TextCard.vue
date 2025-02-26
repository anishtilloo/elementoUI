<script lang="ts" setup>
const props = defineProps<{
    title: string;
    description: string;
    years: string;
}>();
</script>
<template>
    <div class="card order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">{{ props.title }}</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900">
            {{ props.description }}
        </p>
        <span class="text-sm text-gray-500">{{ props.years }}</span>
    </div>
</template>
<style scoped>
/* .card:hover {

} */
</style>