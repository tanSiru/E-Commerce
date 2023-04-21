import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 1000;
`;

export const Content = styled.div`
    position: fixed;
    top:100px;
    left:50%;
    transform:translate(-50%, -50%);
    width:175px;
    height:75px;
    background-color:green;
    border-radius: 15px;
    z-index:1000; 
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
`;