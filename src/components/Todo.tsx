import React, { useState } from 'react'
import { ToDo } from '../../@types/todo'
import {changeTimeFormat} from '../utils/utils'

import './style/style.css'


type Props = {
    todo: ToDo,
    updateTodo: (id: number) => void,
    changeTodo: (id: number, title: string, description: string, from_time: string,to_time:string) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, changeTodo }) => {
    const [edit, setedit] = useState<boolean>(false)
    const [status, setstatus] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState<string>(todo.title)
    const [editDes, setEditDes] = useState<string>(todo.description)
    const [edit_from_Time, setedit_from_Time] = useState<string>(todo.from_time)
    const [edit_to_Time, setedit_to_Time] = useState<string>(todo.to_time)
    

    const handleChange = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        const from_time=changeTimeFormat(edit_from_Time)
        const to_time=changeTimeFormat(edit_to_Time)
        
        if (editTitle || editDes || edit_from_Time) {
            changeTodo(id, editTitle, editDes, from_time,to_time )
            setedit(false)
            return
        }
        alert('please fill the input')

    }

    return (
        <>
            <div className={`todo_list_card ${todo.status ? 'true' : ''}`}>

                <form onSubmit={(e) => handleChange(e, todo.id)} className='card_form'>
                    {edit ? (<div className='update_form'>
                        <div className='form_input'>
                            <label>Title</label>
                            <input defaultValue={todo.title} type="text" id='title' onChange={(e) => setEditTitle(e.target.value)} required />
                        </div>
                        <div className='form_input'>
                            <label>Description</label>
                            <textarea defaultValue={todo.description} id='description' className='description_input' onChange={(e) => setEditDes(e.target.value)} required />
                        </div>
                        <div className='form_input'>
                            <label>From</label>
                            <input defaultValue={todo.from_time} type="time" id='description' onChange={(e) => setedit_from_Time(e.target.value)}  required/>
                        </div>
                        <div className='form_input'>
                            <label>From</label>
                            <input defaultValue={todo.to_time} type="time" id='description' onChange={(e) => setedit_to_Time(e.target.value)}  required/>
                        </div>
                    </div>) : (
                        <div className='card_content'>
                            <div className='card_header'>
                            <h1 className='card_title'>{todo.title}</h1>
                            <p className='card_time'>{todo.from_time} TO {todo.to_time}</p>
                            </div>
                            <p className='card_description'>{todo.description}</p>
                            <div className="status_checkbox">
                                <label>Status Update</label>
                                <input type="checkbox" id="status" name="status" checked={todo.status} onChange={() => { setstatus(!status); updateTodo(todo.id) }} />
                            </div>
                        </div>
                    )}
                    <div className='buttons'>
                        {todo.status&&(<p className='done_message'>&#x2713; Done</p>)}
                        {!todo.status && !edit && <button className='update_button' onClick={() => setedit(true)}>Update</button>}
                        {edit && <button className='submit_button' type='submit'>submit</button>}
                    </div>
                </form >


            </div>
        </>
    )
}

export default Todo