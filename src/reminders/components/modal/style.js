import styled from "styled-components";



export const ModalLayoutStyles = styled.div`
    position: absolute;
    padding: 20px;
    width: 500px;
    height: 300px;
    top: 200px;
    left: 35%; 
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0,0,0,.23), 0 3px 10px rgba(0,0,0,.16);
    border-radius: 10px;
    border: 5px solid ${({borderColor}) => borderColor ? borderColor : '#e3e3e3'};
`;