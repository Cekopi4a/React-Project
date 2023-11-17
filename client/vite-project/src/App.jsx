import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import Admin from './components/Admin'
import Item from './components/Item'
import UsersItems from './components/UsersItems'





function App() {
  return (
    <div>
<Navbar />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/shop' element={<Shop />} />
       <Route path='/login' element={<Login />} />
       <Route path='/admin' element={<Admin />} />
       <Route path='/shop/item' element={<Item />} />
       <Route path='/myItem' element={<UsersItems/>} />
</Routes>
<Footer />
    </div>
  )
}


export default App
