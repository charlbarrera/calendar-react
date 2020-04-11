import { SET_NEW_REMINDER, SHOW_MODAL_REMINDER, SET_TYPE_MODAL_REMINDER, UPDATE_REMINDER, SET_CURRENT_REMINDER } from "../constants";


const defaultState = {
    showModalReminder: false,
    typeModalReminder: '',
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
            return { ...state, remindersData: remindersUpdated }

        case SHOW_MODAL_REMINDER:
            const { showModalReminder } = action;
            return { ...state, showModalReminder };

        case SET_TYPE_MODAL_REMINDER:
            const { typeModalReminder } = action;
            return { ...state, typeModalReminder };

        case UPDATE_REMINDER:
            const { reminder: id } = action;
            const reminders = [...state.remindersData];
            const reminderIndex = reminders.findIndex((reminder) => reminder.id === id);
            const remindersDataUpdated = reminders.splice(reminderIndex, 1, reminder);
            return {
                ...state,
                remindersData: remindersDataUpdated
            }
        case SET_CURRENT_REMINDER:
            const { currentReminder } = action;
            return { ...state, currentReminder };
        default:
            return state;
    }
}