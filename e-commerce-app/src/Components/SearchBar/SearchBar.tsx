import {useState} from 'react'
import { Wrapper, Content, Search } from './SearchBar.styles'

export default function SearchBar() {
    const [text,setText] = useState("");

    function handleChange(e:any){
        setText(e.target.value)
    }

    return (
        <Wrapper>
            <Content>
                <Search onChange={handleChange} value={text}/>
            </Content>
        </Wrapper>
    )
}
