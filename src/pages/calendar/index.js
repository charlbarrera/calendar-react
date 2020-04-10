import React from 'react';
import moment from 'moment';
import { CalendarStyles, DaysWeekStyles, DaysMonthStyles, Cell, DayStyles } from './styles.js';
import { MonthsComponent } from '../../calendar/components/months/index.js';
import { YearsComponent } from '../../calendar/components/years/index.js';

export const CalendarPage = () => {

const [dateObject, setDateObject] = React.useState(moment());
const [allMonths, setAllMoths] = React.useState(moment.months());
const [showMonthTable, setShowMonthTable] = React.useState(false);
const [showYearTable, setShowYearTable] = React.useState(false);

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

const year = () => {    
    return dateObject.format("Y");
 };

const setMonth = ({monthNo})  => {// get month number
    let newDateObject = Object.assign({}, dateObject);
    newDateObject = moment(newDateObject).set("month", monthNo); // change month value

    setDateObject(newDateObject);
    setShowMonthTable((show) => !show);
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
  };

let blanks = [];
for (let i = 0; i < firstDayOfMonth(); i++) {
  blanks.push(
    <div className="calendar-day empty">{""}</div>
  );
}

let daysInMonthArr = [];
for (let d = 1; d <= daysInMonth(); d++) {
    let currentDay = d == getCurrentDay() ? 'today' : '';
    daysInMonthArr.push(
    <DayStyles key={d} currentDay={currentDay}>
      {d}
    </DayStyles>
  );
}

const total = [...blanks, ...daysInMonthArr];
const rows = [];
let cells = [];

total.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows 
      cells = []; // empty container 
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === total.length - 1) { // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <Cell>{d}</Cell>;
  });

    return <CalendarStyles>
        <div
            onClick={() => setShowMonthTable((prev) => !prev)}
        >
            {month()}
        </div>
        <div
            onClick={() => setshowYearTable()}
         >
            { year() }
        </div>
        { showMonthTable && <MonthsComponent  
            data={allMonths}
            setMonth={setMonth}
            allMonths={allMonths}
        /> }
        {
            showYearTable && <YearsComponent 
                                setYear={(year) => setYear(year)}
                                year={year()}
                            />
        }

        {
            !showMonthTable && <><DaysWeekStyles columns={columns}>
                {
                    weekdayshort.map((day) => (
                        <div>{day}</div>
                    ))
                }
                </DaysWeekStyles>
                <DaysMonthStyles>
                    {daysinmonth}
                </DaysMonthStyles>
                </>
        }
    </CalendarStyles>

}
