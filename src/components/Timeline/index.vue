<script lang="ts" setup>
import TimelineCardWithIndex  from "./CardWithIndex.vue";
import type { CardInformation } from "@/types/timeline.types";

const props = defineProps<{
    cardInformation: CardInformation[];
}>();
</script>
<template>
    <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
        <template v-for="cardInfo in props.cardInformation" :key="cardInformation.index">
            <TimelineCardWithIndex :index="cardInfo.index" :title="cardInfo.title" :description="cardInfo.description" :years="cardInfo.years" />
        </template>
    </div>
</template>