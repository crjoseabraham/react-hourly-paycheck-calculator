import React from 'react'

const EditForm = () => {
    return (
        <form>
            <div>
                <label htmlFor='startHour'>Hour:</label>
                <input
                    type='tel'
                    id='startHour'
                    min='01'
                    max='12'
                    pattern='^[0-9]{2}$'
                    defaultValue={'01'}
                    required
                    name='startHour'
                />
                <button type='button'>+</button>
                <button type='button'>-</button>
            </div>
            <span></span>
            <div>
                <label htmlFor='startMin'>Minutes:</label>
                <input
                    type='tel'
                    id='startMin'
                    min='00'
                    max='59'
                    pattern='^[0-9]{2}$'
                    defaultValue={'00'}
                    required
                    name='startMin'
                />
                <button type='button'>+</button>
                <button type='button'>-</button>
            </div>
            <div>
                <label htmlFor='startAM'>AM</label>
                <input
                    type='radio'
                    id='startAM'
                    value='AM'
                    name='startPeriod'
                />
                <label htmlFor='startPM'>PM</label>
                <input
                    type='radio'
                    id='startPM'
                    value='PM'
                    defaultChecked
                    name='startPeriod'
                />
            </div>
        </form>
    )
}

export default EditForm
