import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { WorkdaysContext } from '../context/WorkdaysContext'
import SummaryStyled from '../styles/Summary.styled'
import TableStyled from '../styles/Table.styled'

const Summary = () => {
    const { days } = useContext(WorkdaysContext)

    const [sumHours, setSumHours] = useState(0)
    const [sumDebt, setSumDebt] = useState(0)
    const [totalInDollars, setTotalInDollars] = useState(0)
    const [totalInBolivars, setTotalInBolivars] = useState(0)

    // Re-calculate summary data anytime there's a change in [days]
    useEffect(() => {
        let sumHours = 0
        let sumDebt = 0
        let totalInDollars = 0
        let tasaBolivares = parseFloat(document.getElementById('tasaBs').value)

        for (const day of days) {
            sumHours += parseFloat(day.hours)
            sumDebt += parseFloat(day.debt)
            totalInDollars += parseFloat(day.totalEarned)
        }

        setSumHours(sumHours.toFixed(2))
        setSumDebt(sumDebt.toFixed(2))
        setTotalInDollars(totalInDollars.toFixed(2))
        setTotalInBolivars((totalInDollars * tasaBolivares).toFixed(2))
    }, [days])

    const calculateBolivars = ({ target }) => {
        let tasaBolivares = parseFloat(target.value)
        setTotalInBolivars((totalInDollars * tasaBolivares).toFixed(2))
    }

    return (
        <SummaryStyled className='summary'>
            <TableStyled summary='true'>
                <colgroup>
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                </colgroup>

                <thead>
                    <tr>
                        <th>Total Horas</th>
                        <th>Deuda Pagada</th>
                        <th>Total en Dólares</th>
                        <th>Total en Bs.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{sumHours}</td>
                        <td>${sumDebt}</td>
                        <td>${totalInDollars}</td>
                        <td>Bs.{totalInBolivars}</td>
                    </tr>
                </tbody>
            </TableStyled>
            <FormBs>
                <label htmlFor='tasaBs'>Tasa Bolívares:</label>
                <input
                    type='number'
                    name='tasaBs'
                    id='tasaBs'
                    defaultValue={4.5}
                    onClick={({ target }) => target.select()}
                    onChange={calculateBolivars}
                />
            </FormBs>
        </SummaryStyled>
    )
}

const FormBs = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    gap: 1rem;

    input {
        max-width: 8rem;
    }
`

export default Summary
