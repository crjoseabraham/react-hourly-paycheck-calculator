import { useState } from 'react'

export function useGetWorkedHours(start, end) {
    const [hours, setHours] = useState(
        Math.abs((end - start) / 36e5).toFixed(2)
    )

    const calculate = (start, end) => {
        if (end.getTime() < start.getTime()) {
            let dayPlusOne = new Date(end)
            dayPlusOne.setDate(dayPlusOne.getDate() + 1)
            setHours(Math.abs((dayPlusOne - start) / 36e5).toFixed(2))
        } else setHours(Math.abs((end - start) / 36e5).toFixed(2))
    }

    return [hours, calculate]
}
