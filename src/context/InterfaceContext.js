import { useState, createContext } from 'react'

export const InterfaceContext = createContext()

export const InterfaceProvider = ({ children }) => {
    const [modalTitle, setModalTitle] = useState('')
    const [modalDisplay, setModalDisplay] = useState(false)

    return (
        <InterfaceContext.Provider
            value={{
                modalDisplay,
                modalTitle,
                setModalTitle,
                setModalDisplay,
            }}
        >
            {children}
        </InterfaceContext.Provider>
    )
}
