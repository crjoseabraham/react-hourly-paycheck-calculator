import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { WorkdaysContext } from '../context/WorkdaysContext'
import { useSummary } from '../hooks/useSummary'
import SummaryStyled from '../styles/Summary.styled'
import TableStyled from '../styles/Table.styled'

const Summary = () => {
    const { days } = useContext(WorkdaysContext)
    const [hours, debt, totalInDollars, getSummary] = useSummary()
    const [totalInBolivars, setTotalInBolivars] = useState(
        parseFloat(totalInDollars * 4.62).toFixed(2)
    )
    const [tasaBolivares, setTasaBolivares] = useState(4.62)

    useEffect(() => {
        getSummary(days)
    }, [days])

    useEffect(() => {
        setTasaBolivares(document.getElementById('tasaBs').value)
        setTotalInBolivars(
            parseFloat(tasaBolivares * (totalInDollars - debt)).toFixed(2)
        )
    }, [totalInDollars])

    const calculateBolivars = ({ target }) => {
        setTasaBolivares(target.value)
        setTotalInBolivars(
            parseFloat(target.value * (totalInDollars - debt)).toFixed(2)
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
                        <th>Horas Trabajadas</th>
                        <th>Deuda</th>
                        <th>Total $$</th>
                        <th>Total Bs.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{hours}</td>
                        <td>${debt}</td>
                        <td>${totalInDollars - debt}</td>
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
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
`

export default Summary
