import React from 'react';

export const HeaderCalendar = ({events}) => {
    return <>
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
    <span onClick={e => {
              events.onNext();
            }}
      >
        {">"}
      </span>
    </>
  };