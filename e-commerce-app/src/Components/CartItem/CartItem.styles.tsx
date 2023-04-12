import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:80px;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
    background-color: white;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
`;

export const ImgDiv = styled.div`
    width:100px;
    height:75px;
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

export const DetailDiv = styled.div`
    width:300px;
    height:70px;
    margin-left: auto; 
    margin-right: 5px; 
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border:1px solid black;
`;

export const ItemName = styled.div`
    width:100%;
    height:35px;
    font-weight: bold;
    color:purple;
    font-size:18px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    .text{
        width:100%;
        height:100%;
    }
`;

export const ItemPrice = styled.div`
    width:100%;
    height:35px;
    font-weight: bold;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size:18px;
    .text{
        width:100%;
        height:100%;
    }
`;

