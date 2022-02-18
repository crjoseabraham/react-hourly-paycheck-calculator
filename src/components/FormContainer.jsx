import React, { useContext } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components'
import { InterfaceContext } from '../context/InterfaceContext'
import { WorkdaysContext } from '../context/WorkdaysContext'
import Button from '../styles/Button.styled'
import DaysList from '../styles/DaysList.styled'
import InputStyled from '../styles/Input.styled'

const FormContainer = () => {
    const { days } = useContext(WorkdaysContext)
    const { setModalContent, setModalDisplay } = useContext(InterfaceContext)

    const editStart = (e) => {
        console.log('start', e.target.closest('tr'))
        setModalContent('EditForm')
        setModalDisplay(true)
    }
    const editEnd = (e) => {
        console.log('end', e.target.closest('tr'))
    }
    return (
        <Container>
            <DaysList>
                <colgroup>
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '27.5%' }} />
                    <col style={{ width: '27.5%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {days.map(({ day, start, end }, index) => (
                        <tr key={index} id={index}>
                            <td>{day}</td>
                            <td onClick={editStart}>
                                {start.hour}:{start.minutes}
                                <span>{start.period}</span>
                            </td>
                            <td onClick={editEnd}>
                                {end.hour}:{end.minutes}
                                <span>{end.period}</span>
                            </td>
                            <td>
                                <Button rounded color='danger'>
                                    <FiTrash2 />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </DaysList>
        </Container>
    )
}

const Container = styled.div`
    padding: 1.2rem 1.5rem 2rem;
    background-color: hsl(${(props) => props.theme.colors.cardBg});
    border-radius: 1%;
    box-shadow: hsla(0, 0, 0, 0.1) 0px 10px 50px;
    max-width: 800px;
`

export default FormContainer
