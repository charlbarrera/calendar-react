import { SET_NEW_REMINDER, SHOW_MODAL_REMINDER, SET_TYPE_MODAL_REMINDER, UPDATE_REMINDER, SET_CURRENT_REMINDER, SET_CITY_WEATHER_ASYNC, GET_CITY_WEATHER, SET_ERROR_REMINDER_ASYNC } from "../constants";



export const setNewReminder = (reminder) => ({
    type: SET_NEW_REMINDER,
    reminder
})

/**
 * @param {Boolean} showModalReminder 
 */
export const showModalReminder = (showModalReminder) => ({
    type: SHOW_MODAL_REMINDER,
    showModalReminder
})


export const typeModalReminder = (typeModalReminder) => ({
    type: SET_TYPE_MODAL_REMINDER,
    typeModalReminder
})

export const updateReminder = (reminder) => ({
    type: UPDATE_REMINDER,
    reminder
})

export const setCurrentReminder = (currentReminder) => ({
    type: SET_CURRENT_REMINDER,
    currentReminder
})

export const getCityWeather = (payload) => ({
    type: GET_CITY_WEATHER,
    payload
})

export const setCityWeatherAsync = (payload) => ({
    type: SET_CITY_WEATHER_ASYNC,
    payload
})

export const setErrorReminderAsync = ({ type, message }) => ({
    type: SET_ERROR_REMINDER_ASYNC,
    errorAsync: {
        type,
        message
    }
})
