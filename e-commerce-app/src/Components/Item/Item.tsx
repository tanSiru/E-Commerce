import { useContext } from 'react';
import { MyContext } from '../../context';
import { Wrapper, Content, Img, ImgDiv, ItemDetail, Price, AddItem } from './Item.styles'

type Props = {
    detail:string;
    alt:string;
    imgUrl:string;
    price:number;
}

    export default function Item({detail, alt, imgUrl, price}:Props) {
    const {setCartItems,CartItems,total,setTotal} = useContext(MyContext)

    function handleAddCartItem(){
        let temp = {price,imgUrl,detail}
        setCartItems([...CartItems,temp])
        setTotal(total+price)
    }

    return (
        <Wrapper>
            <Content>

                <ImgDiv >
                    <Img src={require("../../ProductImages/" + imgUrl)} alt={alt}/>
                </ImgDiv>

                <ItemDetail>
                    {detail}
                </ItemDetail>

                <Price>
                    ${price}
                </Price>
                <AddItem onClick={handleAddCartItem}>Add to carrt</AddItem>
            </Content>
        </Wrapper>
    )
}
