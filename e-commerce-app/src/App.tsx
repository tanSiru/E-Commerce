import './App.css';
import TopBar from './Components/TopBar/TopBar';
import GridItem from './Components/GridItem/GridItem';
import {useState} from 'react'
import {MyContext} from './context'



function App() {
  const [filter,setFilter] = useState('plush')
  const value = { filter,setFilter};
  


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
