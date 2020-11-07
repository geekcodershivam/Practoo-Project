import React,{useContext} from 'react';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';
import { CalenderContext } from '../../App';

const ReactCalender = () => {
    const CalenderData = useContext(CalenderContext);
    const onChange = date => {
        CalenderData.setDate(date)
    }

    return (
        <div className="my-calender">
            <Calendar
              onChange={onChange}
              value={CalenderData.value}
            />
        </div>
    );
};

export default ReactCalender;