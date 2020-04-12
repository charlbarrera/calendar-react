import React from 'react';
import { Grid } from '../contentCalendar/styles';
import { MonthStyles } from './styles';
import { Title, SubTitle } from '../../../globalStyles';

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
          <div
          key={data}
          className="calendar-month"
          onClick={e => {
              setMonth(data);
            }}
            >
          <span>{data}</span>
        </div>
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
        return <SubTitle key={d} style={{cursor: 'pointer'}}>
                  <Grid columns={3} >
                      {d}
                  </Grid>
              </SubTitle>;
    });
    


     return (
        <MonthStyles className="calendar-month">
          <div>
            <Title>Select a Month</Title>
          </div>
          <div >{monthlist}</div>
        </MonthStyles>
      );
}