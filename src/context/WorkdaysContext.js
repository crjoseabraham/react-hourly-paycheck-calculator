import { format } from 'date-fns'
import { useState, createContext } from 'react'

export const WorkdaysContext = createContext()

export const WorkdaysProvider = ({ children }) => {
    const [days, setDays] = useState([
        {
            date: format(new Date(), "eeee',' dd MMM"),
            start: format(new Date(), 'yyyy-MM-dd HH:mm aa'),
            end: format(new Date(), 'yyyy-MM-dd HH:mm aa'),
            timestamps: {
                date: new Date().getDay(),
                start: new Date().getTime(),
                end: new Date().getTime(),
            },
        },
        {
            date: format(new Date(), "eeee',' dd MMM"),
            start: format(new Date(), 'yyyy-MM-dd HH:mm aa'),
            end: format(new Date(), 'yyyy-MM-dd HH:mm aa'),
            timestamps: {
                date: new Date().getDay(),
                start: new Date().getTime(),
                end: new Date().getTime(),
            },
        },
    ])
    const [newDate, setNewDate] = useState(new Date())
    const [newStart, setNewStart] = useState(new Date())
    const [newEnd, setNewEnd] = useState(new Date())

    const store = (modifiedEndDate) => {
        const newDaysArray = [...days]

        newDaysArray.push({
            date: format(newDate, "eeee',' dd MMM"),
            start: format(newStart, 'yyyy-MM-dd HH:mm aa'),
            end: format(
                modifiedEndDate ? modifiedEndDate : newEnd,
                'yyyy-MM-dd HH:mm aa'
            ),

            timestamps: {
                date: newDate.getTime(),
                start: newStart.getTime(),
                end: newEnd.getTime(),
            },
        })

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
