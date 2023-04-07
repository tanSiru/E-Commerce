import styled from 'styled-components';

export const Wrapper = styled.div`
    width:80px;
    height:80px;
    margin-left:20px;
`;

export const Content = styled.div`
    max-width: 100%;
    max-height: 100%;
`;

export const Img  = styled.img`
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const DropDown = styled.div`
    position:absolute;
    width: 200px;
    height:200px;
    background-color: white;
    border-radius: 10px;
    border:1px solid black;
    translate:20px -20px;
`;

export const Select = styled.ul`
    width:100%;
    height:100%;
    list-style-type: none;  
    /* overflow-y:auto; */
`;
export const Option = styled.li`
    width:200px;
    height:50px;
    background-color: red;
    border-radius: 10px;
`;

