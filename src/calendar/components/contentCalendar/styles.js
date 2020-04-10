import styled from 'styled-components';

export const DaysWeekStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(${ ({ columns }) => columns }, 1fr);
   
`;

export const DaysMonthStyles = styled.div`
    display: grid;
    grid-template-rows: repeat(7, 1fr);
`;

export const ContentCalendarStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(${ ({ columns }) => columns }, 1fr);
 
`;
