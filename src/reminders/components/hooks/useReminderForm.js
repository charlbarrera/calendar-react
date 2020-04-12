import React from 'react';

export const useReminderForm = (state, events) => {
    const { showModal, currentReminder, typeModalReminder, currentCityWeather, errors } = state;
    const { onClose, onSubmitReminder, searchCityWeather } = events;

    const [idReminder, setIdReminder] = React.useState('');
    const [errorsForm, setErrorsForm] = React.useState(null);
    const [color, setColor] = React.useState('');
    const [titleReminder, setTitle] = React.useState('');
    const [year, setYear] = React.useState(0);
    const [month, setMonth] = React.useState(1);
    const [day, setDay] = React.useState(1);
    const [hour, setHour] = React.useState(5);
    const [minutes, setMinutes] = React.useState(30);
    const [city, setCity] = React.useState('');
    const [cityWeather, setCityWeather] = React.useState({});


    const title = typeModalReminder === 'newReminder' ? 'New reminder' : 'Edit Reminder';
    const buttonTitle = typeModalReminder === 'newReminder' ? 'create' : 'save';

    /**
     * this will set the default data
     */
    React.useEffect(() => {
        const { id, title, date, minutes, hour, color, city } = currentReminder;
        const dateParsed = date.split('-');
        setYear(dateParsed[0]);
        setMonth(dateParsed[1]);
        setDay(dateParsed[2]);
        setHour(hour);
        setMinutes(minutes);
        setCity(city);
        setIdReminder(id);
        setTitle(title);
        setColor(color);
        setCityWeather(currentCityWeather);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCityWeather, currentReminder]);

    React.useEffect(() => {
        setErrorsForm(errors);
        
    },[errors]);

    React.useEffect(() => {
        if (title.length > 30) {
            setTitle((prevTitle) => prevTitle.slice(0, 30));
        }
    }, [title]);

    React.useEffect(() => {
        console.log('city changed', city);
        if (city.length > 2) {

            searchCityWeather(city, `${year}-${month}-${day}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[city]);



    const onChangeCity = (city) => {
        setCity(city);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!errorsForm) {
            const reminder = {
                title,
                day,
                year,
                month,
                hour,
                minutes,
                color,
                city,
                idReminder,
            }
            onSubmitReminder(reminder)
        }
    }


    return {
        stateForm: {
            showModal,
            titleReminder,
            title,
            day,
            year,
            month,
            hour,
            minutes,
            color,
            city,
            cityWeather,
            idReminder,
            buttonTitle,
            errorsForm
        },
        eventsForm: {
            setTitle,
            setYear,
            setDay,
            setHour,
            setMonth,
            setMinutes,
            onChangeCity,
            setColor,
            onSubmit,
            onClose
        }
    }
}