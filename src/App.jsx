import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { WorkdaysProvider } from './context/WorkdaysContext'
import { InterfaceProvider } from './context/InterfaceContext'
import { GlobalStyles, themes } from './styles/Global'
import FormContainer from './components/FormContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'

const App = () => {
    const [theme, setTheme] = useState('dark')

    return (
        <WorkdaysProvider>
            <InterfaceProvider>
                <ThemeProvider theme={themes[theme]}>
                    <GlobalStyles />
                    <Modal />
                    <Wrapper>
                        <Navbar />
                        <Heading>Calculadora de salario por hora</Heading>
                        <FormContainer />
                    </Wrapper>
                </ThemeProvider>
            </InterfaceProvider>
        </WorkdaysProvider>
    )
}

const Wrapper = styled.div`
    margin: auto;
    width: 90vw;
    max-width: 1000px;
    padding: 30px 0;
    position: relative;
`

const Heading = styled.h1`
    font-weight: 700;
    font-size: 140%;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 1.8rem;
`

export default App
