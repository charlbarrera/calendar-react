import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { setDateObject, setTypeContent, selectDay, showReminder } from '../../../redux/actions/calendar';



export const CalendarContainer = ({ children }) => {
const dateObject = useSelector(({ calendar }) => calendar.dateObject, shallowEqual);
const typeContent = useSelector(({ calendar }) => calendar.typeContent, shallowEqual);
const selectedDay = useSelector(({ calendar }) => calendar.selectedDay, shallowEqual);
const allMonths = useSelector(({ calendar }) => calendar.allMonths, shallowEqual);


const reminders = useSelector(({ reminders }) => reminders.remindersData, shallowEqual);


const dispatch = useDispatch();


// days of the week
const weekdayshort = moment.weekdaysShort();
const columns = weekdayshort.length;

// first weekday
const firstDayOfMonth = () => {
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
   return firstDay;
};

const daysInMonth = () => {
    return moment(dateObject).daysInMonth();
};

const getRemindersDate = (day) => {
  const month = dateObject.month();
  const year = dateObject.year();
  const momentA = moment(`${year}-${month}-${day}`).format("YYYY-MM-DD");
  console.log('-------momenta', momentA);
  return reminders.filter((reminder) => {
    const { date } = reminder;
    console.log('momentb', date);
    if (momentA === date) {
      console.log('****momenta', momentA);
      return reminder;
    }
  })
}

const getCurrentDay = () => {  
    const day = dateObject.day();
    const month = dateObject.month();
    const year = dateObject.year();
    return dateObject.format("D");
};

const month = () => {
   return dateObject.format("MMMM");
};

const onPrev = () => {
  let newDateObject = Object.assign({}, dateObject);
  let curr = typeContent === 'daysMonth' ? 'month' : typeContent;
  newDateObject = moment(newDateObject).subtract(1, curr);

  dispatch(setDateObject({dateObject: newDateObject}));
}

const onNext = () => {
  let newDateObject = Object.assign({}, dateObject);
  let curr = typeContent === 'daysMonth' ? 'month' : typeContent;
  newDateObject = moment(newDateObject).add(1, curr);
  dispatch(setDateObject({dateObject: newDateObject}));

}

const year = () => {    
    return dateObject.format("Y");
 };

const setMonth = ({monthNo})  => {// get month number
    let newDateObject = Object.assign({}, dateObject);
    newDateObject = moment(newDateObject).set("month", monthNo); // change month value

    dispatch(setDateObject({dateObject: newDateObject}));
    dispatch(setTypeContent(typeContent !== 'month' ? 'month' : 'daysMonth'));
};

const setshowYearTable = () => {
    dispatch(setTypeContent(typeContent !== 'year' ? 'year' : 'months'));
}

const setShowMonthTable = () => {
   dispatch(setTypeContent(typeContent !== 'month' ? 'month' : 'daysMonth'));
}

const setYear = year => {
    // alert(year)
    let newDateObject = Object.assign({}, dateObject);
    newDateObject = moment(newDateObject).set("year", year);
    dispatch(setDateObject({dateObject: newDateObject}));
    dispatch(setTypeContent('month'));
  };


const onDayClick = (e, day) => {
  dispatch(selectDay(day));
  dispatch(showReminder(true));
}




  return children({
    events: {
        onDayClick,
        setYear,
        firstDayOfMonth,
        setshowYearTable,
        setShowMonthTable,
        setMonth,
        year,
        onNext,
        onPrev,
        month,
        getCurrentDay,
        daysInMonth,
        getRemindersDate
    },
    state: {
        allMonths,
        selectedDay,
        typeContent,
        reminders
    },
    columns,
    weekdayshort,
  })

}