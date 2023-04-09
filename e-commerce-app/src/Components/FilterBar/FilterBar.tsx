import {useContext, useState,useEffect} from 'react'
import { Content, DropDown, Img, Option, Wrapper } from './FilterBar.styles'
import data from '../../itemdata.json'
import { MyContext } from '../../context';
var randomWords = require('random-words');



var words:string[] = [];
for(let i=0;i<11;i++){
    words.push(randomWords())
}

export default function FilterBar() {
    const [isOpen,setIsOpen] = useState(false)
    const [newFilter,setNewFilter] = useState('')
    const {filter,setFilter} = useContext(MyContext)

    useEffect(()=>{
        setFilter(newFilter)
        setNewFilter(newFilter)
        setFilter(newFilter)
    }, [setFilter, newFilter, filter])


    function handleClose(){
        setIsOpen(!isOpen)
    }

    function handleFilter(newVal:string){
        setNewFilter(newVal)
    }

    return (
    <Wrapper >
        <Content>
            <Img src={require("../../ProductImages/ougi.png")} alt="OUGI" onClick={handleClose}/>
            {isOpen && 
                <DropDown>
                    {Object.keys(data).map((word,index)=><Option key={index} onClick={()=>handleFilter(word)}>{word}</Option>)}
                </DropDown>
            }
        </Content>
    </Wrapper>
    )
}
