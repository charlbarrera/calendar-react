import React from 'react';
import { DayStyles, Cell } from './styles.js'
import { Grid } from '../contentCalendar/styles.js';


  export const DatesMonth = ({firstDayOfMonth, daysInMonth, getCurrentDay, onDayClick}) => {
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
          <div onClick={(e) => onDayClick(e, d)}>
            {d}
          </div>
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
  
    return rows.map((d, i) => {
      return <Grid columns={7} >{d}</Grid>;
    });
}