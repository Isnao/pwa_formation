<script setup lang="ts">
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date'
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const behaviorPicker = useTemplateRef('behaviorPicker')
const { addSession } = useSessionsStore()

const state = reactive({
    date: today(getLocalTimeZone()),
    behavior: '',
    objective: '',
    details: '',
    timing: undefined,
    isReached: false
})

function reset() {
    state.date = today(getLocalTimeZone())
    state.behavior = ''
    behaviorPicker.value?.resetBehaviors()
    state.objective = ''
    state.details = ''
    state.timing = undefined
    state.isReached = false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.date) errors.push({ name: 'date', message: 'Requis' })
  if (!state.behavior) errors.push({ name: 'behavior', message: 'Requis' })
  if (!state.objective) errors.push({ name: 'objective', message: 'Requis' })
  if (!state.timing && state.timing > 0) errors.push({ name: 'duree', message: 'Requis' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
    addSession({
        date: event.data.date as DateValue,
        behavior: event.data.behavior,
        objective: event.data.objective,
        details: event.data.details,
        timing: event.data.timing ?? 5,
        isReached: event.data.isReached
    })
    toast.add({ title: 'Bravo', description: 'Votre session viens d\'être enregistrer', color: 'success' })
    reset()
}
</script>

<template>
    <UForm :validate="validate" :state="state" class="flex flex-col items-center gap-6 w-full" @submit="onSubmit">
        <UFormField name="date" class="p-4" required>
            <DatePicker v-model="state.date" />
        </UFormField>
        <UFormField name="behavior" required>
            <BehaviorPicker ref="behaviorPicker" v-model="state.behavior" />
        </UFormField>
        <div class="flex flex-row justify-between gap-2 w-full max-w-lg px-8">
            <UFormField name="objective" required class="flex-1">
                <UInput v-model="state.objective" placeholder="" color="secondary" highlight size="xl" :ui="{ base: 'peer bg-primary-400 text-black', root: 'w-full' }">
                    <label class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                        <span class="inline-flex bg-primary-400 text-black px-1">Objectif</span>
                    </label>
                </UInput>
            </UFormField>
            <UButton icon="i-lucide-circle-help" @click="toast.add({ title: 'L\'objectif est le reflet de vos étapes de travail, du nombre de répétitions à réussir pour passer d\'une étape à l\'autre, des 3 D à faire évoluer … Il vous permet de recentrer votre séance au besoin.', color: 'info' })" />
        </div>
        <UFormField name="details" class="w-full max-w-lg px-8">
            <UTextarea v-model="state.details" placeholder="" autoresize :maxrows="4" color="secondary" highlight size="xl" :ui="{ base: 'peer bg-primary-400 text-black', root: 'w-full' }">
                <label class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal">
                    <span class="inline-flex bg-primary-400 text-black px-1">Remarques</span>
                </label>
            </UTextarea>
        </UFormField>
        <UFormField name="timing" required>
            <UTooltip text="Durée en minutes">
                <UInput v-model="state.timing" type="number" placeholder="" color="secondary" size="xl" highlight :ui="{ base: 'peer bg-primary-400 text-black w-40' }">
                    <label class="pointer-events-none absolute left-0 -top-2.5 text-black text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-black peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal">
                        <span class="inline-flex bg-primary-400 text-black px-1">Durée de séance</span>
                    </label>
                </UInput>
            </UTooltip>
        </UFormField>
        <UFormField name="isReached" label="Objectif validé" :ui="{ label: 'text-black' }">
            <USwitch v-model="state.isReached" placeholder="" color="success" size="xl" :ui="{ base: 'peer bg-primary-400 data-[state=unchecked]:bg-violet-900 data-[state=checked]:bg-lime-500', root: 'justify-center' }" />
        </UFormField>

        <UButton type="submit" color="secondary" size="xl" class="w-fit ">
            Enregistrer
        </UButton>
    </UForm>
</template>