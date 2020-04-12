import React from 'react';
import { Input, TextField } from '@material-ui/core';
import { ModalComponent } from '../modal';
import { Button } from '@material-ui/core';
import { useReminderForm } from '../hooks/useReminderForm';
import ControlledOpenSelect from '../select';
import { Title } from '../../../globalStyles';
import { FormGroup, TextArea, Date, Time, City, ButtonsGroup } from './style';

const options = [
    { title: 'Teal', color: '#009688' },
    { title: 'Green', color: '#4CAF50' },
    { title: 'Purple', color: '#512DA8' },
    { title: 'Blue', color: '#536DFE' },
    { title: 'Red', color: '#D32F2F' },
    { title: ' Pink', color: '#FF4081' },
];

const CityWeather = ({ cityWeather, error }) => {
    if (!cityWeather) return null;
    if (error && error.weather) {
        return <div>{error.weather}</div>
    }
    return <div>{cityWeather.weather.main}</div>
}

export const ReminderLayout = ({ state, events }) => {
    const { stateForm, eventsForm } = useReminderForm(state, events);

    console.log('errors form', stateForm.errorsForm);
    return <ModalComponent borderColor={stateForm.color} open={stateForm.showModal} onClose={eventsForm.onClose} >
        <form
            onSubmit={eventsForm.onSubmit}
        >
            <FormGroup>
                <Title>{stateForm.title}</Title>
                <ControlledOpenSelect
                    title="color"
                    options={options}
                    onColorSelected={eventsForm.setColor}
                    defaultColor={stateForm.color}
                />
                <TextArea>
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
                    <p style={{ fontSize: 11 }}>(max 30 characters)</p>
                </TextArea>

                <Date>
                    <Input type="number" name="dayDate" color="primary" value={stateForm.year} onChange={(e) => eventsForm.setYear(e.target.value)} />
                    <Input name="monthDate" color="primary" value={stateForm.month} onChange={(e) => eventsForm.setMonth(e.target.value)} />
                    <Input type="number" name="yearDate" color="primary" value={stateForm.day} onChange={(e) => eventsForm.setDay(e.target.value)} />
                </Date>
                <Time>
                    <Input type="number" style={{ width: 45 }} name="hour" color="primary" value={stateForm.hour} onChange={(e) => eventsForm.setHour(e.target.value)} />hs : <Input style={{ width: 45 }} type="number" name="minutes" value={stateForm.minutes} onChange={(e) => eventsForm.setMinutes(e.target.value)} /> minutes
                </Time>

                <City>
                    <Input name="city" color="primary" value={stateForm.city} onChange={(e) => eventsForm.onChangeCity(e.target.value)} placeholder="city" />
                    <CityWeather error={stateForm.errorsForm} cityWeather={stateForm.cityWeather} />
                </City>
                <ButtonsGroup>
                    <Button type="button" onClick={eventsForm.onClose}>cancel</Button>
                    <Button type="onsubmit" style={{ backgroundColor: "#00838f" }} variant="contained" color="primary">{stateForm.buttonTitle}</Button>
                </ButtonsGroup>

            </FormGroup>
        </form>
    </ModalComponent>
}