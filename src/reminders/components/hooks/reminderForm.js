import React from 'react';

export const useReminderForm = (currentReminder) => {
    const [idReminder, setIdReminder] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const [title, setTitle] = React.useState('');
    const [year, setYear] = React.useState(0);
    const [month, setMonth] = React.useState(1);
    const [day, setDay] = React.useState(1);
    const [hour, setHour] = React.useState(5);
    const [minutes, setMinutes] = React.useState(30);
    const [city, setCity] = React.useState('');
    
    /**
     * this will charge the first set of data
     */
    React.useEffect(() => {
        const { id, title, date, hour, city} = currentReminder;
        const dateParsed = date.split('-');
        setYear(dateParsed[0]);
        setMonth(dateParsed[1]);
        setDay(dateParsed[2]);
        setHour(hour);
        setCity(city);
        setIdReminder(id);
        setTitle(title);
    }, [currentReminder]);

    React.useEffect(() => {
        console.log('title', title)
        if (title.length > 30) {
            setTitle((prevTitle) => prevTitle.slice(0, 30));
        }
    },[title])


    return {
        stateForm: {
            title,
            day,
            year,
            month,
            hour,
            minutes,
            city,
            idReminder,
        },
        eventsForm: {
            setTitle,
            setYear,
            setDay,
            setHour,
            setMonth,
            setMinutes,
            setCity
        }
    }
}