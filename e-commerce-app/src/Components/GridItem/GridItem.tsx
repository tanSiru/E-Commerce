import { Content, Wrapper } from './GridItem.styles'
import data from '../../itemdata.json'
import Item from '../Item/Item'


export default function GridItem() {
  return (
    <Wrapper>
        <Content>
          {data.manga.map((info:any,index)=><Item key={index} detail={info.itemDetail} alt={info.itemDetail} price={info.price} imgUrl={info.imgUrl}/>)}
        </Content>
    </Wrapper>
  )
}
