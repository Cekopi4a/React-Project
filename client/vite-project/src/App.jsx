import {Routes,Route, useNavigate} from 'react-router-dom'
import { useState } from 'react'

import * as authService from './service/authService'
import authContext from './context/authContext'

import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import Admin from './components/Admin'
import UsersItems from './components/UsersItems'
import ShopItemDetails from './components/ShopItemDetails'
import ShopItem from './components/ShopItem'
import Register from './components/Register'
import Cart from './components/Cart'
import NoFound from './components/NotFound'
import Path from './path'



function App() {
const navigate = useNavigate();
const[auth,setAuth] = useState({});

const loginSubmitHandler = async (values) => {
   const result = await authService.login(values.email, values.password);

   setAuth(result);
   
   navigate(Path.Home)
}

  return (
    <authContext.Provider value={{loginSubmitHandler}}>
    <div>
<Navbar />
    <Routes>
      <Route path='*' element={<NoFound />} />
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/register' element={<Register />} />
       <Route path='/admin' element={<Admin />} />
       <Route path='/shop' element={<Shop />} />
       <Route path='/shop/item' element={<ShopItem />} />
       <Route path="/shop/item/:id" element={<ShopItemDetails />} />
       <Route path='/myItem' element={<UsersItems/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/cart/:id' element={<Cart/>} />
       
</Routes>
<Footer />

    </div>
</authContext.Provider>
  )
}


export default App
