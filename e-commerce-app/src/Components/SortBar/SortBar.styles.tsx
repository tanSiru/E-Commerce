import styled from 'styled-components';

export const Wrapper = styled.div`
    width:80px;
    height:80px;
    margin-left:20px;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`;

export const Option = styled.li`
    width:100%;
    height:35px;
    border-radius: 10px;
    border:1px solid black;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:10px;
    margin-top:10px;
`;