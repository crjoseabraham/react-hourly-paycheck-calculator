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
    const [newRatio, setNewRatio] = useState(0.6)
    const [newDebt, setNewDebt] = useState(0)

    // Coming from hooks
    const [weeks, setWeeks] = useLocalStorage('weeks', '') // TODO:
    const [days, setDays] = useLocalStorage('days', '')
    const [hours, calculateHours] = useGetWorkedHours(newStart, newEnd)
    // Format options
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    // Re-calculate worked hours when start/end time changes
    useEffect(() => {
        calculateHours(newStart, newEnd)
    }, [newStart, newEnd])

    // Store a new day in the array
    const store = () => {
        const newDaysArray = [...days]

        newDaysArray.push({
            id: Date.now(),
            date: newDate.toLocaleDateString(undefined, options),
            start: format(newStart, 'HH:mm aa'),
            end: format(newEnd, 'HH:mm aa'),
            hours,
            debt: parseFloat(newDebt).toFixed(2),
            ratio: newRatio,
            break: newBreak,
            totalEarned: parseFloat(
                (hours - newBreak) * newRatio - newDebt
            ).toFixed(2),
            timestamps: {
                date: newDate.getTime(),
                start: newStart.getTime(),
                end: newEnd.getTime(),
            },
        })

        setDays(newDaysArray)
    }

    // Delete a day from the array
    const destroy = (e) => {
        let id = +e.target.closest('li').id
        let newDaysArray = days.filter((el) => el.id !== id)
        setDays(newDaysArray)
    }

    // Reset form fields
    const resetFields = () => {
        setNewDate(new Date())
        setNewStart(new Date())
        setNewEnd(new Date())
        setNewBreak(0)
        setNewRatio(0.6)
        setNewDebt(0)
    }

    return (
        <WorkdaysContext.Provider
            value={{
                days,
                newDate,
                newEnd,
                newStart,
                newBreak,
                newRatio,
                newDebt,
                setDays,
                setNewDate,
                setNewEnd,
                setNewStart,
                setNewBreak,
                setNewDebt,
                setNewRatio,
                store,
                destroy,
                resetFields,
            }}
        >
            {children}
        </WorkdaysContext.Provider>
    )
}
