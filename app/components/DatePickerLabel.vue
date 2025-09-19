<script setup lang="ts">
import { DateFormatter, getLocalTimeZone, CalendarDate, today } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'

const df = new DateFormatter('fr-FR', {
    dateStyle: 'medium'
})
const props = defineProps<{ label: string }>()
defineEmits(['update:modelValue'])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modelValue = defineModel<any>({})

const dateValue = shallowRef(modelValue.value ? new CalendarDate(modelValue.value.year, modelValue.value.month, modelValue.value.day) : today(getLocalTimeZone()))
</script>

<template>
    <UPopover>
        <UButton color="secondary" size="xl" class="text-black">
            <UFormField name="objective" required class="flex-1">
                <UInput :model-value="modelValue ? Object.hasOwn(modelValue, 'toDate') ? df.format((modelValue as DateValue).toDate(getLocalTimeZone())) : df.format((new CalendarDate(modelValue.year, modelValue.month, modelValue.day)).toDate(getLocalTimeZone())) : ''" placeholder="" color="primary" highlight size="xl" :ui="{ base: 'peer bg-primary-600 text-black', root: 'w-full' }">
                    <label class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                        <span class="inline-flex bg-primary-600 text-black px-1">{{props.label}}</span>
                    </label>
                </UInput>
            </UFormField>
        </UButton>

        <template #content>
            <UCalendar v-model="dateValue" class="p-2" @update:model-value="(val) => modelValue = dateValue" @vue:mounted="modelValue = dateValue" />
        </template>
    </UPopover>
</template>