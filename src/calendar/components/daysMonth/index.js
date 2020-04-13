import React from 'react';
import { DayStyles, Cell, HeaderStyles, AddReminderStyle } from './styles.js'
import { Grid } from '../contentCalendar/styles.js';
import { ReminderList } from '../reminderList/index.js';
import { IoIosAddCircleOutline } from 'react-icons/io';



export const DatesMonth = ({ firstDayOfMonth, daysInMonth, getCurrentDay, onAddReminder, onEditReminder, getRemindersDate }) => {
  let blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <div key={`blank-${i}`} className="calendar-day empty">{""}</div>
    );
  }

  let daysInMonthArr = [];
  for (let day = 1; day <= daysInMonth(); day++) {
    let currentDay = day == getCurrentDay() ? 'today' : '';
    const remindersDate = getRemindersDate(day);
    daysInMonthArr.push(
        <DayStyles key={`day-${day}`} currentDay={currentDay} >
          <HeaderStyles style={{ cursor: 'pointer' }} onClick={(e) => onAddReminder(e, day)}>
            {day}
            <AddReminderStyle>
              <IoIosAddCircleOutline />
            </AddReminderStyle>
          </HeaderStyles>
          <ReminderList remindersDate={remindersDate} onEditReminder={onEditReminder} />
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
    return <Grid key={`week-${i}`} columns={7} >{d}</Grid>;
  });
}