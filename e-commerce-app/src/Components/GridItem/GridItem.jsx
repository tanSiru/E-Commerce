import { Content, Wrapper } from './GridItem.styles'
import Item from '../Item/Item'
import {useState,useContext, useEffect} from 'react';
import { MyContext } from '../../context';


export default function GridItem(){
  const {filter, setFilter,dataFilter, data} = useContext(MyContext)
  const [stuff,_] = useState(filter)
  const [cur,setCur] =  useState(true)
  
  useEffect(()=>{
    if(cur){
      setFilter(stuff)
      setCur(false)
    }
  },[cur, setFilter, stuff])


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
