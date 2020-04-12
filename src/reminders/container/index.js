import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import moment from "moment";
import { setNewReminder, showModalReminder, updateReminder, setCurrentReminder, getCityWeather } from "../../redux/actions/reminders";

export const ReminderContainer = ({ children }) => {
    const showModal = useSelector(({ reminders }) => reminders.showModalReminder, shallowEqual);
    const typeModalReminder = useSelector(({ reminders }) => reminders.typeModalReminder, shallowEqual);
    const currentReminder = useSelector(({ reminders }) => reminders.currentReminder, shallowEqual);
    const currentCityWeather = useSelector(({ reminders }) => reminders.currentCityWeather, shallowEqual);
    const errors = useSelector(({ reminders }) => reminders.errors, shallowEqual);
    const dispatch = useDispatch();


    const searchCityWeather = (city, date) => {
        dispatch(
            getCityWeather({
                city,
                date
            })
        )
    }

    const onClose = (e) => {
        dispatch(showModalReminder(false));
    }

    const onSubmitReminder = (reminder) => {
        updateReminders(reminder);
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
            color,
            idReminder
        } = reminder;

        const newDate = moment(`${year}-${month}-${day}`).format("YYYY-MM-DD");
        const newReminder = {
            title,
            date: newDate,
            color,
            hour: `${hour}`,
            minutes: `${minutes}`,
            city
        };
        if (typeModalReminder === 'newReminder') {
            dispatch(setNewReminder({
                ...newReminder,
                id: new Date().getTime(),
            }));
        }

        if (typeModalReminder === 'editReminder') {
            dispatch(updateReminder({
                ...newReminder,
                id: idReminder,
            }));
        }
    }

    return children({
        state: {
            showModal,
            currentReminder,
            typeModalReminder,
            currentCityWeather,
            errors
        },
        events: {
            onClose,
            searchCityWeather,
            onSubmitReminder
        }

    })
}