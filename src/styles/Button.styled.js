import styled from 'styled-components'

const Button = styled.button`
    align-items: center;
    background-color: hsla(
        ${({ color, theme, inline }) =>
            inline ? '0,0%,0%,0' : `${theme.colors[color]}, 1`}
    );
    border: none;
    border-radius: 6px;
    color: hsl(
        ${({ inline, color, theme }) =>
            inline ? theme.colors[color] : theme.colors.text}
    );
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: ${({ small }) => (small ? '12px' : '14px')};
    padding: ${({ small }) => (small ? '0.5em' : '0.75em')};
    transition: all 0.3s ease;
    vertical-align: middle;

    &:hover {
        background-color: hsl(
            ${({ color, theme, inline }) =>
                inline ? theme.colors.cardBg : theme.colors[`${color}Light`]}
        );
    }

    // for rounded button
    ${({ inline }) =>
        inline &&
        `
            font-size: 1rem;
            padding: 0;
            display: inline;
            margin: 0 auto;
        `}

    &:focus {
        outline: none;
    }
`

export default Button
