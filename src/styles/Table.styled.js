import styled from 'styled-components'

const TableStyled = styled.table`
    width: 100%;
    text-align: ${({ vertical }) => (!vertical ? 'center' : 'left')};
    border-collapse: collapse;
    ${({ vertical }) =>
        vertical &&
        `
    font-size: 12px;
    `};

    th {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        color: hsl(${({ theme }) => theme.colors.bluedGray});
    }

    tr {
        height: 1.4rem;
    }

    tbody > tr > td {
        color: hsl(${({ theme }) => theme.colors.bluedGray});
    }

    tbody > tr > td:nth-child(2) {
        color: hsl(
            ${({ summary, theme }) =>
                summary ? theme.colors.danger : theme.colors.text}
        );
    }
    tbody > tr > td:nth-child(3) {
        color: hsl(
            ${({ summary, theme }) =>
                summary ? theme.colors.primaryLight : theme.colors.text}
        );
    }

    tbody > tr > td:nth-child(4) {
        color: hsl(
            ${({ summary, theme }) =>
                summary ? theme.colors.text : theme.colors.primary}
        );
    }

    tbody > tr > td:first-child,
    tbody > tr > td:nth-child(4) {
        font-size: ${({ summary }) => !summary && '12px'};
        line-height: ${({ summary }) => !summary && '1.1'};
    }
`

export default TableStyled
