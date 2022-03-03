import styled from 'styled-components'

const DaysListStyled = styled.ul`
    list-style: none;

    li {
        background-color: hsl(${({ theme }) => theme.colors.tableRowBg});
        margin-bottom: 1rem;
        border-radius: 4px;
        padding: 0.75rem 0.95rem;
        text-align: center;
        border-left: 4px solid hsl(${({ theme }) => theme.colors.primary});
        display: flex;
        justify-content: stretch;
    }

    .red-zone {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem 0;
        color: hsl(${({ theme }) => theme.colors.danger});
    }

    .day-info {
        flex: auto;
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.5rem;

        .date {
            flex: 100%;
            padding: 0.5rem 0;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
            color: hsl(${({ theme }) => theme.colors.yellow});
            text-decoration-style: underline;
        }

        .times {
            flex: auto;
            padding: 0.5rem 0.25rem;
            padding: 0.5rem 0;
            margin-left: 1.2rem;
        }

        .total-made {
            flex: 25%;
            padding: 0.5rem 0.25rem;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p.earned {
                color: hsl(${({ theme }) => theme.colors.primary});
                padding-top: 9px;
            }
        }
    }
`

export default DaysListStyled
