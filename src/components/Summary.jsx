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
    const [tasaBolivares, setTasaBolivares] = useState(4.62)
    const [totalInBolivars, setTotalInBolivars] = useState(
        parseFloat(totalInDollars * tasaBolivares).toFixed(2)
    )

    // Re-calculate summary data anytime there's a change in [days]
    useEffect(() => {
        setSumHours(
            days.reduce((total, obj) => parseFloat(obj.hours) + total, 0)
        )
        setSumDebt(days.reduce((total, obj) => parseFloat(obj.debt) + total, 0))
        setTotalInDollars(
            days
                .reduce((total, obj) => parseFloat(obj.totalEarned) + total, 0)
                .toFixed(2)
        )
    }, [days])

    // Re-calculate total in VE Bolivars when the total in $ changes
    useEffect(() => {
        setTasaBolivares(document.getElementById('tasaBs').value)
        setTotalInBolivars(
            parseFloat(tasaBolivares * (totalInDollars - sumDebt)).toFixed(2)
        )
    }, [totalInDollars])

    const calculateBolivars = ({ target }) => {
        setTasaBolivares(target.value)
        setTotalInBolivars(
            parseFloat(target.value * (totalInDollars - sumDebt)).toFixed(2)
        )
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
                    defaultValue={tasaBolivares}
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
