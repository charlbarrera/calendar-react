import React from 'react';
import { Input } from '@material-ui/core';
import { ModalComponent } from '../modal';
import { Button } from '@material-ui/core';

export const ReminderLayout = ({ state, events }) => {
    const { newReminder } = state;
    const { onClose, onSubmit } = events;

    return <ModalComponent open={newReminder} onClose={onClose} >
                <form onSubmit={onSubmit} >
                    <div>
                        <label>Add a title</label>
                        <Input name="title" color="primary" placeholder="please fill out with your name" />
                    </div>
                    <div>
                        <div>
                            <Input name="dayDate" color="primary" value={5} />
                            <Input name="monthDate" color="primary" value={3} />
                            <Input name="yearDate" color="primary" value={2020} />
                        </div>
                        <div>
                            <Input name="hour" color="primary" value={5} />:<Input name="minutes" value={30} />
                        </div>
                    </div>
                    <div>
                        <Input name="city" color="primary" placeholder="city" />
                    </div>
                    <Button onClick={onClose}>cancel</Button>
                    <Button type="onsubmit" style={{backgroundColor: "#00838f"}} variant="contained" color="primary">NEW REMINDER</Button>
                </form>
            </ModalComponent>
}