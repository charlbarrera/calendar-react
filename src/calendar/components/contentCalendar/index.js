import React from 'react';
import { MonthsComponent } from '../months';
import { YearsComponent } from '../years';
import { Grid } from './styles';
import { DatesMonth } from '../daysMonth';

export const ContentCalendar = ({ state, events, columns, weekdayshort }) => {
    switch (state.typeContent) {
        case 'month':
            return <Grid columns={1}>
                <MonthsComponent
                    data={state.allMonths}
                    setMonth={events.setMonth}
                    allMonths={state.allMonths}
                />
            </Grid>
        case 'year':
            return <Grid columns={1}>
                <YearsComponent
                    setYear={(year) => events.setYear(year)}
                    year={events.year()}
                />
            </Grid>
        default:
            return <>
                    <Grid columns={7}>
                        {
                            weekdayshort.map((day) => (
                                <div>{day}</div>
                            ))
                        }
                    </Grid>
                    <DatesMonth
                        firstDayOfMonth={events.firstDayOfMonth}
                        daysInMonth={events.daysInMonth}
                        getCurrentDay={events.getCurrentDay}
                        onAddReminder={events.onAddReminder}
                        getRemindersDate={events.getRemindersDate}
                    />
            </>
    }


}
