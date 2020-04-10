import React from 'react';
import { HeaderCalendarStyles } from './styles';
export const HeaderCalendar = ({events}) => {
    return  <HeaderCalendarStyles>
                <div  
                onClick={(e) => events.onPrev()}
                >
                    {"<"}
                </div> 
                <div
                    onClick={() => events.setShowMonthTable()}
                >
                    {events.month()}
                </div>
                <div
                    onClick={() => events.setshowYearTable()}
                >
                    { events.year() }
                </div>
                <div onClick={e => {
                        events.onNext();
                        }}
                >
                    {">"}
                </div>
            </HeaderCalendarStyles>
  };