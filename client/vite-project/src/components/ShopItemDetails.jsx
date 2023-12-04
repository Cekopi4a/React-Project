import { useEffect,useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useParams, } from "react-router-dom"; 
import style from './ShopItemDetails.module.css'
import * as commentService from '../service/commentService'
import * as itemService from '../service/itemService'
import authContext from "../context/authContext";

const ShopItemDetails = () =>{
   const { id } = useParams();
   const [item,setItem] = useState({});
   const [comments,setComments] = useState([]);
   const [items, setItems] = useState([]);

   
   useEffect(() => {
      itemService.getAll()
      .then(result => setItems(result));
   },[]);
   
   useEffect(() => {
    fetch(`http://localhost:3030/data/cars/${id}`)
    .then(res => res.json())
    .then(setItem);

    commentService.getAll(id)
    .then(setComments);
   },[id]);

   const addCommentHandler = async (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const newComment = await commentService.create(
        id,
        formData.get('comment') 
        );

        setComments(state => [...state,newComment]);
        console.log(newComment);
   };

    return(
<>
<section className="py-5">
<div className="container px-4 px-lg-5 my-5">
    <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item.imageUrl} alt="..." /></div>
        <div className="col-md-6">
            <div className="small mb-1">SKU: BST-498</div>
            <h1 className="display-5 fw-bolder">{item.brand} {item.model}</h1>
            <div className="fs-5 mb-5">
                <span className="text-decoration">${item.price}</span>
            </div>
            <p className="lead"><p>Description:</p>
                {item.description}</p>
            <div className="d-flex">
                <Link to={`/cart/${id}`}>
                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                </button>
                </Link>
            </div>
        </div>
    </div>
</div>
</section>



<div className="container text-center">
<div className="row">
<div className="col">
    <h1>Comments:</h1>
    <ul>
        {comments.map(({_id,username,text}) => (
        <li key={_id}>
            <p>{username}:{text}</p>
        </li>
        ))}
    </ul>
    {comments.length === 0 && (
        <div>No comments.</div>
    )}
    </div>
    <div className="col">
    <label className={style.label}>Add new comment:</label>
    <form onSubmit={addCommentHandler}>
        <textarea className={style.textarea} name="comment" placeholder="Comment...."></textarea>
        <input className="" type="submit" value="Add Comment"/>
    </form>
    </div>
  </div>
</div>


<section className="py-5 bg-light">
    <h2 className="fw-bolder mb-4">Related products</h2>
        <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={items.imageUrl} alt="..." />
            
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder">{items.brand} {items.model}</h5>
                    
                    ${items.price}
                </div>
            </div>
           
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="container text-center">
             <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary"><i className="bi bi-suit-heart-fill"></i></button>
                <Link to={`/shop/item/${id}`}><button className="btn btn-outline-primary"><i className="bi bi-eye-fill"></i></button></Link>
                <Link to={`/cart/${id}`}><button type="button" className="btn btn-outline-primary"><i className="bi bi-cart-fill"></i></button></Link>
               </div>
               </div>
            </div>
        </div>
    </div>
                    
            
                </div>
        </div>
    </section>
</>
);
};

export default ShopItemDetails;