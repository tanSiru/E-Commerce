import { Content, Wrapper } from './GridItem.styles'
import data from '../../itemdata.json'
import Item from '../Item/Item'
import {useState,useContext, useEffect} from 'react';
import { MyContext } from '../../context';


export default function GridItem(){
  const {filter, setFilter} = useContext(MyContext)
  const [stuff,setStuff] = useState(filter)
  const [cur,setCur] =  useState(true)
  
  useEffect(()=>{
    if(cur){
      setFilter(stuff)
      setCur(false)
    }
  })


  return (
    <Wrapper>
        <Content>
          {data[filter].map((info,index)=><Item key={index} detail={info.itemDetail} alt={info.itemDetail} price={info.price} imgUrl={info.imgUrl}/>)}
        </Content>
    </Wrapper>
  )
}