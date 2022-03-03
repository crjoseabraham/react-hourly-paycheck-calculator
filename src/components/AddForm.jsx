import React, { useContext } from 'react'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { InterfaceContext } from '../context/InterfaceContext'
import { WorkdaysContext } from '../context/WorkdaysContext'
import Button from '../styles/Button.styled'
import AddFormStyled from '../styles/AddForm.styled'

const AddForm = () => {
    const { setModalDisplay } = useContext(InterfaceContext)
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

    const save = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        store(form)
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

            <fieldset>
                <legend>Deuda</legend>
                <label htmlFor='debt'>Deuda:</label>
                <input
                    type='number'
                    name='debt'
                    id='debt'
                    min='0'
                    step='0.01'
                    defaultValue={0}
                />
            </fieldset>

            <fieldset>
                <legend>Valor de la hora</legend>
                <label htmlFor='ratio'>Valor de la hora:</label>
                <input
                    type='number'
                    step='.1'
                    name='ratio'
                    id='ratio'
                    defaultValue={0.6}
                />
            </fieldset>

            <Button color='primary' type='submit'>
                Guardar
            </Button>
        </AddFormStyled>
    )
}

export default AddForm
