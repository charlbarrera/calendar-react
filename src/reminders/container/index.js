import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import moment from "moment";
import { setNewReminder, showModalReminder, updateReminder } from "../../redux/actions/reminders";

export const ReminderContainer = ({ children }) => {
    const showModal = useSelector(({ reminders }) => reminders.showModalReminder, shallowEqual);
    const typeModalReminder = useSelector(({ reminders }) => reminders.typeModalReminder, shallowEqual);
    const currentReminder = useSelector(({ reminders }) => reminders.currentReminder, shallowEqual);
    const dispatch = useDispatch();


    const onClose = (e) => {
        dispatch(showModalReminder(false));
    }

    const onSubmitReminder = (e, reminder) => {
        e.preventDefault();
        updateReminders(e, reminder);
        dispatch(showModalReminder(false));
    }

    const updateReminders = (reminder) => {
        const {
            title,
            day,
            year,
            month,
            hour,
            minutes,
            city,
            idReminder
        } = reminder;

        if (typeModalReminder === 'newReminder') {
            const newDate = moment(`${year}-${month}-${day}`).format("YYYY-MM-DD");
            const newReminder = {
                id: new Date().getTime(),
                title: title,
                date: newDate,
                hour: `${hour}:${minutes}`,
                city: city
            }
            dispatch(setNewReminder(newReminder));
        }
        if (typeModalReminder === 'editReminder') {
            const newDate = moment(`${year}-${month}-${day}`).format("YYYY-MM-DD");
            const newReminder = {
                id: idReminder,
                title: title,
                date: newDate,
                hour: `${hour}:${minutes}`,
                city: city
            }
            dispatch(updateReminder(newReminder));
        }
    }

    return children({
        state: {
            showModal,
            currentReminder
        },
        events: {
            onClose,
            onSubmitReminder
        }

    })
}