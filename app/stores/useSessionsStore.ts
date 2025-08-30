import { defineStore } from "pinia"
import { CalendarDate, getLocalTimeZone, DateFormatter } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'

interface ISession {
    id: string
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
        const localStorageSession = localStorage.getItem('session')
        let inc = 0
        if (localStorageSession) {
            sessionList.value = JSON.parse(localStorageSession).map((elem: ISession) => ({...elem, date: new CalendarDate(elem.date.era, elem.date.year, elem.date.month, elem.date.day), id: elem.id ?? (inc++).toString()}))
        }
    }

    function setLocalStorage() {
        localStorage.setItem('session', JSON.stringify(sessionList.value))
    }

    getLocalStorage()

    function addSession(payload: Omit<ISession, 'id'>) {
        sessionList.value.push({ ...payload, id: sessionList.value.length.toString() })
        sessionList.value.sort((elemA, elemB) => elemA.date.compare(elemB.date))
        setLocalStorage()
    }

    function export2CSV() {
        const df = new DateFormatter('fr-FR', {
            dateStyle: 'medium'
        })
        const data = sessionList.value.map((elem) => `${df.format(elem.date.toDate(getLocalTimeZone()))};${elem.behavior};${elem.objective};${elem.details};${elem.timing.toString()};${elem.isReached ? 'OUI' : 'NON'}`).join('\n')
        const blob = new Blob([data], { type: 'text/csv;charset=utf-8' })
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