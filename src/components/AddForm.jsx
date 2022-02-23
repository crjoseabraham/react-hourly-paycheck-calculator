import React, { useContext } from 'react'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { InterfaceContext } from '../context/InterfaceContext'
import { WorkdaysContext } from '../context/WorkdaysContext'
import Button from '../styles/Button.styled'
import InputStyled from '../styles/Input.styled'
import AddFormStyled from '../styles/AddForm.styled'

const AddForm = () => {
    const {
        newDate,
        newEnd,
        newStart,
        setNewDate,
        setNewEnd,
        setNewStart,
        resetFields,
        store,
    } = useContext(WorkdaysContext)

    const { setModalDisplay } = useContext(InterfaceContext)

    const save = (event) => {
        event.preventDefault()

        // Calculate worked hours
        let hours
        let newEndPlusOne = null
        // e.g.: start at 5 PM, end at 2 AM means the work ended the next day
        if (newEnd.getTime() < newStart.getTime()) {
            newEndPlusOne = new Date(newEnd)
            newEndPlusOne.setDate(newEndPlusOne.getDate() + 1)
            hours = (Math.abs(newEndPlusOne - newStart) / 36e5).toFixed(2)
        } else hours = (Math.abs(newEnd - newStart) / 36e5).toFixed(2)
        // save new day to the state, send newEndPlusOne in case it has changed
        store(newEndPlusOne)
        resetFields()
        setModalDisplay(false)
    }

    return (
        <AddFormStyled onSubmit={save}>
            <fieldset name='weekday'>
                <legend>Seleccionar día:</legend>
                <label htmlFor='date'>Selecciona el día:</label>
                <DatePicker
                    autoOk
                    format={"EEEE, d 'de' MMMM"}
                    disableToolbar
                    variant='inline'
                    value={newDate}
                    id='date'
                    name='date'
                    onChange={setNewDate}
                    required
                ></DatePicker>
            </fieldset>

            <fieldset>
                <legend>Hora de entrada</legend>
                <label htmlFor='start'>Hora de entrada:</label>
                <TimePicker
                    value={newStart}
                    onChange={setNewStart}
                    id='start'
                    name='start'
                    required
                />
            </fieldset>

            <fieldset>
                <legend>Hora de salida</legend>
                <label htmlFor='end'>Hora de salida:</label>
                <TimePicker
                    value={newEnd}
                    onChange={setNewEnd}
                    id='end'
                    name='end'
                    required
                />
            </fieldset>

            <Button color='primary' type='submit'>
                Guardar
            </Button>
        </AddFormStyled>
    )
}

export default AddForm
