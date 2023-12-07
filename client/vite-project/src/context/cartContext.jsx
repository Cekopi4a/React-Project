import { createContext } from "react";
import { useState,useEffect } from "react";
import * as itemService from '../service/itemService'
import { useParams, } from "react-router-dom"; 
import { addCart } from "../service/itemService";

const CartContext = createContext();

CartContext.displayName = 'CartContext';

export const AddCartContext = ({
    children,
}) => {
    const { id } = useParams();
    const [cart,setCart] = useState([]);
    const [cartItem,setCartItem] = useState(0);


    

const addCart = () => {
    

    //const itemData = itemService.getOne(id).then(result => itemData);

	//const result = await addCart(itemData);

    //setCart(cart => [...cart,result]);
    setCartItem(cartItem + 1);
}

const removeItem = () => {
    setCartItem(cartItem - 1);
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