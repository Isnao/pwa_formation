<script setup lang="ts">
import { getLocalTimeZone, today } from '@internationalized/date';

const { behaviorList, setLocalStorage, updateReport } = useBehaviorStore()
const { reportHelp } = useReportHelpStore()

const toast = useToast()
const levels = computed(() => behaviorList.filter((elem) => !!elem.behaviors[0]?.report).map((elem) => ({ label: elem.label })))

function chackboxUpdate(
    item: string,
    elem: string,
    reportName: 'shaping' | 'signal' | 'duration' | 'position' | 'distance' | 'distraction' | 'generalization' | 'mastery',
    value: boolean | 'indeterminate'
) {
    const level = behaviorList.find((el) => el.label === item)
    if (level) {
        const levelIndex = behaviorList.indexOf(level)
        const behav = level.behaviors.find((el) => el.name === elem)
        if (behav) {
            const behavIndex = level.behaviors.indexOf(behav)

            if (behaviorList[levelIndex]?.behaviors[behavIndex]?.report) {
                behaviorList[levelIndex].behaviors[behavIndex].report[reportName] = value ? today(getLocalTimeZone()) : undefined
                setLocalStorage()
            }
        }
    }
}

</script>

<template>
    <div class="flex flex-col gap-4 items-center max-w-lg w-full">
        <UTabs :items="levels" variant="link" color="success" class="w-full" :ui="{ trigger: 'data-[state=inactive]:text-neutral-500 hover:data-[state=inactive]:not-disabled:text-shadow-lg' }">
            <template #content="{ item }">
                <UTabs :items="behaviorList.find((elem) => elem.label === item.label)?.behaviors.map((behav) => ({ label: behav.name }))" variant="link" color="success" class="w-full" :ui="{ list: 'overflow-x-auto overflow-y-clip', trigger: 'min-w-fit data-[state=inactive]:text-neutral-500 hover:data-[state=inactive]:not-disabled:text-shadow-lg' }">
                    <template #content="{ item: elem }">
                        <div class="bg-primary-600 rounded-md border-primary-950 flex flex-col p-4" >
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.shaping" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'shaping', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.shaping" label="Capture/Façonnage" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'shaping', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.shaping ?? '', color: 'info' })" />
                                </div>
                            </div>
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.signal" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'signal', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.signal" label="Signal" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'signal', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.signal ?? '', color: 'info' })" />
                                </div>
                            </div>
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.duration" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'duration', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.duration" label="Durée" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'duration', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.duration ?? '', color: 'info' })" />
                                </div>
                            </div>
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.position" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'position', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.position" label="Position" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'position', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.position ?? '', color: 'info' })" />
                                </div>
                            </div>
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.distance" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'distance', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.distance" label="Distance" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'distance', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.distance ?? '', color: 'info' })" />
                                </div>
                            </div>
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.distraction" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'distraction', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.distraction" label="Distraction" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'distraction', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.distraction ?? '', color: 'info' })" />
                                </div>
                            </div>
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.generalization" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'generalization', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.generalization" label="Généralisation" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'generalization', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.generalization ?? '', color: 'info' })" />
                                </div>
                            </div>
                            <div class="flex flex-row gap-16 justify-between items-center">
                                <UCheckbox :model-value="!!behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.mastery" color="success" @update:model-value="(value) => chackboxUpdate(item.label, elem.label, 'mastery', value)" />
                                <div>
                                    <DatePickerLabel :model-value="behaviorList.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.mastery" label="Maitrise" @update:model-value="(value) => updateReport({ level: item.label, behavior: elem.label, reportName: 'mastery', value })" />
                                    <UButton icon="i-lucide-circle-help"  class="text-black bg-primary-600" @click="toast.add({ title: reportHelp.find((el) => el.label === item.label)?.behaviors.find((el) => el.name === elem.label)?.report?.mastery ?? '', color: 'info' })" />
                                </div>
                            </div>
                        </div>
                    </template>
                </UTabs>
            </template>
        </UTabs>
    </div>
</template>