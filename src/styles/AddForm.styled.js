import styled from 'styled-components'

const AddFormStyled = styled.form`
    font-size: 14px;

    & fieldset {
        border: none;
        margin-top: 1rem;
        padding-bottom: 0.75rem;

        & legend {
            font-size: 0;
        }
    }

    .starting-container,
    .ending-container {
        display: grid;
        margin: 0 auto;
        grid-template-columns: 1.3fr 0.4fr 1.3fr;
        grid-template-rows: 0.5fr 2fr 0.6fr 0.9fr;
        grid-template-areas:
            'title title title'
            'hours separator minutes'
            'hoursLabel separator minutesLabel'
            'period period period';
    }
    .title {
        grid-area: title;
        padding-bottom: 1rem;
        text-align: left;
    }
    .hours {
        grid-area: hours;
    }
    .minutes {
        grid-area: minutes;
    }
    .hours,
    .minutes {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > * {
            max-width: 100px;
        }
    }
    .hoursLabel {
        grid-area: hoursLabel;
    }
    .minutesLabel {
        grid-area: minutesLabel;
    }
    .hoursLabel,
    .minutesLabel {
        font-size: 0.7rem;
        text-transform: uppercase;
        color: hsl(${({ theme }) => theme.colors.gray});
        text-align: center;
        letter-spacing: 2px;
    }

    .separator {
        grid-area: separator;
        place-self: center;
        padding: 0 0.3rem 1.8rem;
        font-size: 1.15rem;
    }
    .period {
        grid-area: period;
        position: relative;
        display: flex;
        text-align: center;
        justify-content: space-between;
        align-items: center;

        label {
            font-weight: bold;
            font-size: 12px;
            letter-spacing: 1.5px;
            padding: 0.5rem 2rem;
            width: 48%;
            border-radius: 4px;
            background-color: hsl(${({ theme }) => theme.colors.gray});
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background-color: hsl(${({ theme }) => theme.colors.bluedGray});
            }
        }

        input {
            position: absolute;
            top: -9999px;
            left: -9999px;

            &:checked + label {
                background-color: hsl(${({ theme }) => theme.colors.primary});

                &:hover {
                    background-color: hsl(
                        ${({ theme }) => theme.colors.primaryLight}
                    );
                }
            }
        }
    }

    .form-navigation {
        display: flex;
        justify-content: space-between;

        &:not(:last-child) {
            margin-right: 5px;
        }
    }
`

export default AddFormStyled
