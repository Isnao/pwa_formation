import { defineStore } from "pinia";

interface IBehavior {
    label: string
    behaviors: string[]
}

export const useBehaviorStore = defineStore('behavior', () => {
    const behaviorList: globalThis.Ref<IBehavior[]> = ref([
        {
            label: 'Niveau 1',
            behaviors: [
                'Nom',
                'Touche',
                'Fini',
                'Assis',
                'À ta place',
                'On y va',
                'Olfact.REC',
                'Les besoins',
                'Couché',
                'À gauche',
                'Debout',
                'Viens'
            ]
        },
        {
            label: 'Niveau 2',
            behaviors: [
                'Olfact.DIS',
                'Dessous',
                'Poke',
                'Attends',
                'Tu laisse',
                'Saut Desc',
                'Roule',
                'À droite',
                'Recule'
            ]
        },
        {
            label: 'Niveau 3',
            behaviors: [
                'Alerte',
                'Genoux',
                'Va chercher de l\'aide',
                'Apporte',
                'Bouton',
                'Ouvre la porte',
                'Habille-toi'
            ]
        }
    ])

    function getLocalStorage() {
        const localStorageBehavior = localStorage.getItem('behaviorList')
        if (localStorageBehavior) {
            behaviorList.value = JSON.parse(localStorageBehavior)
        }
    }

    function setLocalStorage() {
        localStorage.setItem('behavior', JSON.stringify(behaviorList.value))
    }

    getLocalStorage()

    function addBehavior(payload: { label: string, behavior: string }) {
        behaviorList.value.forEach((elem) => {
            if (elem.label === payload.label) {
                if (!elem.behaviors.find((item) => item === payload.behavior)) {
                    elem.behaviors.push(payload.behavior)
                } else {
                    throw new Error('Behavior already exist in this group')
                }
            }
        })
        setLocalStorage()
    }

    function removeBehavior(payload: {label: string, behavior: string}) {
        behaviorList.value.forEach((elem) => {
            if (elem.label === payload.label) {
                const index = elem.behaviors.indexOf(payload.behavior)
                if (index > -1) {
                    elem.behaviors.splice(index, 1)
                } else {
                    throw new Error('Behavior not in this group')
                }
            }
        })
        setLocalStorage()
    }

    function addGroup(payload: IBehavior) {
        const alreadyExist = behaviorList.value.find((elem) => elem.label === payload.label)

        if (!alreadyExist) {
            behaviorList.value.push(payload)
        } else {
            throw new Error('Group already exist')
        }
        setLocalStorage()
    }

    function removeGroup(payload: string) {
        const exist = behaviorList.value.find((elem) => elem.label === payload)

        if (exist) {
            const index = behaviorList.value.indexOf(exist)

            if (index > -1) {
                behaviorList.value.splice(index, 1)
            }
        } else {
            throw new Error('Group not found')
        }
        setLocalStorage()
    }

    return {
        behaviorList,
        addBehavior,
        addGroup,
        getLocalStorage,
        removeBehavior,
        removeGroup,
        setLocalStorage
    }
})