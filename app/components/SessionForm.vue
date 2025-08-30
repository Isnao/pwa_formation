<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date';

const date = shallowRef(today(getLocalTimeZone()))
const behavior = shallowRef('')

</script>

<template>
    <div class="flex flex-col gap-6">
        <DatePicker v-model="date" @update:model-value="(date) => console.log(date)" />
        <BehaviorPicker v-model="behavior" @update:model-value="(behavior) => console.log(behavior)" />
    </div>
</template>