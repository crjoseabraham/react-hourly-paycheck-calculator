import React from 'react'
import styled from 'styled-components'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeSwitcher = ({ savedTheme, setSavedTheme }) => {
    return (
        <ToggleWrapper>
            <input
                type='checkbox'
                className='checkbox'
                id='checkbox'
                defaultChecked={savedTheme === 'light' ? false : true}
                onChange={({ target }) =>
                    target.checked
                        ? setSavedTheme('dark')
                        : setSavedTheme('light')
                }
            />
            <label htmlFor='checkbox' className='label'>
                <FiMoon className='fa-moon' />
                <FiSun className='fa-sun' />
                <div className='ball' />
            </label>
        </ToggleWrapper>
    )
}

const ToggleWrapper = styled.div`
    position: relative;
    align-self: end;
    padding-right: 2rem;

    .checkbox {
        opacity: 0;
        position: absolute;
    }

    .label {
        width: 40px;
        height: 21px;
        background-color: hsl(${({ theme }) => theme.colors.cardBg});
        display: flex;
        border-radius: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        transform: scale(1.5);
        box-shadow: 0px 0px 1px rgb(0 0 0 / 50%);
    }

    .ball {
        width: 15px;
        height: 15px;
        background-color: hsl(${({ theme }) => theme.colors.bg});
        position: absolute;
        top: 3px;
        left: 3px;
        border-radius: 50%;
        transition: transform 0.2s linear;
    }

    /*  target the elemenent after the label*/
    .checkbox:checked + .label .ball {
        transform: translateX(18px);
    }

    .fa-moon {
        color: lightsteelblue;
        font-size: 0.8rem;
    }

    .fa-sun {
        color: yellow;
        font-size: 0.8rem;
    }
`

export default ThemeSwitcher
