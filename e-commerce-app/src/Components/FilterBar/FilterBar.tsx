import {useState} from 'react'
import { Content, DropDown, Img, Option, Select, Wrapper } from './FilterBar.styles'

export default function FilterBar() {
    const [isOpen,setIsOpen] = useState(false)

    return (
    <Wrapper onClick={()=>setIsOpen(!isOpen)}>
        <Content>
            <Img src={require("../../ProductImages/ougi.png")} alt="OUGI"/>
            {isOpen && <DropDown>
                    <Select>
                        <Option>test</Option>
                    </Select>
                </DropDown>}
        </Content>
    </Wrapper>
    )
}
