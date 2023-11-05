import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const defaultTodos = [
  { text: 'Prueba 1', completed: true },
  { text: 'Prueba 2', completed: false },
  { text: 'Prueba 3', completed: false },
  { text: 'Prueba 4', completed: false },
  { text: 'Prueba 5', completed: false }
]

function App () {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = React.useState(defaultTodos)
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
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
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
