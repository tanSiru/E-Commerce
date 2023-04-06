import { Wrapper, Content, Img, ImgDiv, ItemDetail, Price } from './Item.styles'

type Props = {
    detail:string;
    alt:string;
    imgUrl:string;
    price:number;
}

    export default function Item({detail, alt, imgUrl, price}:Props) {
        // console.log(imgUrl)
    return (
        <Wrapper>
            <Content>

                <ImgDiv>
                    <Img src={imgUrl} alt={alt}/>
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
