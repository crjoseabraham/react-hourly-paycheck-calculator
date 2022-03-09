import { useState, useContext } from 'react'
import { WorkdaysContext } from '../context/WorkdaysContext'

export function useSummary() {
    const { days } = useContext(WorkdaysContext)
    let sumHours = days.reduce((total, obj) => parseFloat(obj.hours) + total, 0)
    let sumDebt = days.reduce((total, obj) => parseFloat(obj.debt) + total, 0)
    let sumTotalInDollars = days
        .reduce((total, obj) => parseFloat(obj.totalEarned) + total, 0)
        .toFixed(2)

    const [hours, setHours] = useState(sumHours)
    const [debt, setDebt] = useState(sumDebt)
    const [totalInDollars, setTotalInDollars] = useState(sumTotalInDollars)

    const getSummary = (days) => {
        let sumHours = days.reduce(
            (total, obj) => parseFloat(obj.hours) + total,
            0
        )
        let sumDebt = days.reduce(
            (total, obj) => parseFloat(obj.debt) + total,
            0
        )
        let sumTotalInDollars = days
            .reduce((total, obj) => parseFloat(obj.totalEarned) + total, 0)
            .toFixed(2)

        setHours(sumHours)
        setDebt(sumDebt)
        setTotalInDollars(sumTotalInDollars)
    }

    return [hours, debt, totalInDollars, getSummary]
}
