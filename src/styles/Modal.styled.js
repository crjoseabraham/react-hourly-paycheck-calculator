import styled from 'styled-components'

const ModalStyled = styled.div`
    background-color: hsl(${({ theme: { colors } }) => colors.cardBg});
    border-radius: 1%;
    color: hsl(${({ theme: { colors } }) => colors.text});
    padding: 20px 30px;
    font-size: 14px;
    width: 18rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`

export default ModalStyled
