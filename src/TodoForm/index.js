import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm () {
  const {
    addTodos,
    setOpenModal
  } = React.useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodos(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = () => { setOpenModal(false) }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
        placeholder='Aca se escribe'
        value={newTodoValue}
        onChange={onChange}
        />
        <div className='TodoForm-buttonContainer'>
        <button type="button" onClick={onCancel} className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
        <button type="submit" className='TodoForm-button TodoForm-button--add'>Crear</button>
        </div>
    </form>
  )
}

export { TodoForm }
