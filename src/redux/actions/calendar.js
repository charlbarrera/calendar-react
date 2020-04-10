import { SET_DATE_OBJECT, SELECT_DAY, SET_TYPE_CONTENT, SET_ALL_MONTHS } from "../constants"


export const setDateObject = ({dateObject}) => {
    console.log('-------dateObject', dateObject);
    return {
        type: SET_DATE_OBJECT,
        dateObject
    }
}

export const selectDay = ({selectDay}) => ({
    type: SELECT_DAY,
    selectDay
})

export const setTypeContent = (typeContent) => ({
    type: SET_TYPE_CONTENT,
    typeContent
})

export const setAllMonths = ({allMonths}) => ({
    type: SET_ALL_MONTHS,
    allMonths
})