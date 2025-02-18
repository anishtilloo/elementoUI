<script lang="ts" setup>
const props = defineProps<{
    text: string;
}>();
</script>
<template>
    <button
        type="submit"
        class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
        >
        {{ props.text }}
    </button>
</template>