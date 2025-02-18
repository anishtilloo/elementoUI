<script lang="ts" setup>

const props = defineProps<{
    label: string;
    error: string | undefined;
    name: string;
    mandatory?: boolean;
    rows: number;
    columns?: number;
}>();

defineOptions({
    inheritAttrs: false,
});

const inputValue = defineModel({
    required: true,
    type: String,
});

</script>
<template>
    <div>
        <label :for="props.name" class="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
            {{ props.label }}
            <span v-show="props.mandatory">
                *
            </span>
        </label>
        <textarea
            type="text"
            :name="props.name"
            :id="props.name"
            v-model="inputValue"
            :rows="props.rows"
            :cols="props.columns"
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
        ></textarea>
        <p>
            <span v-show="props.error">
                {{ props.error }}
            </span>
        </p>
    </div>
</template>