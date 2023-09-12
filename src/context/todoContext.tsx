import * as React from 'react';
import { useState, createContext } from 'react';
import { TodoContextType, ToDo } from '../../@types/todo';

interface Props {
  children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [date, setDate] = useState<string>('')



  const saveTodo = (todo: ToDo) => {
    const newTodo: ToDo = {
      id: Math.random(),
      date: todo.date,
      from_time: todo.from_time,
      to_time:todo.to_time,
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };


  const updateTodoStatus = (id: number) => {
    todos.filter((todo: ToDo): void => {
      if (todo.id === id) {
        todo.status = !todo.status;
        setTodos([...todos]);
      }
    });
  };


  const changeTodo = (id: number, title: string, description: string, from_time: string,to_time:string) => {
    todos.filter((todo: ToDo): void => {
      if (todo.id === id) {
        todo.title = title;
        todo.description = description;
        todo.from_time = from_time;
        todo.to_time=to_time;
        setTodos([...todos]);
      }
    });
  }

  const changeDate = (date: string) => {
    setDate(date)
  }

  return <TodoContext.Provider value={{ todos, saveTodo, updateTodoStatus, changeTodo, changeDate, date }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;