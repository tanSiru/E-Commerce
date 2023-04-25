import {useContext} from 'react'
import { Wrapper, Content, Search } from './SearchBar.styles'
import { MyContext } from '../../context';

export default function SearchBar() {
    const {dataFilter,setDataFilter} = useContext(MyContext);

    function handleChange(e:any){
        setDataFilter(e.target.value)
    }

    return (
        <Wrapper>
            <Content>
                <Search onChange={handleChange} value={dataFilter}/>
            </Content>
        </Wrapper>
    )
}
