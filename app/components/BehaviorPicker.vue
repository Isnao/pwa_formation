<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'

const behaviors = useBehaviorStore()

const behavior = defineModel({
    type: String
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modelValue = shallowRef<any>([])

function resetBehaviors() {
    modelValue.value = []
}

defineExpose({
    resetBehaviors
})

const value = computed(() => {
    const parents = modelValue.value.filter((elem: TreeItem) => elem.children?.length )

    if( parents.length ) {
        const childList = parents.map((elem: TreeItem) => elem.children).flat()

        const result = [...new Set(modelValue.value.filter((elem: TreeItem) => !childList.find((elem2: TreeItem) => elem.label === elem2.label)).map((elem: TreeItem) => elem.label))]
        return result.join('/')
    }

    return modelValue.value.map((elem: TreeItem) => elem.label).join('/')
})

function submit() {
    behavior.value = value.value
}

const items: TreeItem[] = behaviors.behaviorList.map((elem) => ({
    label: elem.label,
    children: elem.behaviors.map((behav) => ({ label: behav }))
}))

</script>

<template>
    <UModal
        title="Choisir ses comportements" 
        description="Permet de choisir un ou plusieurs comportements à travailler durant la session"
        :ui="{ footer: 'justify-end' }"
        @after:leave="submit"
    >
        <UButton color="secondary" size="xl" class="max-w-lg">
            {{ value !== '' ? value : 'Choisir ses comportements' }}
        </UButton>

        <template #body>
            <UTree v-model="modelValue" multiple :items="items" bubble-select />
        </template>

        <template #footer="{ close }">
            <UButton label="Vider" variant="ghost" @click="resetBehaviors" />
            <UButton label="Valider" color="neutral" @click="close" />
        </template>
    </UModal>
</template>