import { createContext } from "react";
import { useState,useEffect } from "react";
import * as itemService from '../service/itemService'
import { useNavigate, useParams, } from "react-router-dom"; 
import { useContext } from "react";
import authContext from "./authContext";


const CartContext = createContext();

CartContext.displayName = 'CartContext';

export const AddCartContext = ({
    children,
}) => {
    const [cart,setCart] = useState([]);
    const [cartItem,setCartItem] = useState(0);
    const navigate = useNavigate();


const addCart = async (id,brand,model,price,imageUrl,addUserId) => {

    console.log(id,brand,model,price,imageUrl,addUserId);

    const items = await itemService.addCart({id,brand,model,price,imageUrl,addUserId});

    setCart(state => [...state, {items,author: { }}]);

    console.log(items);

    setCartItem(cartItem + 1);
    navigate("/cart")
}

const removeItem = async (id) => {

    const items = await itemService.deleteCartItem(id);

    setCart(state => [...state, {items}]);
    console.log(items);

    setCartItem(cartItem - 1);
     navigate("/shop");
}

const values = {
    setCartItem,
    addCart,
    removeItem,
    cart,
    cartItem,
}

    return(
        <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
    )
};

export default CartContext;