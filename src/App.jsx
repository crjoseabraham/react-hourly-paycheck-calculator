import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { WorkdaysProvider } from './context/WorkdaysContext'
import { InterfaceProvider } from './context/InterfaceContext'
import { GlobalStyles, themes } from './styles/Global'
import DaysList from './components/DaysList'
import Modal from './components/Modal'
import Summary from './components/Summary'
import ThemeSwitcher from './components/ThemeSwitcher'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useEffect } from 'react'

const App = () => {
    const [savedTheme, setSavedTheme] = useLocalStorage('theme', 'light')
    const [theme, setTheme] = useState(savedTheme)

    useEffect(() => {
        setTheme(savedTheme)
    }, [savedTheme])

    return (
        <WorkdaysProvider>
            <InterfaceProvider>
                <ThemeProvider theme={themes[theme]}>
                    <GlobalStyles />
                    <Modal />
                    <Wrapper>
                        <ThemeSwitcher
                            savedTheme={savedTheme}
                            setSavedTheme={setSavedTheme}
                        />
                        <Heading>Calculadora de salario por hora</Heading>
                        <Summary />
                        <DaysList />
                    </Wrapper>
                </ThemeProvider>
            </InterfaceProvider>
        </WorkdaysProvider>
    )
}

const Wrapper = styled.div`
    margin: auto;
    width: 350px;
    padding-top: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading = styled.h1`
    font-weight: 700;
    font-size: 140%;
    color: hsl(${({ theme }) => theme.colors.primary});
    padding: 1rem 0;
`

export default App
