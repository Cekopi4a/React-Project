import { createContext } from "react";
import { useState,useEffect } from "react";
import * as itemService from '../service/itemService'
import { useParams, } from "react-router-dom"; 

const CartContext = createContext();

CartContext.displayName = 'CartContext';

export const AddCartContext = ({
    children,
}) => {
    const { id } = useParams();
    const [cart,setCart] = useState([]);
    const [cartItem,setCartItem] = useState(0);

    useEffect(() => {
        itemService.getAllCart()
        .then(result => setCart(result));
     },[]);

    const addItem = (id) =>{
    useEffect(() => {
        itemService.addCart(id)
        .then(result => setCart(result));
     },[]);
    }

    
const addCart = (id) => {
    setCartItem(cartItem + 1);
    setCart(addItem(id));
}

const values = {
    setCartItem,
    addCart,
    cartItem,
    brand: cart.brand,
    model: cart.model,
    imageUrl: cart.imageUrl,

}

    return(
        <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
    )
};

export default CartContext;