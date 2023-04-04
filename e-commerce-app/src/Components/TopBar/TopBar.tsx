import { Content, Wrapper } from './TopBar.styles'
import Cart from '../Cart/Cart'
import SearchBar from '../SearchBar/SearchBar'

export default function TopBar() {
  return (
    <Wrapper>
        <Content>
            <Cart/>
            <SearchBar/>
        </Content>
    </Wrapper>
  )
}
