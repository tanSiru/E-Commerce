import { Wrapper, Content } from "./ItemPage.styles";
import {useParams} from 'react-router-dom'

export default function ItemPage() {
    const itemID = useParams();
    console.log(itemID)

    return (
        <Wrapper>
            <Content>
                hh
            </Content>
        </Wrapper>

    )
}
