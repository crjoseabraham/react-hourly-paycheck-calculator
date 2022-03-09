import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Overlay from '../styles/Overlay.styled'
import ModalStyled from '../styles/Modal.styled'
import { FiX } from 'react-icons/fi'
import { InterfaceContext } from '../context/InterfaceContext'
import Form from './Form'
import ModalHeaderStyled from '../styles/ModalHeader.styled'

const Modal = () => {
    const { modalTitle, modalDisplay, setModalDisplay } =
        useContext(InterfaceContext)

    const closeModal = () => {
        setModalDisplay(false)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Overlay show={modalDisplay}>
                    <ModalStyled>
                        <ModalHeaderStyled>
                            <h3>{modalTitle}</h3>
                            <button
                                className='close-button'
                                onClick={closeModal}
                            >
                                <FiX />
                            </button>
                        </ModalHeaderStyled>
                        <Form />
                    </ModalStyled>
                </Overlay>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal
