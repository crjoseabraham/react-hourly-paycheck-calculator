import React, { useContext } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import Button from '../styles/Button.styled'
import { WorkdaysContext } from '../context/WorkdaysContext'
import AddFormStyled from '../styles/AddForm.styled'
import InputStyled from '../styles/Input.styled'
import { InterfaceContext } from '../context/InterfaceContext'
import { DatePicker } from '@material-ui/pickers'

const AddForm = () => {
    const { formPage, setFormPage } = useContext(InterfaceContext)
    const { weekdays, newWorkingDay, setNewWorkingDay } =
        useContext(WorkdaysContext)

    // ------------------------------------------------------------------

    // ------------------------------------------------------------------

    const selectAllText = (event) => {
        event.currentTarget.select()
    }

    const convertTimeTo24 = (timeStr) => {
        const [time, modifier] = timeStr.split(' ')
        let [hours, minutes] = time.split(':')
        if (hours === '12') hours = '00'
        if (modifier === 'PM') hours = parseInt(hours, 10) + 12

        return `${hours}:${minutes}`
    }

    const saveWorkingDay = (event) => {
        event.preventDefault()

        // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
        const [end, start] = [
            new Date(2022, 2, 2, 11, 30),
            new Date(2022, 2, 2, 8, 30),
        ]

        const hours = (Math.abs(end - start) / 36e5).toFixed(2)
        console.log(convertTimeTo24('05:42 PM'))
        console.log(hours)

        return
        //-----------------------------------------------
        const data = new FormData(event.target)

        // Calculate total of worked hours
        // setWorkingDay({
        //     day: data.get('day'),
        //     start: {
        //         hour: data.get('startHour'),
        //         minutes: data.get('startMin'),
        //         period: data.get('startPeriod'),
        //     },
        //     end: {
        //         hour: data.get('endHour'),
        //         minutes: data.get('endMin'),
        //         period: data.get('endPeriod'),
        //     },
        // })

        // // Set data
        // console.log(workingDay)
    }

    return (
        <AddFormStyled onSubmit={saveWorkingDay}>
            <fieldset name='weekday'>
                <legend>Seleccionar día:</legend>
                <label htmlFor='day'>Selecciona el día:</label>
                <DatePicker
                    value={newWorkingDay}
                    onChange={setNewWorkingDay}
                    id='day'
                ></DatePicker>
            </fieldset>

            {
                /* Starting time */
                formPage === 1 && (
                    <fieldset name='starting'>
                        <legend>Hora de entrada</legend>
                        <div className='starting-container'>
                            <h4 className='title'>
                                Hora de <span>entrada</span>
                            </h4>
                            <label htmlFor='startHour' className='hoursLabel'>
                                Hora
                            </label>
                            <div className='hours'>
                                <InputStyled
                                    style={{ order: '1' }}
                                    type='tel'
                                    id='startHour'
                                    min='01'
                                    max='12'
                                    pattern='^[0-9]{2}$'
                                    defaultValue='06'
                                    required
                                    name='startHour'
                                    onClick={selectAllText}
                                />
                                <Button arrow type='button'>
                                    <FiChevronUp />
                                </Button>
                                <Button
                                    arrow
                                    type='button'
                                    style={{ order: '2' }}
                                >
                                    <FiChevronDown />
                                </Button>
                            </div>

                            <div className='separator'>
                                <h1>:</h1>
                            </div>

                            <label htmlFor='startMin' className='minutesLabel'>
                                Minutos
                            </label>
                            <div className='minutes'>
                                <InputStyled
                                    style={{ order: '1' }}
                                    type='tel'
                                    id='startMin'
                                    min='00'
                                    max='59'
                                    pattern='^[0-9]{2}$'
                                    defaultValue={'00'}
                                    required
                                    name='startMin'
                                    onClick={selectAllText}
                                />
                                <Button arrow type='button'>
                                    <FiChevronUp />
                                </Button>
                                <Button
                                    arrow
                                    type='button'
                                    style={{ order: '2' }}
                                >
                                    <FiChevronDown />
                                </Button>
                            </div>

                            <div className='period'>
                                <input
                                    type='radio'
                                    id='startAM'
                                    value='AM'
                                    name='startPeriod'
                                />
                                <label htmlFor='startAM'>AM</label>

                                <input
                                    type='radio'
                                    id='startPM'
                                    value='PM'
                                    defaultChecked
                                    name='startPeriod'
                                />
                                <label htmlFor='startPM'>PM</label>
                            </div>
                        </div>
                    </fieldset>
                )
            }

            {
                /* Ending time */
                formPage === 2 && (
                    <fieldset name='ending'>
                        <div className='ending-container'>
                            <legend>Hora de salida</legend>
                            <h4 className='title'>
                                Hora de <span>salida</span>
                            </h4>
                            <label htmlFor='endHour' className='hoursLabel'>
                                Hora
                            </label>
                            <div className='hours'>
                                <InputStyled
                                    style={{ order: '1' }}
                                    onClick={selectAllText}
                                    type='tel'
                                    id='endHour'
                                    min='01'
                                    max='12'
                                    pattern='^[0-9]{2}$'
                                    defaultValue={'12'}
                                    required
                                    name='endHour'
                                />
                                <Button arrow type='button'>
                                    <FiChevronUp />
                                </Button>
                                <Button
                                    arrow
                                    type='button'
                                    style={{ order: '2' }}
                                >
                                    <FiChevronDown />
                                </Button>
                            </div>
                            <div className='separator'>
                                <h1>:</h1>
                            </div>
                            <label htmlFor='endMin' className='minutesLabel'>
                                Minutes:
                            </label>
                            <div className='minutes'>
                                <InputStyled
                                    style={{ order: '1' }}
                                    type='tel'
                                    id='endMin'
                                    min='01'
                                    max='59'
                                    pattern='^[0-9]{2}$'
                                    defaultValue={'00'}
                                    required
                                    name='endMin'
                                    onClick={selectAllText}
                                />
                                <Button arrow type='button'>
                                    <FiChevronUp />
                                </Button>
                                <Button
                                    arrow
                                    type='button'
                                    style={{ order: '2' }}
                                >
                                    <FiChevronDown />
                                </Button>
                            </div>

                            <div className='period'>
                                <input
                                    type='radio'
                                    id='endAM'
                                    value='AM'
                                    name='endPeriod'
                                />
                                <label htmlFor='endAM'>AM</label>

                                <input
                                    type='radio'
                                    id='endPM'
                                    value='PM'
                                    name='endPeriod'
                                    defaultChecked
                                />
                                <label htmlFor='endPM'>PM</label>
                            </div>
                        </div>
                    </fieldset>
                )
            }

            <div className='form-navigation'>
                <Button
                    small
                    transparent
                    type='button'
                    onClick={() => {
                        setFormPage(1)
                    }}
                >
                    Atrás
                </Button>
                <Button color='primary' type='submit'>
                    Guardar
                </Button>
                <Button
                    small
                    transparent
                    type='button'
                    onClick={() => {
                        setFormPage(2)
                    }}
                >
                    Siguiente
                </Button>
            </div>
        </AddFormStyled>
    )
}

export default AddForm
