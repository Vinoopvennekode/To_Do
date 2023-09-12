import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/todoContext'
import { ToDo, TodoContextType } from '../../@types/todo';
import { changeTimeFormat } from '../utils/utils'
import './style/style.css'

interface Props {
    seletedDate?: string;
    setdateSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form_Modal: React.FC<Props> = ({ seletedDate, setdateSelected }) => {
    const { saveTodo } = useContext(TodoContext) as TodoContextType
    const [formData, setformData] = useState<ToDo | {}>({})

    const handleForm = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

        const { id, value } = e.currentTarget;
        // Format the time input >> 14:43 ('02:43 PM')
        
        if ((id === 'to_time'||id==='from_time') && value) {   
            const formattedTime = changeTimeFormat(value)
            setformData({ ...formData, date: seletedDate, [id]: formattedTime });
        } else {
            setformData({ ...formData, date: seletedDate, [id]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent, formData: ToDo | any) => {
        e.preventDefault()
        saveTodo(formData)
        setdateSelected(false)
    }

    return (
        <>
            <div className='todo_form'>
                <span className="close-button" onClick={() => setdateSelected(false)}>&times;</span>
                <form action="" onSubmit={(e) => handleSubmit(e, formData)}>
                    <div className='form_input'>
                        <label>Title</label>
                        <input type="text" id='title' onChange={handleForm} required />
                    </div>
                    <div className='form_input'>
                        <label >Description</label>
                        <textarea id='description' className='description_input' onChange={handleForm} required />
                    </div>
                    <div className='form_input'>
                        <div>
                        <label className='label_time_limit'>From</label>
                        <input type="time" id='from_time' onChange={handleForm} required />
                        </div>
                        <div>
                        <label  className='label_time_limit'>To</label>
                        <input type="time" id='to_time' onChange={handleForm} required />
                        </div>
                    </div>
                    <button>Add todo</button>
                </form>
            </div>
        </>
    )
}

export default Form_Modal