<script setup lang="ts">
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'

const df = new DateFormatter('fr-FR', {
    dateStyle: 'medium'
})

defineEmits(['update:modelValue'])
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modelValue = defineModel<any>({})
</script>

<template>
    <UPopover>
        <UButton color="secondary" icon="i-lucide-calendar" size="xl">
            {{ modelValue ? df.format((modelValue as DateValue).toDate(getLocalTimeZone())) : 'Choisir une date' }}
        </UButton>

        <template #content>
            <UCalendar v-model="modelValue as DateValue" class="p-2" />
        </template>
    </UPopover>
</template>