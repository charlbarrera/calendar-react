import React from 'react';
import { CalendarStyles, DaysWeekStyles, DaysMonthStyles, Cell, DayStyles } from './styles.js';
import { MonthsComponent } from '../../calendar/components/months/index.js';
import { YearsComponent } from '../../calendar/components/years/index.js';
import { CalendarContainer } from '../../calendar/containers/Calendar/index.js';
import { DatesMonth } from '../../calendar/components/daysMonth/index.js';

export const CalendarPage = () => {



    return <CalendarContainer>
      {
        ({ events, state, columns, weekdayshort }) => {
          return  <CalendarStyles>
          <div  
            onClick={(e) => events.onPrev()}
            >
              {"<"}
            </div> 
            <div
                onClick={() => events.setShowMonthTable((prev) => !prev)}
            >
                {events.month()}
            </div>
            <div
                onClick={() => events.setshowYearTable()}
             >
                { events.year() }
            </div>
            <span onClick={e => {
                      events.onNext();
                    }}
              >
                {">"}
                </span>
            { state.showMonthTable && <MonthsComponent  
                data={state.allMonths}
                setMonth={events.setMonth}
                allMonths={state.allMonths}
            /> }
            {
                state.showYearTable && <YearsComponent 
                                    setYear={(year) => events.setYear(year)}
                                    year={events.year()}
                                />
            }
    
            {
                state.showDatesTable && <><DaysWeekStyles columns={columns}>
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
                    </>
            }
        </CalendarStyles>
        }
      }
    </CalendarContainer>

}
