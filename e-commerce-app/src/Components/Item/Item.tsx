import { useContext } from 'react';
import { MyContext } from '../../context';
import { Wrapper, Content, Img, ImgDiv, ItemDetail, Price } from './Item.styles'

type Props = {
    detail:string;
    alt:string;
    imgUrl:string;
    price:number;
}

    export default function Item({detail, alt, imgUrl, price}:Props) {
    const {filter} = useContext(MyContext)

    return (
        <Wrapper>
            <Content onClick={()=>console.log(filter)}>

                <ImgDiv >
                    <Img src={require("../../ProductImages/" + imgUrl)} alt={alt}/>
                </ImgDiv>

                <ItemDetail>
                    {detail}
                </ItemDetail>

                <Price>
                    ${price}
                </Price>

            </Content>
        </Wrapper>
    )
}
