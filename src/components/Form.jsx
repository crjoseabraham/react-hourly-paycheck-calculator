import React, { useContext } from 'react'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { InterfaceContext } from '../context/InterfaceContext'
import { WorkdaysContext } from '../context/WorkdaysContext'
import Button from '../styles/Button.styled'
import FormStyled from '../styles/Form.styled'

const Form = () => {
    const { setModalDisplay } = useContext(InterfaceContext)
    const {
        newDate,
        newEnd,
        newStart,
        newBreak,
        newRatio,
        newDebt,
        setNewDate,
        setNewEnd,
        setNewStart,
        setNewBreak,
        setNewRatio,
        setNewDebt,
        resetFields,
        store,
    } = useContext(WorkdaysContext)

    const save = (event) => {
        event.preventDefault()
        store()
        resetFields()
        setModalDisplay(false)
    }

    return (
        <FormStyled onSubmit={save}>
            <fieldset name='weekday'>
                <legend>Seleccionar día:</legend>
                <label htmlFor='date'>Selecciona el día:</label>
                <DatePicker
                    autoOk
                    format={"EEEE, d 'de' MMMM"}
                    disableToolbar
                    value={newDate}
                    id='date'
                    name='date'
                    onChange={setNewDate}
                    required
                ></DatePicker>
            </fieldset>

            <div className='hours'>
                <fieldset>
                    <legend>Hora de entrada</legend>
                    <label htmlFor='start'>Entrada:</label>
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
                    <label htmlFor='end'>Salida:</label>
                    <TimePicker
                        value={newEnd}
                        onChange={setNewEnd}
                        id='end'
                        name='end'
                        required
                    />
                </fieldset>
            </div>

            <hr />

            <div className='defaultFields'>
                <fieldset>
                    <legend>Deuda</legend>
                    <label htmlFor='debt' className='danger'>
                        Deuda:
                    </label>
                    <input
                        type='number'
                        name='debt'
                        id='debt'
                        min='0'
                        step='0.01'
                        defaultValue={newDebt}
                        onChange={({ target }) =>
                            setNewDebt(parseFloat(target.value))
                        }
                        onClick={({ target }) => target.select()}
                    />
                </fieldset>

                <fieldset>
                    <legend>Valor de la hora</legend>
                    <label htmlFor='ratio'>Valor hora:</label>
                    <input
                        type='number'
                        step='.1'
                        name='ratio'
                        id='ratio'
                        defaultValue={newRatio}
                        onChange={({ target }) =>
                            setNewRatio(parseFloat(target.value))
                        }
                        onClick={({ target }) => target.select()}
                    />
                </fieldset>

                <fieldset>
                    <legend>Break</legend>
                    <label htmlFor='break'>Break:</label>
                    <input
                        type='number'
                        step='.5'
                        name='break'
                        id='break'
                        defaultValue={newBreak}
                        onChange={({ target }) =>
                            setNewBreak(parseFloat(target.value))
                        }
                        onClick={({ target }) => target.select()}
                    />
                </fieldset>
            </div>

            <Button color='primary' type='submit'>
                Guardar
            </Button>
        </FormStyled>
    )
}

export default Form
