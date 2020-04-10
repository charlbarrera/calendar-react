import styled from 'styled-components';



export const Cell = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const DayStyles = styled.div`
    background-color: ${(props) => props.currentDay === 'today' ? '#00838f' : '#fff'};
`;
