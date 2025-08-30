<script setup lang="ts">
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'

const df = new DateFormatter('fr-FR', {
    dateStyle: 'medium'
})

defineEmits(['update:modelValue'])
const modelValue = defineModel<DateValue>({})
</script>

<template>
    <UPopover>
        <UButton color="secondary" icon="i-lucide-calendar">
            {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Choisir une date' }}
        </UButton>

        <template #content>
            <UCalendar v-model="modelValue" class="p-2" />
        </template>
    </UPopover>
</template>