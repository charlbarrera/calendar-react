import React from 'react';
import moment from 'moment';
import { Grid } from '../contentCalendar/styles';
import { Title, SubTitle } from '../../../globalStyles';

export const YearsComponent = (props) => {

    let months = [];
    let nextten = moment()
      .set("year", props)
      .add("year", 12)
      .format("Y");

     function getDates(startDate, stopDate) {
        let dateArray = [];
        let currentDate = moment(startDate);
        let nextDates = moment(stopDate);
        while (currentDate <= nextDates) {
          dateArray.push(moment(currentDate).format("YYYY"));
          currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
      }

      let twelveyears = getDates(props, nextten);

      twelveyears.map(data => {
        months.push(
          <td
            key={data}
            className="calendar-month"
            onClick={e => {
              props.setYear(data);
            }}
          >
            <span>{data}</span>
          </td>
        );
      });
      let rows = [];
      let cells = [];
  
      months.forEach((row, i) => {
        if (i % 3 !== 0 || i == 0) {
          cells.push(row);
        } else {
          rows.push(cells);
          cells = [];
          cells.push(row);
        }
      });
      rows.push(cells);
      let yearlist = rows.map((d, i) => {
        return <SubTitle style={{cursor: 'pointer'}}>
          <Grid key={d} columns={3} >{d}</Grid>;
        </SubTitle>
        
      });
  
      return (
        <table className="calendar-month">
          <div>
              <Title colSpan="4">Select a Year</Title>
          </div>
          <div>{yearlist}</div>
        </table>
      );
}