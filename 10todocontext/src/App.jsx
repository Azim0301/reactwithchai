import React, { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // Load todos from localStorage safely
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  // Add a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // Update an existing todo
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    )
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // Toggle completion status
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        prevTodo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          
          {/* Todo Form */}
          <div className="mb-4">
            <TodoForm />
          </div>

          {/* Todo List */}
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
