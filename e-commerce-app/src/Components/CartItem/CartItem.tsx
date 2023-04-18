import { Wrapper, Content, Img, ImgDiv, DetailDiv, ItemPrice, ItemName } from './CartItem.styles'

interface Props{
    imgUrl:string;
    detail:string;
    price:string;
}

export default function CartItem({imgUrl, detail, price}:Props) {
    
       
    return (
        <Wrapper>
            <Content>
                <ImgDiv >
                    <Img src={require("../../ProductImages/" + imgUrl )} alt={"ITEM"}/>
                </ImgDiv>
                <DetailDiv>
                    <ItemName>
                        <div>
                            {detail}
                        </div>
                    </ItemName>

                    <ItemPrice>
                        <div>
                            ${price}
                        </div>
                    </ItemPrice>
                </DetailDiv>

                
            </Content>
        </Wrapper>
    )
}
