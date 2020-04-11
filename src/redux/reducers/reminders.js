import { SET_NEW_REMINDER } from "../constants";


const defaultState = {
    remindersData: [
        {
           title: '',
           date: {}
        }
    ]
}


export const remindersReducer = (state = defaultState, action) => {

    switch(action.type) {
        case SET_NEW_REMINDER:
            const { reminder } = action;
            
            const remindersUpdated = state.remindersData.concat(reminder);

            return { ...state, remindersData: remindersUpdated }
        default:
            return state;
    }
}