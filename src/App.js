import { useEffect, useState } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavbarComp from './components/NavbarComp';
import Cards from './Card';
import { Detail } from './components/Detail';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';



function App() {

  return (
    <div className="App">
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
