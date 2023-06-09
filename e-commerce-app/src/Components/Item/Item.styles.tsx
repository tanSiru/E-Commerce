import styled from 'styled-components';

export const Wrapper = styled.div`  
    width:175px;
    height:250px;
    margin-left:50px;

`;

export const Content = styled.div`
    width:100%;
    height:100%;
    border:1px solid black;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const ImgDiv = styled.div`
    width:100%;
    height:150px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    max-width:100%;
    max-height:100px;
`;


export const Img = styled.img`
    width:auto;
    height:auto;
    overflow:auto;
`;

export const ItemDetail = styled.div`
    width:100%;
    height:45px;
    margin-top: 5px;
    text-align: center;
`;

export const Price = styled.div`
    width:100%;
    height:50px;
    text-align: center;
    font-weight:50px;
`;

export const AddItem = styled.button`
    width:50px;
    height:50px;
    border-radius: 25%;
    border: 1px solid black;
    font-weight:bold;
    margin-bottom:5px;
    background-color: white;
    /* :focus{ border: none; } */
`;