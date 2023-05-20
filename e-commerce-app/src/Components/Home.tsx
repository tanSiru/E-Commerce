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
    let copied = Object.assign({}, a);
    const [data,setData] = useState(copied)
    const [filter,setFilter] = useState<string>('plush')
    const [CartItems, setCartItems] = useState<CartProps[]>([])
    const [total,setTotal] = useState(0)
    const [dataFilter,setDataFilter] = useState('')


    function compareLowToHigh( a:any, b:any ) {
        if ( a.price < b.price ){
            return -1;
        }
        if ( a.price > b.price ){
            return 1;
        }
        return 0;
        }

        function compareHighToLow( a:any, b:any ) {
            if ( a.price < b.price ){
                return 1;
            }
            if ( a.price > b.price ){
                return -1;
            }
            return 0;
            }

    function handleSortLowToHigh(){
        let copy = data
        let temp = data[filter as keyof typeof data].sort(compareLowToHigh)
        setData({
            ...copy,
            [filter]:temp
        })
    }

    function handleSortHighToLow(){
        let copy = data
        let temp = data[filter as keyof typeof data].sort(compareHighToLow)
        setData({
            ...copy,
            [filter]:temp
        })
    }

    function sortReset(){
        setData(a)
    }

    

    const value = { filter,setFilter,CartItems, setCartItems,total,setTotal,dataFilter,setDataFilter,handleSortLowToHigh,handleSortHighToLow,data,sortReset};

    

    return (
        <>
        <MyContext.Provider value={value}>
            <TopBar/>
            <GridItem/>
        </MyContext.Provider>
        </>
    )
}
