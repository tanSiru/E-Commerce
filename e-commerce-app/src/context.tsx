import {Dispatch, SetStateAction, createContext} from 'react'
import CartItem from './Components/CartItem/CartItem';

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
    }


export const MyContext = createContext<ContextProps>({
    filter:'plush',
    setFilter:()=>{},
    CartItems:[],
    setCartItems:Function,
    });