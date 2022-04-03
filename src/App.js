
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Resturant from './Component/Resturant/Resturant';
import Order from './Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Resturant></Resturant>}></Route>
       <Route path='/home' element={<Resturant></Resturant>}></Route>
       <Route path='/order' element={<Order></Order>}></Route>
       <Route path='/product/:id' element={<Order></Order>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
