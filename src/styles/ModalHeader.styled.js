import styled from 'styled-components'

const ModalHeaderStyled = styled.div`
    border-bottom: 1px solid hsl(${({ theme }) => theme.colors.bluedGray});
    padding: 1rem 0 0.75rem;
    position: relative;

    & .close-button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        right: -0.7rem;
        font-size: 1rem;
        color: hsl(${({ theme }) => theme.colors.bluedGray});
        z-index: 1;
        cursor: pointer;
    }
`

export default ModalHeaderStyled
