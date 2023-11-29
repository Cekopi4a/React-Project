import useItems from "../hooks/useItems";
import UsersItems from "./UsersItems";
import { Link } from "react-router-dom";



const Home = () => {
  return(
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./assets/img/car11.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h3>The Best Car Shop</h3>
          <p>The best car you ever see!</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./assets/img/car2.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./assets/img/car3.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Latest car in shop</h1>
            <p className="lead fw-normal text-white-50 mb-0">This is last added products.</p>
        </div>
    </div>
</header>



{/*<div className="container px-4 px-lg-5 mt-5">
<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
  <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src=""  style={{height: "40%"}} alt="..." />
            
            <div className="card-body p-4">
                <div className="text-center">
                    
                    <h5 className="fw-bolder"></h5>
                    
                    
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
  </div>*/}
</>
  );
};

export default Home;