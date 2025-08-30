<script setup lang="ts">
const props = defineProps({
    first: {
        type: String,
        required: true
    },
    second: {
        type: String,
        required: true
    },
    third: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col items-center max-w-lg w-full">
        <div class="flex flex-row justify-evenly w-full items-end">
            <span class="text-6xl text-violet-900 font-mono font-bold">{{ props.first }}</span>
            <span class="text-4xl text-blue-400 font-mono">{{ props.second }}</span>
        </div>
        <div class="text-6xl text-lime-500 self-end font-mono font-bold">
            {{ props.third }}
        </div>
    </div>
</template>