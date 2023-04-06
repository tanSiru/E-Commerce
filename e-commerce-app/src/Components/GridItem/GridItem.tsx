import { Content, Wrapper } from './GridItem.styles'
import data from '../../itemdata.json'
import Item from '../Item/Item'


export default function GridItem() {
  // data.plush.map((info:any,index)=>console.log(info.imgUrl))

  return (
    <Wrapper>
        <Content>
          {data.plush.map((info:any,index)=><Item detail={info.itemDetail} alt={info.itemDetail} price={info.price} imgUrl={info.imgUrl}/>)}

            
        </Content>
    </Wrapper>
  )
}
