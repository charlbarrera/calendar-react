import { SET_NEW_REMINDER } from "../constants";



export const setNewReminder = (reminder) => ({
    type: SET_NEW_REMINDER,
    reminder
})