import React, { useContext } from 'react'
import Overlay from '../styles/Overlay.styled'
import ModalStyled from '../styles/Modal.styled'
import { FiX } from 'react-icons/fi'
import { InterfaceContext } from '../context/InterfaceContext'
import AddForm from './AddForm'
import EditForm from './EditForm'
import ModalHeaderStyled from '../styles/ModalHeader.styled'

const Modal = () => {
    const { modalContent, modalDisplay, setModalDisplay } =
        useContext(InterfaceContext)
    let component = null
    let title = ''

    switch (modalContent) {
        case 'AddForm':
            component = <AddForm />
            title = 'Registrar un día de trabajo'
            break
        case 'EditForm':
            component = <EditForm />
            title = 'Editar hora de entrada/salida'
            break
    }

    const closeModal = () => {
        setModalDisplay(false)
    }

    return (
        <Overlay show={modalDisplay}>
            <ModalStyled>
                <ModalHeaderStyled>
                    <h3>{title}</h3>
                    <button className='close-button' onClick={closeModal}>
                        <FiX />
                    </button>
                </ModalHeaderStyled>
                {component}
            </ModalStyled>
        </Overlay>
    )
}

export default Modal
