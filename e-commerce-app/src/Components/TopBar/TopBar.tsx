import { Content, Wrapper } from './TopBar.styles'
import Cart from '../Cart/Cart'
import SearchBar from '../SearchBar/SearchBar'
import FilterBar from '../FilterBar/FilterBar'
import SortBar from '../SortBar/SortBar'




export default function TopBar() {
  return (
    <Wrapper>
        <Content>
            <Cart/>
            <SearchBar/>
            <FilterBar />
            <SortBar/>
        </Content>
    </Wrapper>
  )
}
