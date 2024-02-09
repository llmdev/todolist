import React from 'React'
import './App.css'
import { Lista } from './components/List/List'

//// STATEFULL - CONTAINER COMPONENT  
function App() {
  const [todos, setTodos] = React.useState([])
  const [value, setValue] = React.useState('')

  function handleAddItemTodoList() {
    if (value) {
      const task = {
        id: Math.random(),
        name: value,
        completed: false
      }
      setTodos(oldState => [...oldState, task])
    }
  }

  const handleSetItemCompleted = React.useCallback((id) => {
    const newState = todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })

    setTodos(newState)
  }, [todos])


  const handleDelete = React.useCallback((id) => {
    const newState = todos.filter(item => item.id !== id)
    setTodos(newState)
  }, [todos])

  const listTodo = React.useMemo(() => todos.filter(item => item.completed === false), [todos])
  const listComplete = React.useMemo(() => todos.filter(item => item.completed), [todos])

  return (
    <div className="container">

      <h2>TODO LIST</h2>
      <h3>Add Item</h3>
      <p>
        <input id="new-task" type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={handleAddItemTodoList}>Add</button>
      </p>

      <Lista title="Todo"
        list={listTodo}
        handleItemClick={handleSetItemCompleted}
        handleItemDelete={handleDelete}
      />
      <Lista
        title="Completed"
        list={listComplete}
        handleItemClick={handleSetItemCompleted}
        handleItemDelete={handleDelete}
      />
    </div>
  )
}

export default App
