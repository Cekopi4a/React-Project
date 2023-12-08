import { useEffect,useState,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useParams, } from "react-router-dom"; 
import style from './ShopItemDetails.module.css'
import * as commentService from '../service/commentService'
import * as itemService from '../service/itemService'
import authContext from "../context/authContext";
import CartContext from "../context/cartContext";
import ShopItem from "./ShopItem";

const ShopItemDetails = () =>{
    const { username,userId } = useContext(authContext);
   const { id } = useParams();
   const [item,setItem] = useState([]);
   const [comments,setComments] = useState([]);
   const [latItem, setLatItem] = useState([]);
   const {addCart} =useContext(CartContext);
   const addUserId = userId;


   
   useEffect(() => {
       itemService.getLatest()
           .then(result => setLatItem(result));
   }, [])
   
   useEffect(() => {
    itemService.getOne(id)
    .then(result => { setItem(result)
    });
    
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

        setComments(state => [...state, {...newComment, author: { username } }]);
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
            <div className="lead"><div>Description:</div>
                {item.description}</div>
            <div className="d-flex">
               
                <button className="btn btn-outline-dark flex-shrink-0" onClick={() => addCart(id,item.brand,item.model,item.price,item.imageUrl,addUserId)} type="button">
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                </button>
                
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
        {comments.map(({id,text, owner:{ username }}) => (
        <li key={id}>
            <div>{username}:{text}</div>
        </li>
        ))}
    </ul>
    {comments.length === 0 && (
        <div>No comments.</div>
    )}
    </div>
    <div className="col">
    <h1 className={style.label}>Add new comment:</h1>
    <form onSubmit={addCommentHandler}>
        <textarea className={style.textarea} name="comment" placeholder="Comment...."></textarea>
        <input className={style.subBut} type="submit" value="Add Comment"/>
    </form>
    </div>
  </div>
</div>


<section className="py-5 bg-light">
    <h2 className="fw-bolder mb-4">Related products</h2>
    <div className="container px-4 px-lg-5 mt-5">
<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    {latItem.map(item => <ShopItem id={item._id} key={item.id}{...item} />)}
    </div>
    </div>
    </section>
    
</>
);
};

export default ShopItemDetails;