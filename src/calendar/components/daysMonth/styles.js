import styled from 'styled-components';



export const Cell = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const DayStyles = styled.div`
    border: ${(props) => props.currentDay === 'today' ? '3px' : '1px'}  solid #00838f;
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
    display: grid;
    margin: 3px;
    border-radius: 10px;
    grid-template-rows: 25px;
`;

export const AddReminderStyle = styled.div`
    display: none;
    position: absolute;
    color: #4CAF50;
    top: 0;
    right: 3px;
`;
export const HeaderStyles = styled.div`
    position: relative;
    &:hover ${AddReminderStyle} {
        display: block;
    }
`;

