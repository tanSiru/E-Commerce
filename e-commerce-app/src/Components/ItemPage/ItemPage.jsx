import { useItemId } from "../../hooks/useItemId";
import { Wrapper, Content, Img, ImgDiv,Price } from "./ItemPage.styles";
import {useParams} from 'react-router-dom'


export default function ItemPage() {
    const itemID = useParams();
    const {state} = useItemId(itemID)
    

    return (
        <Wrapper>
            <Content>
                {state.kind &&
                <ImgDiv >
                    <Img src={require("../../ProductImages/" + state.imgUrl)} alt={state.imgUrl} />
                </ImgDiv>}
                {state.kind && 
                <Price>
                    {state.price}
                </Price>}

            </Content>
        </Wrapper>

    )
}
