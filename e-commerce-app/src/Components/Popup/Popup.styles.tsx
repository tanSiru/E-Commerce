import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`;

export const Content = styled.div`
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:100px;
    height:100px;
    background-color:red;
    border-radius: 25px;
    z-index:1000; 
`;