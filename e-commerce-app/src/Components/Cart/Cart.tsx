import React from 'react'
import { Content, Img, Wrapper } from './Cart.styles'

export default function Cart() {
    return (
    <Wrapper>
        <Content>
            <Img src={require('../../ProductImages/cart.png')} alt="CART"/>
        </Content>
    </Wrapper>
    )
}
