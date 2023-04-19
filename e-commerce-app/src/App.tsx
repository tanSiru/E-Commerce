import './App.css';
import TopBar from './Components/TopBar/TopBar';
import GridItem from './Components/GridItem/GridItem';
import {useState} from 'react'
import {MyContext, CartProps} from './context'



function App() {
  const [filter,setFilter] = useState('plush')
  const [CartItems, setCartItems] = useState<CartProps[]>([])
  const [total,setTotal] = useState(0)
  const value = { filter,setFilter,CartItems, setCartItems,total,setTotal};

  function addCartItem(price:string,name:string,imgUrl:string,detail:string){
    let temp = {price,name,imgUrl,detail}
    setCartItems([...CartItems,temp])
  }
  


  return (
    <div className="App">
      <MyContext.Provider value={value}>
        <TopBar/>
        <GridItem/>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
