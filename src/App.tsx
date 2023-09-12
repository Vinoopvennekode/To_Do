import * as React from 'react'
import TodoProvider from './context/todoContext'
import Todo_Calender from './components/Todo_Calender'
import Todos from './components/Todos'

import './index.css'

export default function App() {
  return (
    <TodoProvider>
      <main className='App'>
        <div className='header'>
        <h1 className='title'>My Todos App</h1>
        <p className='title_small'>Your Ultimate To-Do App</p>
        </div>
        <div className='todo_list'>
          <Todo_Calender />
          <Todos />
        </div>
      </main>
    </TodoProvider>
  )
}