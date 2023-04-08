import {useState} from 'react'
import { Content, DropDown, Img, Option, Wrapper } from './FilterBar.styles'
import data from '../../itemdata.json'
var randomWords = require('random-words');

var words:string[] = [];
for(let i=0;i<11;i++){
    words.push(randomWords())
}

export default function FilterBar() {
    const [isOpen,setIsOpen] = useState(false)
    const [filter,setFilter] = useState("")

    function handleClose(){
        setIsOpen(!isOpen)
    }

    return (
    <Wrapper >
        <Content>
            <Img src={require("../../ProductImages/ougi.png")} alt="OUGI" onClick={handleClose}/>
            {isOpen && <DropDown>
                        {Object.keys(data).map((word,index)=><Option key={index} onClick={()=>setFilter(word)}>{word}</Option>)}

                </DropDown>}
        </Content>
    </Wrapper>
    )
}
