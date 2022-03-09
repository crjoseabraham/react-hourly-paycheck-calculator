import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
    --font-body: 'Varela Round', sans-serif;
    --font-title: 'Oswald', sans-serif;

}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    font-size: 14px;
    background-color: hsl(${({ theme }) => theme.colors.bg});
    color: hsl(${({ theme }) => theme.colors.text});
    padding-bottom: 3rem;
}

hr {
    border: none;
    border-top: 1px dashed #8c8b8b;
}

.danger {
    color: hsl(${({ theme }) => theme.colors.danger});
}

.MuiInputBase-input,
form input {
    color: hsl(${({ theme }) => theme.colors.bluedGray}) !important;
    background: hsl(${({ theme }) => theme.colors.tableRowBg}) !important;
    padding: 0.5rem 0.75rem !important;
    border-radius: 3px !important;
    border: none !important;
    font-family: var(--font-body) !important;
    font-size: 1.1rem !important;
    margin-top: 0.5rem !important;
    text-align: center !important;
}

input:focus {
    outline: none;
    background: hsl(${({ theme }) => theme.colors.tableRowBgHover}) !important;
}

.MuiInput-underline::after,
.MuiInput-underline::before {
    display: none !important;
}

.main-container,
.summary {
    width: 90vw;
    max-width: 400px;
    padding: 1.2rem 1.5rem;
    background-color: hsl(${(props) => props.theme.colors.cardBg});
    border-radius: 6px;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 51%);
}
`

export const themes = {
    dark: {
        colors: {
            bg: '220, 6%, 10%',
            cardBg: '180, 6%, 14%',
            tableRowBg: '180, 5%, 16%',
            tableRowBgHover: '180, 11%, 18%',
            text: '108, 5%, 81%',
            primary: '159, 89%, 37%',
            primaryLight: '160, 91%, 44%',
            gray: '300, 0%, 43%',
            bluedGray: '240, 6%, 56%',
            danger: '4, 90%, 63%',
            yellow: '55, 18%, 51%',
        },
    },
    light: {
        colors: {
            bg: '221, 221%, 221%',
            cardBg: '0, 0%, 88%',
            tableRowBg: '167, 2%, 81%',
            tableRowBgHover: '157, 13%, 68%',
            text: '180, 5%, 16%',
            primary: '159, 89%, 37%',
            primaryLight: '160, 91%, 44%',
            danger: '4, 90%, 63%',
            gray: '300, 0%, 43%',
            bluedGray: '240, 6%, 56%',
            yellow: '55, 25%, 35%',
        },
    },
}
