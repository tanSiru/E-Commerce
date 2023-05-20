import {Dispatch, SetStateAction, createContext} from 'react'
import PropTypes from 'prop-types';

export interface CartProps{
    price:string;
    detail:string;
    imgUrl:string;
}

export interface ItemProps{
    kind:string,
    itemDetail:string,
    price:number,
    imgUrl:string,
    id:number
}

//https://transform.tools/json-to-proptypes
type Data = {
    plush?:ItemProps[],
    manga?:ItemProps[],
    lightnovel?:ItemProps[],
    all?:ItemProps[],
    }
    

interface ContextProps {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    CartItems:CartProps[];
    setCartItems:Function;
    total:number;
    setTotal:Function;
    dataFilter:string;
    setDataFilter:Function;
    handleSortLowToHigh:Function;
    handleSortHighToLow:Function;
    sortReset:Function;
    data:Data;
    }


export const MyContext = createContext<ContextProps>({
    filter:'plush',
    setFilter:()=>{},
    CartItems:[],
    setCartItems:Function,
    total:0,
    setTotal:Function,
    dataFilter:'',
    setDataFilter:()=>{},
    handleSortLowToHigh:()=>{},
    handleSortHighToLow:()=>{},
    sortReset:()=>{},
    data:{plush:[]},
    });