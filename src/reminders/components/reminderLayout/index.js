import React from 'react';
import { Input, TextField } from '@material-ui/core';
import { ModalComponent } from '../modal';
import { Button } from '@material-ui/core';
import { useReminderForm } from '../hooks/reminderForm';

export const ReminderLayout = ({ state, events }) => {
    const { showModal, currentReminder, typeModalReminder } = state;
    const { onClose, onSubmitReminder } = events;

    const { stateForm, eventsForm } = useReminderForm(currentReminder);

    const title = typeModalReminder === 'newReminder' ? 'New reminder' : 'Edit Reminder';

    return <ModalComponent open={showModal} onClose={onClose} >
        <form
            onSubmit={(e) => onSubmitReminder(e, { ...stateForm })}
        >
            <h3>{title}</h3>
            <div>
                <TextField
                    multiline
                    label="Reminder"
                    variant="outlined"
                    fullWidth
                    name="title"
                    color="primary"
                    value={stateForm.title}
                    onChange={(e) => eventsForm.setTitle(e.target.value)}
                />
                <p>(max 30 characters)</p>
            </div>
            <div>
                <div>
                    <Input type="number" name="dayDate" color="primary" value={stateForm.year} onChange={(e) => eventsForm.setYear(e.target.value)} />
                    <Input name="monthDate" color="primary" value={stateForm.month} onChange={(e) => eventsForm.setMonth(e.target.value)} />
                    <Input type="number" name="yearDate" color="primary" value={stateForm.day} onChange={(e) => eventsForm.setDay(e.target.value)} />
                </div>
                <div>
                    <Input type="number" style={{ width: 45 }} name="hour" color="primary" value={stateForm.hour} onChange={(e) => eventsForm.setHour(e.target.value)} />hs : <Input style={{ width: 45 }} type="number" name="minutes" value={stateForm.minutes} onChange={(e) => eventsForm.setMinutes(e.target.value)} /> minutes
                        </div>
            </div>
            <div>
                <Input name="city" color="primary" value={stateForm.city} onChange={(e) => eventsForm.setCity(e.target.value)} placeholder="city" />
            </div>
            <Button type="button" onClick={onClose}>cancel</Button>
            <Button type="onsubmit" style={{ backgroundColor: "#00838f" }} variant="contained" color="primary">NEW REMINDER</Button>
        </form>
    </ModalComponent>
}