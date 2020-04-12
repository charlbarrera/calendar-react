import styled from 'styled-components';


export const ActionsReminder = styled.div`
    display: none;
    color: #fff;
    position: absolute;
    width: 100%;
    height: 20px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.47);
`;

export const ReminderLabel = styled.div`
    background-color: ${({ color }) => color ? color : '#fff'};
    color: ${({ color }) => color ? '#fff' : null};
    border-radius: 5px;
    display: grid;
    align-items: center;
    font-size: 11px;
    height: 20px;
    position: relative;
    &:hover ${ActionsReminder}{
                display: block;
        }
`;

export const TextReminder = styled.div`
    margin: auto;
`;

export const IconStyle = styled.div`
    color: #fff;
    border-radius: 50%;
    background-color: #FFEB3B;
    cursor: pointer;
    width: 15px;
    margin: auto;
`;