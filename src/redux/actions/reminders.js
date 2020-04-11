import { SET_NEW_REMINDER, SHOW_MODAL_REMINDER, SET_TYPE_MODAL_REMINDER, UPDATE_REMINDER, SET_CURRENT_REMINDER } from "../constants";



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