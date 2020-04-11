import { combineReducers } from "redux";
import calendar from './calendar';
import { remindersReducer } from './reminders';


export default function rootReducer() {
    return combineReducers({
        calendar,
        reminders: remindersReducer
    })
}