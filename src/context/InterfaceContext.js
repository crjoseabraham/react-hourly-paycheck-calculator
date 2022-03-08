import { useState, createContext } from 'react'

export const InterfaceContext = createContext()

export const InterfaceProvider = ({ children }) => {
    const [modalTitle, setModalTitle] = useState('')
    const [modalDisplay, setModalDisplay] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)

    return (
        <InterfaceContext.Provider
            value={{
                modalDisplay,
                modalTitle,
                btnDisabled,
                setModalTitle,
                setModalDisplay,
                setBtnDisabled,
            }}
        >
            {children}
        </InterfaceContext.Provider>
    )
}
