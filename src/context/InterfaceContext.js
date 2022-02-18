import { useState, createContext } from 'react'

export const InterfaceContext = createContext()

export const InterfaceProvider = ({ children }) => {
    const [modalDisplay, setModalDisplay] = useState(true)
    const [modalContent, setModalContent] = useState('AddForm')
    const [formPage, setFormPage] = useState(1)
    const [btnDisabled, setBtnDisabled] = useState(false)

    return (
        <InterfaceContext.Provider
            value={{
                formPage,
                modalContent,
                modalDisplay,
                btnDisabled,
                setBtnDisabled,
                setFormPage,
                setModalContent,
                setModalDisplay,
            }}
        >
            {children}
        </InterfaceContext.Provider>
    )
}
