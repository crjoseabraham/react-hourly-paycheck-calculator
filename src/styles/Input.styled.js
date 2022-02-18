import styled from 'styled-components'

const InputStyled = styled.input`
    // for hour/minutes inputs
    ${({ type, theme }) =>
        type === 'tel' &&
        `
            background-color: hsl(${theme.colors.tableRowBg});
            border: none;
            border-radius: 8px;
            color: hsl(${theme.colors.text});
            font-family: var(--font-title);
            text-align: right;
            font-size: 2.5rem;
            text-align:center;
            max-width: 100px;

            &:focus {
                outline: none;
            }

        `}

    // for input list
    ${({ list, theme }) =>
        list === 'weekdays' &&
        `
            background-color: hsl(${theme.colors.gray});
            border: none;
            border-radius: 4px;
            color: hsl(${theme.colors.text});
            font-family: var(--font-body);
            font-size: 14px;
            display: inline-block;
            margin: 0 auto;
            width: 100%;
            padding: 0.65rem 1rem;
            cursor: pointer;

            &::placeholder {
                color: hsl(${theme.colors.text});
            }

            &:focus {
                outline: none;
            }

            & + label {
                font-size: 0;
            }

        `}
`

export default InputStyled
