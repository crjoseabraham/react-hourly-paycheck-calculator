import styled from 'styled-components'

const AddFormStyled = styled.form`
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
`

export default AddFormStyled
