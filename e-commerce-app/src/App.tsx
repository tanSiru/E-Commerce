import './App.css';
import {useState} from 'react'
import {MyContext, CartProps} from './context'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemPage from './Components/ItemPage/ItemPage';
import Home from './Components/Home';


function App() {
  const [filter,setFilter] = useState('plush')
  const [CartItems, setCartItems] = useState<CartProps[]>([])
  const [total,setTotal] = useState(0)
  const [dataFilter,setDataFilter] = useState('')

  const value = { filter,setFilter,CartItems, setCartItems,total,setTotal,dataFilter,setDataFilter};

  function addCartItem(price:string,name:string,imgUrl:string,detail:string){
    let temp = {price,name,imgUrl,detail}
    setCartItems([...CartItems,temp])
  }
  


  return (
    <Router>
      <MyContext.Provider value={value}>
        <Home/>
      </MyContext.Provider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:itemID' element={<ItemPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
