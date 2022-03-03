import { format } from 'date-fns'
import { useState, useEffect, createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useGetWorkedHours } from '../hooks/useGetWorkedHours'

export const WorkdaysContext = createContext()

export const WorkdaysProvider = ({ children }) => {
    const [newDate, setNewDate] = useState(new Date())
    const [newStart, setNewStart] = useState(new Date())
    const [newEnd, setNewEnd] = useState(new Date())
    const [newBreak, setNewBreak] = useState(0)

    const [weeks, setWeeks] = useLocalStorage('weeks', '')
    const [days, setDays] = useLocalStorage('days', '')
    const [hours, calculate] = useGetWorkedHours(newStart, newEnd)

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    // TODO: show(), edit(), update()
    /**
        TODO: create weeks array
        weeks = {
            5: [
                {dia 1},
                {dia 2},
                {dia 3}
            ],
            6: [
                {dia 1},
                {dia 2},
                {dia 3}
            ],
        }
    */

    useEffect(() => {
        calculate(newStart, newEnd)
    }, [newStart, newEnd])

    const store = (form) => {
        const newDaysArray = [...days]

        newDaysArray.push({
            date: newDate.toLocaleDateString(undefined, options),
            start: format(newStart, 'HH:mm aa'),
            end: format(newEnd, 'HH:mm aa'),
            hours,
            debt: parseFloat(form.get('debt')).toFixed(2),
            ratio: parseFloat(form.get('ratio')).toFixed(2),
            break: newBreak,
            totalEarned: parseFloat(
                (hours - newBreak) * parseFloat(form.get('ratio'))
            ).toFixed(2),
            timestamps: {
                date: newDate.getTime(),
                start: newStart.getTime(),
                end: newEnd.getTime(),
            },
        })

        setDays(newDaysArray)
    }

    const destroy = (e) => {
        let id = +e.target.closest('li').id
        let newDaysArray = days.filter((el) => days.indexOf(el) !== id)
        setDays(newDaysArray)
    }

    const resetFields = () => {
        setNewDate(new Date())
        setNewStart(new Date())
        setNewEnd(new Date())
    }

    return (
        <WorkdaysContext.Provider
            value={{
                days,
                newDate,
                newEnd,
                newStart,
                destroy,
                resetFields,
                setDays,
                setNewDate,
                setNewEnd,
                setNewStart,
                store,
            }}
        >
            {children}
        </WorkdaysContext.Provider>
    )
}
