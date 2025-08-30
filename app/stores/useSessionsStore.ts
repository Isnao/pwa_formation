import { defineStore } from "pinia"
import { getLocalTimeZone } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'

interface ISession {
    date: DateValue
    behavior: string
    objective: string
    details: string
    timing: number
    isReached: boolean
}

export const useSessionsStore = defineStore('session', () => {
    const sessionList: globalThis.Ref<ISession[]> = ref([])

    function getLocalStorage() {
        const localStorageSession = localStorage.getItem('sessionList')
        if (localStorageSession) {
            sessionList.value = JSON.parse(localStorageSession)
        }
    }

    function setLocalStorage() {
        localStorage.setItem('session', JSON.stringify(sessionList.value))
    }

    getLocalStorage()

    function addSession(payload: ISession) {
        sessionList.value.push(payload)
        sessionList.value.sort((elemA, elemB) => elemA.date.compare(elemB.date))
        setLocalStorage()
    }

    function export2CSV() {
        const data = sessionList.value.map((elem) => `${elem.date.toDate(getLocalTimeZone())};${elem.behavior};${elem.objective};${elem.details};${elem.timing.toString()};${elem.isReached ? 'OUI' : 'NON'}`).join('\n')
        const blob = new Blob([data], { type: 'text/csv' })
        const fileURL = URL.createObjectURL(blob)
        const downloadLink = document.createElement('a')
        downloadLink.href = fileURL
        downloadLink.download = 'export_sessions.csv'
        document.body.appendChild(downloadLink)
        downloadLink.click()

        URL.revokeObjectURL(fileURL)
    }


    return {
        sessionList,
        addSession,
        getLocalStorage,
        setLocalStorage,
        export2CSV
    }
})