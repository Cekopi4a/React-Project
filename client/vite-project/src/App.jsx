import {Routes,Route, useNavigate} from 'react-router-dom'
import { useState } from 'react'

import * as authService from './service/authService'
import authContext from './context/authContext'
import Path from './path'

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
import Logout from './components/Logout'



function App() {
const navigate = useNavigate();
const[auth,setAuth] = useState(() => {
  localStorage.removeItem('accessToken');

  return{};
});


const loginSubmitHandler = async (values) => {
   const result = await authService.login(values.email, values.password,values.username);

   setAuth(result);
   localStorage.setItem('accessToken',result.accessToken);
   navigate(Path.Home);
}

const registerSubmitHandler = async (values) => {
 const result = await authService.register(values.email,values.password);

 setAuth(result);
 localStorage.setItem('accessToken',result.accessToken);
   navigate(Path.Home);
}

const logoutHandler = () => {
  setAuth({});
  localStorage.removeItem('accessToken');
}

const values = {
  logoutHandler,
  loginSubmitHandler,
  registerSubmitHandler,
  userId: auth.userId,
  username: auth.username,
  email: auth.email,
  firstName:auth.firstName,
  lastName:auth.lastName,
  isAuthenticated: !!auth.accessToken,
}

  return (
    
    <div>
      <authContext.Provider value={values}>
<Navbar />
    <Routes>
      <Route path='*' element={<NoFound />} />
       <Route path={Path.Home} element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/register' element={<Register />} />
       <Route path={Path.Logout} element={<Logout />} />
       <Route path='/admin' element={<Admin />} />
       <Route path='/shop' element={<Shop />} />
       <Route path='/shop/item' element={<ShopItem />} />
       <Route path="/shop/item/:id" element={<ShopItemDetails />} />
       <Route path='/myItem' element={<UsersItems/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/cart/:id' element={<Cart/>} />
       
</Routes>
<Footer />
</authContext.Provider>
    </div>
  )
}


export default App
