import type { DateValue } from "@internationalized/date";
import { defineStore } from "pinia";

interface IBehavior {
    label: string
    behaviors: {
        name: string
        report?: {
            shaping?: DateValue
            signal?: DateValue
            duration?: DateValue
            position?: DateValue
            distance?: DateValue
            distraction?: DateValue
            generalization?: DateValue
            mastery?: DateValue
        }
    }[]
}

export const useBehaviorStore = defineStore('behavior', () => {
    const behaviorList: globalThis.Ref<IBehavior[]> = ref([
        {
            label: 'Niveau 1',
            behaviors: [
                { 
                    name: 'Nom',
                    report: {}
                },
                { 
                    name: 'Touche',
                    report: {}
                },
                { 
                    name: 'Fini',
                    report: {}
                },
                { 
                    name: 'Assis',
                    report: {}
                },
                { 
                    name: 'À ta place',
                    report: {}
                },
                { 
                    name: 'On y va',
                    report: {}
                },
                { 
                    name: 'Olfact.REC',
                    report: {}
                },
                { 
                    name: 'Les besoins',
                    report: {}
                },
                { 
                    name: 'Couché',
                    report: {}
                },
                { 
                    name: 'À gauche',
                    report: {}
                },
                { 
                    name: 'Debout',
                    report: {}
                },
                { 
                    name: 'Viens',
                    report: {}
                },
            ]
        },
        {
            label: 'Niveau 2',
            behaviors: [
                { 
                    name: 'Olfact.DIS',
                    report: {}
                },
                { 
                    name: 'Dessous',
                    report: {}
                },
                { 
                    name: 'Poke',
                    report: {}
                },
                { 
                    name: 'Attends',
                    report: {}
                },
                { 
                    name: 'Tu laisse',
                    report: {}
                },
                { 
                    name: 'Saut Desc',
                    report: {}
                },
                { 
                    name: 'Roule',
                    report: {}
                },
                { 
                    name: 'À droite',
                    report: {}
                },
                { 
                    name: 'Recule',
                    report: {}
                },
            ]
        },
        {
            label: 'Niveau 3',
            behaviors: [
                { 
                    name: 'Alerte',
                    report: {}
                },
                { 
                    name: 'Genoux',
                    report: {}
                },
                { 
                    name: 'Va chercher de l\'aide',
                    report: {}
                },
                { 
                    name: 'Apporte',
                    report: {}
                },
                { 
                    name: 'Bouton',
                    report: {}
                },
                { 
                    name: 'Ouvre la porte',
                    report: {}
                },
                { 
                    name: 'Habille-toi',
                    report: {}
                },
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
        localStorage.setItem('behaviorList', JSON.stringify(behaviorList.value))
    }

    getLocalStorage()

    function addBehavior(payload: { label: string, behavior: string }) {
        behaviorList.value.forEach((elem) => {
            if (elem.label === payload.label) {
                if (!elem.behaviors.find((item) => item.name === payload.behavior)) {
                    elem.behaviors.push({ name: payload.behavior })
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
                const index = elem.behaviors.indexOf({ name: payload.behavior })
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

    function updateReport(payload: { 
        level: string, 
        behavior: string, 
        reportName: 'shaping' | 'signal' | 'duration' | 'position' | 'distance' | 'distraction' | 'generalization' | 'mastery',
        value: DateValue | undefined
    }) {
        const level = behaviorList.value.find((elem) => elem.label === payload.level)
        if (level) {
            const levelIndex = behaviorList.value.indexOf(level)
            if ( levelIndex > -1 ) {
                const behavior = level.behaviors.find((elem) => elem.name === payload.behavior)
                if (behavior) {
                    const behaviorIndex = level.behaviors.indexOf(behavior)
                    if ( behaviorIndex > -1 && behaviorList.value[levelIndex]?.behaviors[behaviorIndex]?.report) {
                        behaviorList.value[levelIndex].behaviors[behaviorIndex].report[payload.reportName] = payload.value
                        setLocalStorage()
                    }
                }
            }
        }
    }

    return {
        behaviorList,
        addBehavior,
        addGroup,
        getLocalStorage,
        removeBehavior,
        removeGroup,
        setLocalStorage,
        updateReport
    }
})