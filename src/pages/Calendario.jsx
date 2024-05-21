import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.module.css';

function Calendario() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Calendário:</h1>
                <Calendar
                    onChange={onChange}
                    value={date}
                    calendarType="US"
                />
            </div>
        </div>
    );
}

export default Calendario;
