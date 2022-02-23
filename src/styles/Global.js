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
}

// Reset input numbers
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::-webkit-calendar-picker-indicator {
    opacity: 100;
}

.MuiInputBase-input {
    color: hsl(${({ theme }) => theme.colors.bluedGray}) !important;
    background: hsl(${({ theme }) => theme.colors.tableRowBg}) !important;
    padding: 0.5rem 0.75rem !important;
    border-radius: 5px !important;
    border: none !important;
    font-family: var(--font-body) !important;
    font-size: 14px !important;
    margin-top: 0.5rem !important;
    text-align: center !important;
}

.MuiInput-underline::after,
.MuiInput-underline::before {
    display: none !important;
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
        },
    },
    light: {
        colors: {
            bg: 'hsl(221, 221, 221)',
            text: 'hsl(34, 40, 49)',
            primary: '#F05454',
            secondary: '#30475E',
        },
    },
}
