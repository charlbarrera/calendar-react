import styled from "styled-components";


export const FormGroup = styled.div`
    display: grid;
    grid-template-areas: 'title title title select'
                         'textArea textArea textArea textArea'
                         'date date . .'
                         'time time . .'
                         'city city . .'
                         '. . buttonsGroup buttonsGroup';

`;

export const TextArea = styled.div`
    grid-area: textArea;
`;

export const Date = styled.div`
    grid-area: date;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const Time = styled.div`
    grid-area: time;
`;

export const City = styled.div`
    grid-area: city;
`;

export const ButtonsGroup = styled.div`
    grid-area: buttonsGroup;
`;