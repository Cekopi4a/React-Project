import {Routes,Route, useNavigate} from 'react-router-dom'

import {AuthProvider} from './context/authContext'
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
import EditItem from './components/EditItem'



function App() {

  return (
    
    <div>
      <AuthProvider>
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
       <Route path='/edit/:id' element={<EditItem/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/cart/:id' element={<Cart/>} />
       
</Routes>
<Footer />
</AuthProvider>
    </div>
  )
}


export default App
