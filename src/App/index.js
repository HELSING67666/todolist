import React from 'react'
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'

// const defaultTodos = [
//   { text: 'Prueba 1', completed: true },
//   { text: 'Prueba 2', completed: false },
//   { text: 'Prueba 3', completed: false },
//   { text: 'Prueba 4', completed: false },
//   { text: 'Prueba 5', completed: false }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

function App () {
  return (
    <TodoProvider>
    <AppUI/>
    </TodoProvider>
  )
}

export default App
