import {useState, useContext} from 'react'
import { Content, Img, Wrapper } from './Cart.styles'
import Modal from '../Modal/Modal'
import CartItem from '../CartItem/CartItem';
import { MyContext } from '../../context';

export default function Cart() {
    const [isOpen,setIsOpen] = useState(false);
    const {CartItems} = useContext(MyContext)

    function onClose(){
        setIsOpen(false)
    }

    return (
    <Wrapper>
        <Content>
            <Img src={require('../../ProductImages/cart.png')} alt="CART" onClick={()=>setIsOpen(true)}/>
            <Modal open={isOpen} onClose={onClose}>
                Items:
                {CartItems.map((stuff,index)=><CartItem key={index} imgUrl={stuff.imgUrl} detail={stuff.detail} price={stuff.price}></CartItem>)}
        
            </Modal>
        </Content>
    </Wrapper>
    )
}
