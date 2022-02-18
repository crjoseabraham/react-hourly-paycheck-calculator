import React, { useContext } from 'react'
import { FiPlus } from 'react-icons/fi'
import { InterfaceContext } from '../context/InterfaceContext'
import Button from '../styles/Button.styled'
import Navigation from '../styles/Navigation.styled'

const Navbar = () => {
    const { setModalContent, modalDisplay, setModalDisplay } =
        useContext(InterfaceContext)

    const displayAddForm = () => {
        setModalContent('AddForm')
        setModalDisplay(!modalDisplay)
    }

    return (
        <Navigation>
            <Button color='primary' size='large' onClick={displayAddForm}>
                <FiPlus />
                &nbsp;Agregar jornada
            </Button>
        </Navigation>
    )
}

export default Navbar
