import styled from 'styled-components'

const Navigation = styled.nav`
    background-color: transparent;
    width: 90vw;
    max-width: 1000px;
    padding-bottom: 20px;
    position: fixed;
    bottom: 0;
    z-index: 5;

    & > * {
        float: right;
    }
`
export default Navigation
