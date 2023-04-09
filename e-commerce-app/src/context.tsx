import {Dispatch, SetStateAction, createContext} from 'react'
interface IMenuContext {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    }


export const MyContext = createContext<IMenuContext>({
    filter:'all',
    setFilter:()=>{}
    });