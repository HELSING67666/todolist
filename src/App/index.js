import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { AppUI } from './AppUI'

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
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchTodo = searchValue.toLowerCase()
      return todoText.includes(searchTodo)
    })

  const completeTodos = (text) => {
    const newItem = [...todos]
    const todoIndex = newItem.findIndex(
      todo => todo.text === text
    )
    newItem[todoIndex].completed = true
    saveTodos(newItem)
  }

  const deleteTodos = (text) => {
    const newItem = [...todos]
    const todoIndex = newItem.findIndex(
      todo => todo.text === text
    )
    newItem.splice(todoIndex, 1)
    saveTodos(newItem)
  }

  return (
    <AppUI
  completedTodos={ completedTodos}
  totalTodos={ totalTodos}
  searchValue={ searchValue}
  setSearchValue={ setSearchValue}
  searchedTodos={ searchedTodos}
  completeTodos={ completeTodos}
  deleteTodos={deleteTodos}
  />
  )
}

export default App
