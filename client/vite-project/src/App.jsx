import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'
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





function App() {
const[auth,setAuth] = useState({});

const loginSubmitHandler = (values) => {
     console.log(values);
}

  return (
    <div>
<Navbar />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
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
  )
}


export default App
