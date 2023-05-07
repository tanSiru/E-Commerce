import {Dispatch, SetStateAction, createContext} from 'react'

export interface CartProps{
    price:string;
    detail:string;
    imgUrl:string;
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
    });