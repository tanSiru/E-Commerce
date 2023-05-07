import TopBar from './TopBar/TopBar';
import GridItem from './GridItem/GridItem';
import { useState } from 'react';
import { CartProps, MyContext } from '../context';
import data from '../itemdata.json'

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
    const [sortedData,setSortedData] = useState([])

    function handleSortLowToHigh(){
        let temp = data[filter as keyof typeof data]
        for(var item in temp){
            console.log(temp[item])
        }
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
