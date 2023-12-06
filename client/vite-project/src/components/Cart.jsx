import { useParams,Link } from "react-router-dom"; 
import { useState,useEffect } from "react";
import * as itemService from '../service/itemService'

const Cart = () => {
    const { id } = useParams();
    const {item,setItem} = useState([]);

    useEffect(() => {
        itemService.getOne(id)
        .then(result => { setItem(result)
        });
    },[id]);

    return(
        <>
        <h1>Cart Page</h1>
        <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src='' alt="..." />
            
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder"> </h5>
                    
                    $
                </div>
            </div>
           
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="container text-center">
             <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary"><i className="bi bi-suit-heart-fill"></i></button>
                <Link to={`/shop/item/${id}`}><button className="btn btn-outline-primary"><i className="bi bi-eye-fill"></i></button></Link>
               </div>
               </div>
            </div>
        </div>
    </div>
                    
            
                </div>
        </div>
        </>
    );
};

export default Cart;