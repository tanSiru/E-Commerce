import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    margin-top:10%;
`;

export const Content = styled.div`
    display:flex;
    width:300px;
    height:350px;
    border:1px solid black;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
`;

export const ImgDiv = styled.div`
    width:70%;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    max-width:100%;
    max-height:200px;
`;


export const Img = styled.img`
    width:auto;
    height:auto;
    overflow:auto;
`;

export const Price = styled.div`
    width:100%;
    height:50px;
    background-color: red;

`