import { useState, createContext } from 'react'

export const WorkdaysContext = createContext()

export const WorkdaysProvider = ({ children }) => {
    const [days, setDays] = useState([
        {
            day: 'Jueves',
            start: {
                hour: '06',
                minutes: '00',
                period: 'PM',
            },
            end: {
                hour: '11',
                minutes: '00',
                period: 'PM',
            },
        },
        {
            day: 'Viernes',
            start: {
                hour: '06',
                minutes: '00',
                period: 'PM',
            },
            end: {
                hour: '12',
                minutes: '00',
                period: 'AM',
            },
        },
    ])
    const [newWorkingDay, setNewWorkingDay] = useState(new Date())

    const weekdays = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
    ]

    return (
        <WorkdaysContext.Provider
            value={{
                days,
                weekdays,
                newWorkingDay,
                setDays,
                setNewWorkingDay,
            }}
        >
            {children}
        </WorkdaysContext.Provider>
    )
}
