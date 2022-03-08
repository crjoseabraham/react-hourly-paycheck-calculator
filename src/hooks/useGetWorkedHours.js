import { useState } from 'react'

export function useGetWorkedHours(start, end) {
    const [hours, setHours] = useState(
        Math.abs((end - start) / 36e5).toFixed(2)
    )

    const calculateHours = (start, end) => {
        if (end.getTime() < start.getTime()) {
            let dayPlusOne = new Date(end)
            dayPlusOne.setDate(dayPlusOne.getDate() + 1)
            setHours(
                parseFloat(Math.abs((dayPlusOne - start) / 36e5)).toFixed(2)
            )
        } else setHours(parseFloat(Math.abs((end - start) / 36e5)).toFixed(2))
    }

    return [hours, calculateHours]
}
