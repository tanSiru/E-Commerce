// import React from 'react'
import { Wrapper, Content, Img, ImgDiv, DetailDiv, ItemPrice, ItemName } from './CartItem.styles'

export default function CartItem() {
    return (
        <Wrapper>
            <Content>
                <ImgDiv >
                    <Img src={require("../../ProductImages/bake1.jpeg")} alt={"ITEM"}/>
                </ImgDiv>
                <DetailDiv>
                    <ItemName>
                        <div>
                            Bakemonogatari vol 1
                        </div>
                    </ItemName>

                    <ItemPrice>
                        <div>
                            $999
                        </div>
                    </ItemPrice>
                </DetailDiv>

                
            </Content>
        </Wrapper>
    )
}
