import styled from 'styled-components'

const DaysList = styled.table`
    border-collapse: separate;
    border-spacing: 0 0.9rem;
    width: 100%;

    & td {
        padding-top: 1.2rem;
        padding-bottom: 1.3rem;
        text-align: center;

        &:first-child {
            font-size: 0.9rem;
            border-radius: 4px 0 0 4px;
            padding-left: 1.5rem;
            text-align: left;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                width: 4px;
                height: 100%;
                top: 0;
                left: 0;
                background-color: hsl(${(props) => props.theme.colors.primary});
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
        }
        &:last-child {
            border-radius: 0 4px 4px 0;
        }
    }

    & thead th {
        color: hsl(${({ theme }) => theme.colors.primaryLight});
    }

    & tbody tr {
        background-color: hsl(${(props) => props.theme.colors.tableRowBg});
        box-shadow: hsla(0, 0, 0, 0.1) 0px 10px 15px -3px,
            hsla(0, 0, 0, 0.05) 0px 4px 6px -2px;

        & td:nth-child(2),
        & td:nth-child(3) {
            font-size: 1.4rem;
            color: hsl(${({ theme }) => theme.colors.text});
            position: relative;

            &:hover {
                cursor: pointer;
                background-color: hsl(
                    ${({ theme }) => theme.colors.tableRowBgHover}
                );
            }

            & span {
                display: block;
                font-size: 0.8rem;
                color: hsl(${({ theme }) => theme.colors.bluedGray});
            }
        }
    }
`

export default DaysList
