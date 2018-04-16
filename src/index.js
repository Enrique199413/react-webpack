import React from 'react'
import ReactDOM from 'react-dom'
import mainStyles from './main.css'

let userName = 'EnriqueLC'
let todos = []

const addTodo = (todo) => {
  count++

  todos.push(todo)
  renderTodoApp()
}
const minusTodo = (todo) => {
  count--

  todos.push(todo)
  renderTodoApp()
}
const resetTodo = (todo) => {
  count = 0

  todos.push(todo)
  renderTodoApp()
}

let count = 0

const renderTodoApp = () => {
  const Index = () => {
    return <div>
      <button onClick={addTodo} className={mainStyles.title}>Paco</button>
      <button onClick={minusTodo} className={mainStyles.title}>Paco</button>
      <button onClick={resetTodo} className={mainStyles.title}>Paco</button>
      {count}
    </div>
  }

  ReactDOM.render(<Index/>, document.getElementById('index'))
}

renderTodoApp()