import styled from 'styled-components';

export const Wrapper = styled.div`
    height:60px;
    width:60px;
    margin-right: 50px;
`;

export const Content = styled.div`
    height:100%;
    width:100%;
`;

export const Img = styled.img`
    height:100%;
    width:100%;
`;

export const CartItemDiv = styled.div`
    height:70%;
    width:100%;
    overflow-y: auto;
`;

export const CartItemDetailDiv = styled.div`
    height:20%;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
`;

export const PriceDetailDiv = styled.div`
    height:100%;
    width:50%;
    align-self:flex-start;

`;

export const CountDetailDiv = styled.div`
    height:100%;
    width:50%;
    align-self:flex-end;
`;
