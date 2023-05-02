import {useEffect, useState} from 'react';
import data from '../itemdata.json'



export const useItemId = (itemId:any) => {
    const [state,setState] = useState({})
    
    useEffect(()=>{
        data['all'].filter((stuff)=>{
            return stuff.id === Number(itemId['itemID'])
        }).map((stuff)=>
            setState(stuff)
            )
    })
    return {state}
}