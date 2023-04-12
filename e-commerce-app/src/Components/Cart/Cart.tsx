import {useState} from 'react'
import { Content, Img, Wrapper } from './Cart.styles'
import Modal from '../Modal/Modal'
import CartItem from '../CartItem/CartItem';

export default function Cart() {
    const [isOpen,setIsOpen] = useState(false);

    function onClose(){
        setIsOpen(false)
    }

    return (
    <Wrapper>
        <Content>
            <Img src={require('../../ProductImages/cart.png')} alt="CART" onClick={()=>setIsOpen(true)}/>
            <Modal open={isOpen} onClose={onClose}>
                Items:
                <CartItem/>
        
            </Modal>
        </Content>
    </Wrapper>
    )
}
