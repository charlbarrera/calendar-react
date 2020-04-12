import React from 'react';
import { MdModeEdit } from 'react-icons/md'
import { ReminderLabel, ActionsReminder, TextReminder, IconStyle } from './styles';



export const ReminderList = ({ remindersDate, onEditReminder }) => {
    return remindersDate.map((reminder) => {

        const { id, color } = reminder;

        return <ReminderLabel key={id} color={color} >
            <TextReminder>
                [{reminder.hour}:{reminder.minutes}hs]-{reminder.title}
            </TextReminder>
            <ActionsReminder>
                <IconStyle>
                    <MdModeEdit onClick={(e) => onEditReminder(reminder)} />
                </IconStyle>
            </ActionsReminder>
        </ReminderLabel>
    })
}