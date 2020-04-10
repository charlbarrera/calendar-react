import React from 'react';
import { MonthsComponent } from '../months';
import { YearsComponent } from '../years';
import { DaysWeekStyles, DaysMonthStyles, ContentCalendarStyles } from './styles';
import { DatesMonth } from '../daysMonth';

export const ContentCalendar = ({ state, events, columns, weekdayshort }) => {
    switch (state.typeContent) {
        case 'month':
            return <ContentCalendarStyles columns={4}>
                <MonthsComponent
                    data={state.allMonths}
                    setMonth={events.setMonth}
                    allMonths={state.allMonths}
                />
            </ContentCalendarStyles>
        case 'year':
            return <ContentCalendarStyles columns={3}>
                <YearsComponent
                    setYear={(year) => events.setYear(year)}
                    year={events.year()}
                />
            </ContentCalendarStyles>
        case 'daysMonth':
            return <ContentCalendarStyles>
                <DaysWeekStyles columns={columns}>
                    {
                        weekdayshort.map((day) => (
                            <div>{day}</div>
                        ))
                    }
                </DaysWeekStyles>
                <DaysMonthStyles>
                    <DatesMonth
                        firstDayOfMonth={events.firstDayOfMonth}
                        daysInMonth={events.daysInMonth}
                        getCurrentDay={events.getCurrentDay}
                        onDayClick={events.onDayClick}
                    />
                </DaysMonthStyles>
            </ContentCalendarStyles>
        default:
            return <ContentCalendarStyles>
                <DaysWeekStyles columns={7}>
                    {
                        weekdayshort.map((day) => (
                            <div>{day}</div>
                        ))
                    }
                </DaysWeekStyles>
                <DaysMonthStyles>
                    <DatesMonth
                        firstDayOfMonth={events.firstDayOfMonth}
                        daysInMonth={events.daysInMonth}
                        getCurrentDay={events.getCurrentDay}
                        onDayClick={events.onDayClick}
                    />
                </DaysMonthStyles>
            </ContentCalendarStyles>
    }


}
