import { Outlet, Link } from "react-router-dom";
const ShopItem = ({
    _id,
    brand,
    model,
    price,
    imageUrl,
}) => {
    return(
     <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={imageUrl} alt="..." />
            
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder">{brand} {model}</h5>
                    
                    ${price}
                </div>
            </div>
           
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
             <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary"><i className="bi bi-suit-heart-fill"></i></button>
                <Link to={`/shop/item/${_id}`}><button className="btn btn-outline-primary"><i className="bi bi-eye-fill"></i></button></Link>
                <button type="button" className="btn btn-outline-primary"><i className="bi bi-cart-fill"></i></button>
               </div>
            </div>
        </div>
    </div>
    );
};

export default ShopItem;