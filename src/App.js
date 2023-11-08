import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

// const defaultTodos = [
//   { text: 'Prueba 1', completed: true },
//   { text: 'Prueba 2', completed: false },
//   { text: 'Prueba 3', completed: false },
//   { text: 'Prueba 4', completed: false },
//   { text: 'Prueba 5', completed: false }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

function useLocalStorage (itemName, initialValues) {
  const localStorageItem = localStorage.getItem(itemName)
  let parseItems
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValues))
    parseItems = initialValues
  } else {
    parseItems = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parseItems)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

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
    < >
     <TodoCounter completed = {completedTodos} total={totalTodos} />
     <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue} />

     <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodos(todo.text)}
                    onDelete={() => deleteTodos(todo.text)}
                    />
        ))}
     </TodoList>

     <CreateTodoButton/>
    </>
  )
}

export default App
