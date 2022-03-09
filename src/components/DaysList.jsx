import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiTrash2, FiClock } from 'react-icons/fi'
import { WorkdaysContext } from '../context/WorkdaysContext'
import Button from '../styles/Button.styled'
import DaysListStyled from '../styles/DaysList.styled'
import TableStyled from '../styles/Table.styled'
import Navbar from './Navbar'

const DaysList = () => {
    const { days, destroy } = useContext(WorkdaysContext)

    return (
        <div className='main-container'>
            <Navbar />

            {days.length < 1 ? (
                <p>Agrega un día para hacer los cálculos</p>
            ) : (
                <DaysListStyled>
                    <AnimatePresence>
                        {days.map((day) => (
                            <motion.div
                                key={day.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <li key={day.id} id={day.id}>
                                    <div className='red-zone'>
                                        <Button
                                            inline
                                            color='danger'
                                            onClick={destroy}
                                        >
                                            <FiTrash2 />
                                        </Button>
                                        <span className='icon'>
                                            {day.debt > 0 && `-${day.debt}$`}
                                        </span>
                                        <span className='icon'>
                                            {day.break > 0 && [
                                                `-${day.break}\u00A0`,
                                                <FiClock />,
                                            ]}
                                        </span>
                                    </div>
                                    <div className='day-info'>
                                        <h5 className='date'>{day.date}</h5>
                                        <div className='times'>
                                            <TableStyled vertical>
                                                <tbody>
                                                    <tr>
                                                        <th>Entrada:</th>
                                                        <td>{day.start}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Salida:</th>
                                                        <td>{day.end}</td>
                                                    </tr>
                                                </tbody>
                                            </TableStyled>
                                        </div>
                                        <div className='total-made'>
                                            <p>{day.hours}h</p>
                                            <p className='earned'>
                                                ${day.totalEarned}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </DaysListStyled>
            )}
        </div>
    )
}

export default DaysList
