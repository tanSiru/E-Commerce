import TopBar from './TopBar/TopBar';
import GridItem from './GridItem/GridItem';
import { useState } from 'react';
import { CartProps, MyContext } from '../context';

export default function Home() {
    const [filter,setFilter] = useState('plush')
    const [CartItems, setCartItems] = useState<CartProps[]>([])
    const [total,setTotal] = useState(0)
    const [dataFilter,setDataFilter] = useState('')

    const value = { filter,setFilter,CartItems, setCartItems,total,setTotal,dataFilter,setDataFilter};

    return (
        <>
        <MyContext.Provider value={value}>
            <TopBar/>
            <GridItem/>
        </MyContext.Provider>
        </>
    )
}
