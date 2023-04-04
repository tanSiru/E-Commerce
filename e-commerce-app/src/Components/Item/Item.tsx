import { Wrapper, Content, Img, ImgDiv, ItemDetail, Price } from './Item.styles'

    export default function Item() {
    return (
        <Wrapper>
            <Content>

                <ImgDiv>
                    <Img src={require("../../ProductImages/cirnofumo.png")} alt="product"/>
                </ImgDiv>

                <ItemDetail>
                    Fumo Plush
                </ItemDetail>

                <Price>
                    $999999
                </Price>

            </Content>
        </Wrapper>
    )
}
