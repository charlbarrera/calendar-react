import React from 'react';
import moment from 'moment';





export const CalendarContainer = ({ children }) => {
    const [dateObject, setDateObject] = React.useState(moment());
    const [allMonths, setAllMoths] = React.useState(moment.months());
    const [selectedDay, setSelectedDay] = React.useState(null);
        
    const [typeContent, setTypeContent] = React.useState('daysMonth')


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

const getCurrentDay = () => {  
    return dateObject.format("D");
};

const month = () => {
   return dateObject.format("MMMM");
};

const onPrev = () => {
  let newDateObject = Object.assign({}, dateObject);
  let curr = typeContent === 'daysMonth' ? 'month' : typeContent;
  newDateObject = moment(newDateObject).subtract(1, curr);
  setDateObject(newDateObject);

}

const onNext = () => {
  let newDateObject = Object.assign({}, dateObject);
  let curr = typeContent === 'daysMonth' ? 'month' : typeContent;
  newDateObject = moment(newDateObject).add(1, curr)
    setDateObject(newDateObject);

}

const year = () => {    
    return dateObject.format("Y");
 };

const setMonth = ({monthNo})  => {// get month number
    let newDateObject = Object.assign({}, dateObject);
    newDateObject = moment(newDateObject).set("month", monthNo); // change month value

    setDateObject(newDateObject);
    setTypeContent((prevType) => prevType !== 'month' ? 'month' : 'daysMonth')
};

const setshowYearTable = () => {
    setTypeContent((prevType) => prevType !== 'year' ? 'year' : 'months')
}

const setShowMonthTable = () => {
    setTypeContent((prevType) => prevType !== 'month' ? 'month' : 'daysMonth')
}

const setYear = year => {
    // alert(year)
    let newdateObject = Object.assign({}, dateObject);
    newdateObject = moment(newdateObject).set("year", year);
    setDateObject(newdateObject);
    setTypeContent('month');
  };


const onDayClick = (e, day) => {
  setSelectedDay(day);
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
    },
    state: {
        allMonths,
        selectedDay,
        typeContent
    },
    columns,
    weekdayshort,
  })

}