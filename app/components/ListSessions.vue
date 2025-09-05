<script setup lang="ts">
import { getLocalTimeZone, DateFormatter } from '@internationalized/date'

const { export2CSV, sessionList } = useSessionsStore()

// eslint-disable-next-line @typescript-eslint/prefer-as-const
const items = ref([{ type: "label" as "label", label: 'Trier par...' }, { label:'Date (desc)', value: 'desc' }, { label: 'Date (asc)', value: 'asc' }, { label: 'Comportement', value: 'behavior' }, { label: 'Objectif', value: 'objective' }])
const value = ref('desc')
const open = ref(false)
const sessionDetail = ref(sessionList[0])

const groups = computed(() => {
    const copyList = sessionList
    const df = new DateFormatter('fr-FR', {
        dateStyle: 'medium'
    })
    return [{
        id: 'behaviors',
        label: items.value.find((elem) => typeof elem === 'object' && elem.value === value.value)?.label ?? 'Date (desc)',
        items: copyList.sort((a, b) => 
            value.value === 'objective' ? a.objective.localeCompare(b.objective) :
                value.value === 'behavior' ? a.behavior.localeCompare(b.behavior) :
                    value.value === 'asc' ? b.date.compare(a.date) : a.date.compare(b.date)
        ).map((elem) => ({
            id: elem.id,
            label: elem[value.value === 'objective' ? 'objective' : 'behavior'],
            suffix: df.format(elem.date.toDate(getLocalTimeZone())),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSelect: (e: any) => {
                sessionDetail.value = sessionList.find((child) => child.id === e.detail.value.id)
                open.value = true
            },
        }))
    }]
})
</script>

<template>
    <div class="flex flex-col gap-4 items-center max-w-lg w-full">
        <USelect 
            v-model="value"
            color="secondary"
            highlight
            :items="items"
            placeholder="Trier par..."
            size="xl"
            class="w-48"
            :ui="{ base: 'bg-primary-600 text-black', content: 'bg-primary-600 ring-primary-600', label: 'text-black', item: 'text-black' }"
        />
        <UCommandPalette
            :groups="groups"
            :fuse="{ fuseOptions: { includeMatches: true } }"
            placeholder="Rechercher une session pour plus de détails"
            :ui="{ label: 'text-black', itemLabelBase: 'text-black', item: 'data-highlighted:not-data-disabled:before:bg-primary-900/50', input: 'bg-accented rounded-md' }"
        />
        <UButton label="Exporter" color="secondary" size="xl" class="absolute bottom-4" @click="export2CSV" />
        <UModal v-model:open="open" title="Détail du comportement">
            <template #body>
                <div>
                    <div class="flex flex-row justify-between gap-4">
                        <span class="underline">Date</span>
                        <span>{{ sessionDetail?.date }}</span>
                    </div>
                    <div class="flex flex-row justify-between gap-4">
                        <span class="underline">Comportement</span>
                        <span>{{ sessionDetail?.behavior }}</span>
                    </div>
                    <div class="flex flex-row justify-between gap-4">
                        <span class="underline">Objectif</span>
                        <span>{{ sessionDetail?.objective }}</span>
                    </div>
                    <div class="flex flex-row justify-between gap-4">
                        <span class="underline">Détail</span>
                        <span>{{ sessionDetail?.details }}</span>
                    </div>
                    <div class="flex flex-row justify-between gap-4">
                        <span class="underline">Durée</span>
                        <span>{{ sessionDetail?.timing }}</span>
                    </div>
                    <div class="flex flex-row justify-between gap-4">
                        <span class="underline">Validé ?</span>
                        <span>{{ sessionDetail?.isReached ? 'OUI' : 'NON' }}</span>
                    </div>
                </div>
            </template>
        </UModal>
    </div>
</template>