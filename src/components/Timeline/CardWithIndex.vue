<script lang="ts" setup>
import TextCard from '../Card/TextCard.vue';

const props = defineProps<{
    title: string;
    description: string;
    years: string;
    index: number;
}>();
</script>
<template>
    <div class="mb-8 flex justify-between items-center w-full" :class="index%2===0 && 'flex-row-reverse'">
        <div class="order-1 w-5/12"></div>
        <div class="z-20 flex items-center order-1 bg-black border border-white shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-white">{{ props.index }}</h1>
        </div>
        <TextCard :title="props.title" :description="props.description" :years="props.years" />
    </div>
</template>