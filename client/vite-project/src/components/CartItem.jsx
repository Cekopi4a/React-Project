import { Link, useParams } from "react-router-dom"
import { useContext } from "react";
import CartContext from "../context/cartContext";
import authContext from "../context/authContext";


const CartItem = ({
    id,
    brand,
    model,
    price,
    imageUrl,
    addUserId,
}) => {
    const {
        removeItem,
    } =useContext(CartContext);

    const {
		userId,
	   } = useContext(authContext);
    return(
<>
        {userId === addUserId &&(
        <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={imageUrl}  style={{height: "40%"}} alt="..." />
            
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder">{brand} {model}</h5>
                    
                    ${price}
                </div>
            </div>
            
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="container text-center">
             <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary"><i className="bi bi-suit-heart-fill"></i></button>
                <Link to={`/shop/item/${id}`}><button className="btn btn-outline-primary"><i className="bi bi-eye-fill"></i></button></Link>
                <button type="button" onClick={() => removeItem(id)} className="btn btn-outline-primary"><i className="bi bi-bag-x"></i></button>
               </div>
               </div>
            </div>
        </div>
    </div>
        )}
        </>
    )
}

export default CartItem;