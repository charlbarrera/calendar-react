import moment from 'moment';
import { SET_DATE_OBJECT, SELECT_DAY, SET_TYPE_CONTENT, SET_ALL_MONTHS, NEW_REMINDER } from '../constants';


const defaultState = {
    dateObject: moment(),
    allMonths: moment.months(),
    selectedDay: null,
    typeContent: 'daysMonth',
    newReminder: false,
}

export default function calendarReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_DATE_OBJECT:
            const { dateObject } = action;
            return { ...state, dateObject };
        case SELECT_DAY:
            const { selectedDay } = action;
            return { ...state, selectedDay };
        case SET_TYPE_CONTENT:
            const { typeContent } = action;
            return { ...state, typeContent };
        case SET_ALL_MONTHS:
            const { allMonths } = action;
            return { ...state, allMonths };
        case NEW_REMINDER:
            const { newReminder } = action;
            return { ...state, newReminder };
        default:
            return state;
    }
}