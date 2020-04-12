import { SET_NEW_REMINDER, SHOW_MODAL_REMINDER, SET_TYPE_MODAL_REMINDER, UPDATE_REMINDER, SET_CURRENT_REMINDER, SET_CITY_WEATHER_ASYNC, SET_ERROR_REMINDER_ASYNC } from "../constants";


const defaultState = {
    showModalReminder: false,
    typeModalReminder: '',
    errors: {},
    currentCityWeather: {
        city: '',
        date: '',
        weather: {}
    },
    currentReminder: {
        id: '',
        title: '',
        date: '',
        hour: 0,
        minutes: 0,
        city: ''
    },
    remindersData: [
        {
            id: '',
            title: '',
            date: {},
            hour: 0,
            minutes: 0,
            city: ''
        }
    ]
}


export const remindersReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_NEW_REMINDER:
            const { reminder } = action;
            const remindersUpdated = state.remindersData.concat(reminder);
            return { ...state, errors: null, remindersData: remindersUpdated }

        case SHOW_MODAL_REMINDER:
            const { showModalReminder } = action;
            return { ...state, showModalReminder };

        case SET_TYPE_MODAL_REMINDER:
            const { typeModalReminder } = action;
            return { ...state, errors: null, typeModalReminder };

        case UPDATE_REMINDER:
            const newReminder = action.reminder;
            const { id } = newReminder;
            const reminders = [...state.remindersData];
            const reminderIndex = reminders.findIndex((reminder) => reminder.id === id);
            reminders.splice(reminderIndex, 1, newReminder);
            return {
                ...state,
                errors: null,
                remindersData: reminders
            }
        case SET_CURRENT_REMINDER:
            const { currentReminder } = action;
            return { ...state, currentReminder };


        case SET_CITY_WEATHER_ASYNC:
            const { payload } = action;
            return {
                ...state,
                errors: null,
                currentCityWeather: payload
            };

        case SET_ERROR_REMINDER_ASYNC:
            const { errorAsync } = action;
            const newError = Object.assign({}, state.errors);
            newError[`${errorAsync.type}`] = errorAsync.message;
            return {
                ...state,
                errors: newError
            }
        default:
            return state;
    }
}