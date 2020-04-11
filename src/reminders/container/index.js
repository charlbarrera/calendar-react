import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { showReminder } from '../../redux/actions/calendar';
import moment from "moment";
import { setNewReminder } from "../../redux/actions/reminders";

export const ReminderContainer = ({ children }) => {
    const newReminder = useSelector(({ calendar }) => calendar.newReminder, shallowEqual);
    const reminders = useSelector(({ reminders }) => reminders.remindersData, shallowEqual);
    const dispatch = useDispatch();

    const onClose = (e) => {
        dispatch(showReminder(false));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { yearDate, monthDate, dayDate, hour, minutes, title } = e.target;
        const newDate = moment(`${yearDate.value}-${monthDate.value}-${dayDate.value}`).format("YYYY-MM-DD");
        const newReminder = {
            title: title.value,
            date: newDate,
            hour:  `${hour.value}:${minutes.value}:00`
        }

        dispatch(setNewReminder(newReminder));
        dispatch(showReminder(false));
    }

    return children({
        state: {
            newReminder,
        },
        events: {
            onClose,
            onSubmit
        }
    })
}