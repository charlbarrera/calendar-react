import React from 'react';
import { Input } from '@material-ui/core';
import { ModalComponent } from '../modal';
import { Button } from '@material-ui/core';
import { useReminderForm } from '../hooks/reminderForm';

export const ReminderLayout = ({ state, events, title }) => {
    const { showModalReminder, currentReminder } = state;
    const { onClose, onSubmitReminder } = events;

    const { stateForm, eventsForm } = useReminderForm(currentReminder);


    return <ModalComponent open={showModalReminder} onClose={onClose} >
                <form 
                    onSubmit={ (e) =>  onSubmitReminder(e, { ...stateForm })} 
                >
                    <h3>{title}</h3>
                    <div>
                        <label>title</label>
                        <Input name="title" color="primary" value={stateForm.title} placeholder="please fill out with your name" />
                    </div>
                    <div>
                        <div>
                            <Input name="dayDate" color="primary" value={stateForm.year} onChange={(e) => eventsForm.setYear(e.target.value)} />
                            <Input name="monthDate" color="primary" value={stateForm.month} onChange={(e) => eventsForm.setMonth(e.target.value)} />
                            <Input name="yearDate" color="primary" value={stateForm.day} onChange={(e) => eventsForm.setDay(e.target.value)} />
                        </div>
                        <div>
                            <Input name="hour" color="primary" value={stateForm.hour} onChange={(e) => eventsForm.setHour(e.target.value)} />:<Input name="minutes" value={stateForm.minutes} onChange={(e) => eventsForm.setMinutes(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <Input name="city" color="primary" value={stateForm.city} onChange={(e) => eventsForm.setCity(e.target.value)} placeholder="city" />
                    </div>
                    <Button type="button" onClick={onClose}>cancel</Button>
                    <Button type="onsubmit" style={{backgroundColor: "#00838f"}} variant="contained" color="primary">NEW REMINDER</Button>
                </form>
            </ModalComponent>
}