import React from 'react';
import moment from 'moment';





export const CalendarContainer = ({ children }) => {
    const [dateObject, setDateObject] = React.useState(moment());
    const [allMonths, setAllMoths] = React.useState(moment.months());
    const [showMonthTable, setShowMonthTable] = React.useState(false);
    const [showYearTable, setShowYearTable] = React.useState(false);
    const [showDatesTable, setShowDatesTable] = React.useState(false);
    const [selectedDay, setSelectedDay] = React.useState(null);


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
  let curr = "";
  if (showYearTable == true) {
    curr = "year";
  } else {
    curr = "month";
  }
  newDateObject = moment(newDateObject).subtract(1, curr);
  setDateObject(newDateObject);

}

const onNext = () => {
  let newDateObject = Object.assign({}, dateObject);
  let curr = "";
  if (showYearTable == true) {
    curr = "year";
  } else {
    curr = "month";
  }
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
    setShowMonthTable((show) => !show);
    setShowDatesTable((show) => !show);
};

const setshowYearTable = () => {
    setShowYearTable((prev) => !prev)
    setShowMonthTable((prev) => !prev);
}

const setYear = year => {
    // alert(year)
    let newdateObject = Object.assign({}, dateObject);
    newdateObject = moment(newdateObject).set("year", year);
    setDateObject(newdateObject);
    setShowMonthTable((show) => !show);
    setShowYearTable((show) => !show);
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
        showMonthTable,
        showDatesTable,
        selectedDay
    },
    columns,
    weekdayshort,
  })

}