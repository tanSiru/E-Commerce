import { MyContext } from '../../context'
import { Wrapper, Content, Img, DropDown,Option } from './SortBar.styles'
import {useState, useContext} from 'react'

export default function SortBar() {
    const {handleSortLowToHigh} = useContext(MyContext)
    const [isOpen,setIsOpen] = useState(false)


    function handleClose(){
        setIsOpen(!isOpen)
    }

    

    return (
        <Wrapper>
            <Content>
                <Img src={require("../../ProductImages/hinata.png")} alt="HINATA" onClick={handleClose}/>
                {isOpen && 
                <DropDown>
                    <Option onClick={()=>handleSortLowToHigh()}>
                        {'Lowest -> Highest'}
                    </Option>
                    <Option>
                        {'Highest -> Lowest'}
                    </Option>
                </DropDown>
                }
            </Content>
        </Wrapper>
    )
}
