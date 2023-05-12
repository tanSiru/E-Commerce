import { Content, Wrapper } from './GridItem.styles'
import data from '../../itemdata.json'
import Item from '../Item/Item'
import {useState,useContext, useEffect} from 'react';
import { MyContext } from '../../context';


export default function GridItem(){
  const {filter, setFilter,dataFilter} = useContext(MyContext)
  const [stuff,_] = useState(filter)
  const [cur,setCur] =  useState(true)
  
  useEffect(()=>{
    if(cur){
      setFilter(stuff)
      setCur(false)
    }
  },[cur, setFilter, stuff])

  function lowToHigh(){
    let temp = data[filter]
    sortedData.sort(compare)
  }

  function compare( a:any, b:any ) {
    if ( a.price < b.price ){
        return -1;
    }
    if ( a.price > b.price ){
        return 1;
    }
    return 0;
    }

  return (
    <Wrapper>
        <Content>
          {dataFilter.length === 0 && data[filter].map((info,index)=><Item key={index} detail={info.itemDetail} alt={info.itemDetail} price={info.price} imgUrl={info.imgUrl} id={info.id}/>)}
          {dataFilter.length > 0 && data['all'].filter((stuff)=>{
            return dataFilter.toLowerCase() === ''
            ? stuff
            : stuff.itemDetail.toLowerCase().includes(dataFilter);
          }).map(
            (info,index)=><Item key={index} detail={info.itemDetail} alt={info.itemDetail} price={info.price} imgUrl={info.imgUrl} id={info.id}/>
            )}
        </Content>
    </Wrapper>
  )
}
