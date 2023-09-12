import React, { useState, useContext } from 'react'
import { ToDo, TodoContextType } from '../../@types/todo'
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';
import Form_Modal from './Form_Modal';

import './style/style.css'




const Todos: React.FC = () => {
  const { todos, updateTodoStatus, changeTodo, date } = useContext(TodoContext) as TodoContextType
  const [modalOn, setmodalOn] = useState<boolean>(false)

  const data = todos.filter((e) => e.date === date);

  return (
    <>
      <div>
        {date ? (
        <div className='date_shown'>
          <button className='add_button' onClick={() => setmodalOn(true)}>Add Task</button> 
          <p className='date'>{date}</p>
        </div>
        ): (
          <p className='select_date'>select your date!!!!</p>
        )}

        <div className='todo_list_map_total'>
          <div className={`add_todo_form ${modalOn ? 'show' : ''}`}>

            {modalOn && <Form_Modal seletedDate={date} setdateSelected={setmodalOn} />}
          </div>
          {data.map((todo: ToDo) => {
            return (
              <Todo key={todo.id} updateTodo={updateTodoStatus} todo={todo} changeTodo={changeTodo} />
            )
          })
          }

        </div>

      </div>
    </>
  )
}

export default Todos