import styled from 'styled-components'

const ModalStyled = styled.div`
    background-color: hsl(${({ theme: { colors } }) => colors.cardBg});
    border-radius: 1%;
    color: hsl(${({ theme: { colors } }) => colors.text});
    padding: 20px 30px;
    font-size: 14px;
    max-width: 400px;
    position: absolute;
    top: 10%;
    left: 10%;
    //transform: translate(-50%, -50%);
    z-index: 5;
`

export default ModalStyled
