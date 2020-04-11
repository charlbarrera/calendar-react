import React from 'react';
import { Input } from '@material-ui/core';
import { ModalComponent } from '../modal';
import { Button } from '@material-ui/core';

export const ReminderLayout = ({ state, events }) => {
    const { newReminder, selectedDay } = state;
    const { onClose, onSubmit } = events;
    const [date, setDate] = React.useState(selectedDay);
    const [year, setYear] = React.useState(0);
    const [month, setMonth] = React.useState(1);
    const [day, setDay] = React.useState(1);
    const [hour, setHour] = React.useState(5);
    const [minutes, setMinutes] = React.useState(30);
    React.useEffect(() => {
        const selectedDateParsed = selectedDay.split('-');
        setYear(selectedDateParsed[0]);
        setMonth(selectedDateParsed[1]);
        setDay(selectedDateParsed[2]);
    }, [date, selectedDay]);


    return <ModalComponent open={newReminder} onClose={onClose} >
                <form onSubmit={onSubmit} >
                    <div>
                        <label>Add a title</label>
                        <Input name="title" color="primary" placeholder="please fill out with your name" />
                    </div>
                    <div>
                        <div>
                            <Input name="dayDate" color="primary" value={year} onChange={(e) => setYear(e.target.value)} />
                            <Input name="monthDate" color="primary" value={month} onChange={(e) => setMonth(e.target.value)} />
                            <Input name="yearDate" color="primary" value={day} onChange={(e) => setDay(e.target.value)} />
                        </div>
                        <div>
                            <Input name="hour" color="primary" value={hour} onChange={(e) => setHour(e.target.value)} />:<Input name="minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <Input name="city" color="primary" placeholder="city" />
                    </div>
                    <Button type="button" onClick={onClose}>cancel</Button>
                    <Button type="onsubmit" style={{backgroundColor: "#00838f"}} variant="contained" color="primary">NEW REMINDER</Button>
                </form>
            </ModalComponent>
}