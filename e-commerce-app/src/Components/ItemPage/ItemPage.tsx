import { useItemId } from "../../hooks/useItemId";
import { Wrapper, Content } from "./ItemPage.styles";
import {useParams} from 'react-router-dom'

export default function ItemPage() {
    const itemID = useParams();
    const {state} = useItemId(itemID)

    return (
        <Wrapper>
            <Content>
                
            </Content>
        </Wrapper>

    )
}
