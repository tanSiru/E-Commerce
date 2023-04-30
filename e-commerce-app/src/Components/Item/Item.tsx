import { useContext,useState } from 'react';
import { MyContext } from '../../context';
import { Wrapper, Content, Img, ImgDiv, ItemDetail, Price, AddItem } from './Item.styles'
import Popup from '../Popup/Popup';
import {useNavigate} from 'react-router-dom';


type Props = {
    detail:string;
    alt:string;
    imgUrl:string;
    price:number;
    id:number;
}

    export default function Item({detail, alt, imgUrl, price,id}:Props) {
    const {setCartItems,CartItems,total,setTotal} = useContext(MyContext)
    const [isAlert,setIsAlert] = useState(false);

    const navigate = useNavigate();


    function handleAddCartItem(){
        setIsAlert(false)

        let temp = {price,imgUrl,detail}
        setCartItems([...CartItems,temp])
        setTotal(total+price)
        setIsAlert(true)
    }

    setTimeout(()=>{
        setIsAlert(false);
    },3000)

    return (
        <Wrapper>
            {isAlert && <Popup text={detail}/>}
            <Content>
                <ImgDiv >
                    <Img src={require("../../ProductImages/" + imgUrl)} alt={alt} onDoubleClick={()=>navigate(`/{id}`)}/>
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
