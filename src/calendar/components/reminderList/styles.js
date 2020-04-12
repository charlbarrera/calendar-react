import styled from 'styled-components';


export const ActionsReminder = styled.div`
    display: none;
    color: #fff;
    position: absolute;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.47);
`;

export const ReminderLabel = styled.div`
    background-color: ${({ color }) => color ? color : '#fff'};
    margin: 3px;
    color: ${({ color }) => color ? '#fff' : null};
    box-shadow: 0 3px 10px rgba(0,0,0,.23), 0 3px 10px rgba(0,0,0,.16);
    border-radius: 5px;
    display: grid;
    align-items: center;
    font-size: 11px;
    height: 30px;
    position: relative;
    &:hover ${ActionsReminder}{
                display: block;
        }
`;

export const TextReminder = styled.div`
    margin: auto;
`;

export const IconStyle = styled.div`
    color: black;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    width: 15px;
    margin: auto;
`;