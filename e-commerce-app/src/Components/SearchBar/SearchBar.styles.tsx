import styled from 'styled-components';

export const Wrapper = styled.div`
    width:195px;
    height:65px;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
`;

export const Search  = styled.input.attrs({type:"text"})`
    width:100%;
    height:100%;
    background-color: black;
    border:1px solid white;
    color:white;
    font-size: 22px;

    :focus{
        outline:none;
        border:1px solid white;
    }
`;