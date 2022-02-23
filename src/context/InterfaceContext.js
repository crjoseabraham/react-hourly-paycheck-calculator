import { useState, createContext } from 'react'

export const InterfaceContext = createContext()

export const InterfaceProvider = ({ children }) => {
    const [modalDisplay, setModalDisplay] = useState(false)
    const [modalContent, setModalContent] = useState('AddForm')
    const [btnDisabled, setBtnDisabled] = useState(false)

    return (
        <InterfaceContext.Provider
            value={{
                modalContent,
                modalDisplay,
                btnDisabled,
                setBtnDisabled,
                setModalContent,
                setModalDisplay,
            }}
        >
            {children}
        </InterfaceContext.Provider>
    )
}
