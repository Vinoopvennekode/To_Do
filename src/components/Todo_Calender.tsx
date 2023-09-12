import React, { useState,useContext} from 'react'
import moment from "moment";
import { TodoContext } from '../context/todoContext'
import { TodoContextType } from '../../@types/todo';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './style/style.css'


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Todo_Calender: React.FC = () => {
    const { todos, changeDate } = useContext(TodoContext) as TodoContextType
    const [value, onChange] = useState<Value>(new Date());

    //to filter the dates from TODO, to showing in the calender
    const datesArray = todos.map(item => moment(item.date, 'MMM Do YYYY').toDate());

    const tileClassName = ({ date }: any) => {
        if (datesArray.some((d) => d.toDateString() === date.toDateString())) {
            return 'special-date-cell';
        }
        return '';
    };


    //handle the date >> change the date format to 'MMM Do YYYY'
    const handleDate = (date: Date): void => {
        const momentDate = moment(date);
        const selectedDate = momentDate.format("MMM Do YYYY").toString()
        changeDate(selectedDate)
    }

    return (

        <>
        
        <div className='add_todo'>
            <Calendar minDate={new Date()} onClickDay={handleDate} onChange={onChange} value={value} tileClassName={tileClassName} />
        </div>
        </>
    )
}

export default Todo_Calender