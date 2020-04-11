import { SET_DATE_OBJECT, SELECT_DAY, SET_TYPE_CONTENT, SET_ALL_MONTHS, NEW_REMINDER } from "../constants"


/**
 * the param is of type moment.js object
 */
export const setDateObject = ({ dateObject }) => {
    return {
        type: SET_DATE_OBJECT,
        dateObject
    }
}

/**
 * 
 * @param {number} selectedDay 
 */
export const selectDay = (selectedDay) => ({
    type: SELECT_DAY,
    selectedDay
})

/**
 * 
 * @param {string} typeContent 
 */

export const setTypeContent = (typeContent) => ({
    type: SET_TYPE_CONTENT,
    typeContent
})

/**
 * 
 * @param {Array<string>} param0 
 */
export const setAllMonths = ({allMonths}) => ({
    type: SET_ALL_MONTHS,
    allMonths
})


/**
 * @param {Boolean} newReminder 
 */
export const showReminder = (newReminder) => ({
    type: NEW_REMINDER,
    newReminder
})
