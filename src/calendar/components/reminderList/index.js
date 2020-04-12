import React from 'react';
import { MdModeEdit } from 'react-icons/md'
import { ReminderLabel, ActionsReminder, TextReminder } from './styles';



export const ReminderList = ({ remindersDate, onEditReminder }) => {
    return remindersDate.map((reminder) => {

        const { id, color } = reminder;

        return <ReminderLabel key={id} color={color} >
            <TextReminder>
                [{reminder.hour}hs]-{reminder.title}
            </TextReminder>
            <ActionsReminder>
                <MdModeEdit onClick={(e) => onEditReminder(reminder)} />
            </ActionsReminder>
        </ReminderLabel>
    })
}