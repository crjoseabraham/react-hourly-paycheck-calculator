import styled from 'styled-components'

const FormStyled = styled.form`
    font-size: 14px;

    & fieldset {
        border: none;
        margin-top: 1rem;
        padding-bottom: 0.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        & legend {
            font-size: 0;
        }
    }

    .hours,
    .defaultFields {
        padding: 1rem 0;
        display: flex;
        gap: 5px;

        input {
            width: 100%;
            font-size: 1.1rem !important;
        }

        label[for='ratio'] {
            color: hsl(${({ theme }) => theme.colors.yellow});
        }
    }

    .hours {
        padding-top: 0;
    }

    .defaultFields input {
        color: hsl(${({ theme }) => theme.colors.gray}) !important;
    }
`

export default FormStyled
