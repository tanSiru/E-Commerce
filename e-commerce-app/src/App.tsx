import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemPage from './Components/ItemPage/ItemPage';
import Home from './Components/Home';


function App() {
  


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:itemID' element={<ItemPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
