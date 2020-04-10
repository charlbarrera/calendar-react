import React from 'react';
import { CalendarStyles } from './styles.js';
import { CalendarContainer } from '../../calendar/containers/Calendar/index.js';
import { HeaderCalendar } from '../../calendar/components/headerCalendar/index.js';
import { ContentCalendar } from '../../calendar/components/contentCalendar/index.js';

export const CalendarPage = () => {



    return <CalendarContainer>
            {
              ({ events, state, columns, weekdayshort }) => {
                return  <CalendarStyles>
                            <HeaderCalendar events={events} />
                            <ContentCalendar 
                              events={events}
                              state={state}
                              columns={columns}
                              weekdayshort={weekdayshort}
                            />
                      </CalendarStyles>
              }
            }
          </CalendarContainer>

}
