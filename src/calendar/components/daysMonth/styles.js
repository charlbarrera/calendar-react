import styled from 'styled-components';



export const Cell = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const DayStyles = styled.div`
    border: ${(props) => props.currentDay === 'today' ? '3px solid #00838f' : '1px solid #00838f'};
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
    color: #3c4043;
    display: grid;
    margin: 3px;
    border-radius: 10px;
    border: 1px solid #00838f;
    grid-template-rows: 25px;
`;
