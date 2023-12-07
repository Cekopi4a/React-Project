import { useParams,Link } from "react-router-dom"; 
import { useContext } from "react";
import { useState,useEffect } from "react";
import CartContext from "../context/cartContext";
import CartItem from '../components/CartItem'
import * as itemService from '../service/itemService'

const Cart = () => {
    const {id}= useParams();
    const [itemCart,setItemCart] = useState([]);
   
    useEffect(() => {
        itemService.getOne(id)
        .then(result => setItemCart(result));
     },[id]);
    
    return(
        <>
        <h1>Cart Page</h1>
        <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
             {itemCart.map((item)=>(
             <CartItem 
             key={item._id}
             id={item._id}
             brand={item.brand}
             model={item.model}
             price={item.price}
             imageUrl={item.imageUrl}
             />
             ))}
         
               </div>
            </div>
                    
        </>
    );
};

export default Cart;