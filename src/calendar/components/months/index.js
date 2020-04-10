import React from 'react';
import { Grid } from '../contentCalendar/styles';

export const MonthsComponent = (props) => {

    let rows = [];
    let cells = [];
     let months = [];

     const setMonth = (month) => {
        let monthNo = props.allMonths.indexOf(month);
        props.setMonth({monthNo})
    }

     
     props.data.map(data => {
      months.push(
          <td
          key={data}
          className="calendar-month"
          onClick={e => {
              setMonth(data);
            }}
            >
          <span>{data}</span>
        </td>
      );
    });
    
    months.forEach((row, i) => { 
        if (i % 3 !== 0 || i == 0) { // except zero index 
            cells.push(row); 
        } else { 
            rows.push(cells); 
            cells = [];
            cells.push(row); 
        }
    });
    rows.push(cells); 
    
    let monthlist = rows.map((d, i) => {
        return <Grid key={d} columns={3} >{d}</Grid>;
    });
    


     return (
        <table className="calendar-month">
          <thead>
            <tr>
              <th colSpan="4">Select a Month</th>
            </tr>
          </thead>
          <div >{monthlist}</div>
        </table>
      );
}