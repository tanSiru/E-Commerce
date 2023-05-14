import TopBar from './TopBar/TopBar';
import GridItem from './GridItem/GridItem';
import { useState } from 'react';
import { CartProps, MyContext } from '../context';
import a from '../itemdata.json'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ItemProps{
    kind:string;
    itemDetail:string;
    price:number;
    imgUrl:string;
    id:number;
}



export default function Home() {
    const [data,setData] = useState(a)
    const [filter,setFilter] = useState<string>('plush')
    const [CartItems, setCartItems] = useState<CartProps[]>([])
    const [total,setTotal] = useState(0)
    const [dataFilter,setDataFilter] = useState('')


    function compare( a:any, b:any ) {
        if ( a.price < b.price ){
            return -1;
        }
        if ( a.price > b.price ){
            return 1;
        }
        return 0;
        }

    function handleSortLowToHigh(){
        let copy = data
        let temp = data[filter as keyof typeof data].sort(compare)
        setData({
            ...copy,
            [filter]:temp
        })

    }

    

    const value = { filter,setFilter,CartItems, setCartItems,total,setTotal,dataFilter,setDataFilter,handleSortLowToHigh,data};

    

    return (
        <>
        <MyContext.Provider value={value}>
            <TopBar/>
            <GridItem/>
        </MyContext.Provider>
        </>
    )
}
