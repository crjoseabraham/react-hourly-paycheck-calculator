import { useState, useContext } from 'react'
import { WorkdaysContext } from '../context/WorkdaysContext'

export function useSummary() {
    const { days } = useContext(WorkdaysContext)
    const [hours, setHours] = useState(() =>
        days.reduce((total, obj) => parseFloat(obj.hours) + total, 0)
    )
    const [debt, setDebt] = useState(() =>
        days.reduce((total, obj) => parseFloat(obj.debt) + total, 0)
    )
    const [totalInDollars, setTotalInDollars] = useState(() =>
        days
            .reduce((total, obj) => parseFloat(obj.totalEarned) + total, 0)
            .toFixed(2)
    )

    const getSummary = (days) => {
        setHours(() =>
            days.reduce((total, obj) => parseFloat(obj.hours) + total, 0)
        )
        setDebt(() =>
            days.reduce((total, obj) => parseFloat(obj.debt) + total, 0)
        )
        setTotalInDollars(() =>
            days
                .reduce((total, obj) => parseFloat(obj.totalEarned) + total, 0)
                .toFixed(2)
        )
    }

    return [hours, debt, totalInDollars, getSummary]
}
