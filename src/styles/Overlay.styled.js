import styled from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: hsla(${({ theme }) => theme.colors.bg}, 0.75);
    z-index: 2;
    width: 100%;
    height: 100%;
    display: ${({ show }) => (show ? 'block' : 'none')};
`

export default Overlay
