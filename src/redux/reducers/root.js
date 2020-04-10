import { combineReducers } from "redux";
import calendar from './calendar';


export default function rootReducer() {
    return combineReducers({
        calendar
    })
}