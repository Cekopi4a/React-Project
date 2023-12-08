import { useContext } from 'react';
import { Link } from 'react-router-dom' 
import authContext from '../context/authContext';
import CartContext from '../context/cartContext';
import style from './Navbar.module.css'

const Navbar = () => {
   const {
    isAuthenticated,
    username,
    firstName,
    email,
   } = useContext(authContext);

   const {cartItem} =useContext(CartContext);

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="/">Car Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
               
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/shop" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/shop">All Products</Link></li>
                        {isAuthenticated && (
                            <div> <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/myItem">My Item</Link></li>
                        </div>)}
                    </ul>
                </li> 
            </ul>


            <div className="d-flex">
            {!isAuthenticated && (
                    <>
                <span className="nav-item"><Link className="nav-link" to="/login">Login</Link></span>
            <span className="nav-item"><Link className="nav-link" to="/register">Register</Link></span>
            </>
                )}

            
      
      {isAuthenticated && (
        <>
        <span className={style.name}>
        Hello,{username || firstName}!
      </span>
                <Link to="/cart">
                <button className="btn btn-outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItem}</span>
                </button>
                </Link>
                 <div className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></div>
                 </>
      )}
            </div>
        </div>
    </div>
</nav>
  );
};

export default Navbar;