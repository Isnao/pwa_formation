<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'

const behaviors = useBehaviorStore()

const behavior = defineModel({
    type: String
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modelValue = shallowRef<any>([])
const modelMultiple = shallowRef(false)

function resetBehaviors() {
    modelValue.value = []
    items.forEach((parent) => parent.children?.forEach((item) => item.trailingIcon = 'i-lucide-square'))
}

defineExpose({
    resetBehaviors
})

const value = computed(() => {
    if ( Array.isArray(modelValue.value) ) {
        const parents = modelValue.value.filter((elem: TreeItem) => elem.children?.length )

        if( parents.length ) {
            const childList = parents.map((elem: TreeItem) => elem.children).flat()

            // @ts-expect-error no overload in childList.find()
            const result = [...new Set(modelValue.value.filter((elem: TreeItem) => !childList.find((elem2: TreeItem) => elem.label === elem2.label)).map((elem: TreeItem) => elem.label))]
            return result.join('/')
        }

        return modelValue.value.map((elem: TreeItem) => elem.label).join('/')
    } else {
        return modelValue.value?.label ?? ''
    }
})

function submit() {
    behavior.value = value.value
}

const items: TreeItem[] = behaviors.behaviorList.map((elem) => ({
    label: elem.label,
    children: elem.behaviors.map((behav) => ({ 
        label: behav, 
        trailingIcon: 'i-lucide-square',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onToggle: (event: any) => {
            if ( !modelMultiple.value ) {
                items.forEach((parent) => parent.children?.forEach((item) => item.trailingIcon = 'i-lucide-square'))
                if ( event.detail.isSelected ) {
                    event.detail.value.trailingIcon = 'i-lucide-square-check-big'
                }
            } else {
                event.detail.value.trailingIcon = event?.detail?.isSelected ? 'i-lucide-square-check-big' : 'i-lucide-square'
            }
        }
    }))
}))

</script>

<template>
    <UModal
        title="Choisir ses comportements" 
        description="Permet de choisir un ou plusieurs comportements à travailler durant la session"
        :ui="{ footer: 'justify-between', content: '' }"
        @after:leave="submit"
    >
        <UButton color="secondary" size="xl" class="max-w-lg text-black">
            {{ value !== '' ? value : 'Choisir ses comportements' }}
        </UButton>

        <template #body>
            <UTree v-model="modelValue" multiple :selection-behavior="modelMultiple ? 'toggle' : 'replace'" :items="items" bubble-select color="secondary" />
        </template>

        <template #footer="{ close }">
            <USwitch v-model="modelMultiple" label="Choix multiple" :ui="{ base: 'data-[state=unchecked]:bg-violet-900 data-[state=checked]:bg-lime-500' }" />
            <div class="flex gap-2">
                <UButton label="Vider" variant="ghost" color="neutral" @click="resetBehaviors" />
                <UButton label="Valider" color="neutral" @click="close" />
            </div>
        </template>
    </UModal>
</template>