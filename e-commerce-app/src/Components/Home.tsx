import TopBar from './TopBar/TopBar';
import GridItem from './GridItem/GridItem';
import { useState } from 'react';
import { CartProps, MyContext } from '../context';
import data from '../itemdata.json'
import {useEffect} from 'react';

interface ItemProps{
    kind:string;
    itemDetail:string;
    price:number;
    imgUrl:string;
    id:number;
}



export default function Home() {
    const [filter,setFilter] = useState('plush')
    const [CartItems, setCartItems] = useState<CartProps[]>([])
    const [total,setTotal] = useState(0)
    const [dataFilter,setDataFilter] = useState('')
    const [sortedData,setSortedData] = useState<any[]>([])

    useEffect(() =>{
        setSortedData(data[filter as keyof typeof data])
        sortedData.sort(compare)
    }, [filter, sortedData])  

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
        console.log(sortedData)
    }

    

    const value = { filter,setFilter,CartItems, setCartItems,total,setTotal,dataFilter,setDataFilter,handleSortLowToHigh};

    

    return (
        <>
        <MyContext.Provider value={value}>
            <TopBar/>
            <GridItem/>
        </MyContext.Provider>
        </>
    )
}
