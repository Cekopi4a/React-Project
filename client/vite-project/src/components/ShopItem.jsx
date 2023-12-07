import { Outlet, Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import authContext from '../context/authContext';
import CartContext from "../context/cartContext";

const ShopItem = ({
    id,
    brand,
    model,
    price,
    imageUrl,
}) => {
    const {
        isAuthenticated,
       } = useContext(authContext);

       const {addCart} =useContext(CartContext);
    return(
     <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={imageUrl}  style={{height: "40%"}} alt="..." />
            
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder">{brand} {model}</h5>
                    
                    ${price}
                </div>
            </div>
            {!isAuthenticated && (
                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                 <div className="container text-center">
                 <Link to='/login'>
                 <button type="button" className="btn btn-outline-primary">
                 Login to see details.
                    </button>
                    </Link>
                    </div>
                    </div>
            )}
            {isAuthenticated && (
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="container text-center">
             <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary"><i className="bi bi-suit-heart-fill"></i></button>
                <Link to={`/shop/item/${id}`}><button className="btn btn-outline-primary"><i className="bi bi-eye-fill"></i></button></Link>
                <button type="button" onClick={() => addCart(`${id}`)} className="btn btn-outline-primary"><i className="bi bi-cart-fill"></i></button>
               </div>
               </div>
            </div>)}
        </div>
    </div>
    );
};

export default ShopItem;