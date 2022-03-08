import React, { useContext } from 'react'
import { FiPlus } from 'react-icons/fi'
import { InterfaceContext } from '../context/InterfaceContext'
import { WorkdaysContext } from '../context/WorkdaysContext'
import Button from '../styles/Button.styled'
import Navigation from '../styles/Navigation.styled'

const Navbar = () => {
    const { setModalTitle, modalDisplay, setModalDisplay } =
        useContext(InterfaceContext)

    const { days, setDays } = useContext(WorkdaysContext)

    const displayAddForm = () => {
        setModalTitle('Agregar un día de trabajo')
        setModalDisplay(!modalDisplay)
    }

    return (
        <Navigation>
            <Button color='primary' size='large' onClick={displayAddForm}>
                <FiPlus />
                &nbsp;Agregar día
            </Button>
            {days.length > 0 && (
                <Button
                    color='danger'
                    size='large'
                    onClick={() => {
                        setDays([])
                    }}
                >
                    Limpiar
                </Button>
            )}
        </Navigation>
    )
}

export default Navbar
