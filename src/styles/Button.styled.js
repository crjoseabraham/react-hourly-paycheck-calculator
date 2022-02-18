import styled from 'styled-components'

const Button = styled.button`
    align-items: center;
    background-color: hsla(
        ${({ color, theme, rounded, transparent }) =>
            rounded || transparent ? '0,0%,0%,0' : `${theme.colors[color]}, 1`}
    );
    border: none;
    border-radius: 6px;
    color: hsl(
        ${({ rounded, color, theme }) =>
            rounded ? theme.colors[color] : theme.colors.text}
    );
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: ${({ small }) => (small ? '12px' : '14px')};
    padding: ${({ small }) => (small ? '0.5em' : '0.75em')};
    transition: all 0.3s ease;
    vertical-align: middle;
    ${({ transparent }) =>
        transparent &&
        `
    opacity: 0.65;`}

    &:hover {
        background-color: hsl(
            ${({ color, theme, rounded }) =>
                rounded ? theme.colors.cardBg : theme.colors[`${color}Light`]}
        );
        ${({ transparent }) => transparent && `text-decoration: underline;`}
    }

    // for rounded button
    ${(props) =>
        props.rounded &&
        `
            background-color: hsl(${({ theme }) =>
                theme.colors.bluedGray}) !important;
            color: hsl(${({ theme, color }) => theme.colors[color]});
            font-size: 1.2rem;
            padding: 0.5rem 0.65rem 0.28rem;
            border-radius: 100%;
            display: block;
            margin: 0 auto;
        `}

    // for arrow buttons
    ${(props) =>
        props.arrow &&
        `
        background: none;
        font-size: 1.8rem;
        padding: 0;
        color: hsl(${props.theme.colors.gray});
        `}



    &:focus {
        outline: none;
    }
`

export default Button
