import * as itemService from "../service/itemService";
import { useState,useEffect } from "react";
import ShopItem from "./ShopItem";


function Shop() {
    const [items, setItems] = useState([]);

    console.log(items);
    
    useEffect(() => {
       itemService.getAll()
       .then(result => setItems(result));
    },[]);

  return (
    <>
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
    </div>
</header>
<section className="py-5">

<div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                {items.map((item)=>(
				<ShopItem
				key={item._id}
                carid={item.carid}
				brand={item.brand}
				model={item.model}
				price={item.price}
				imageUrl={item.imageUrl}
                />))}
                </div>
            </div>
</section>
        </>
  );
}

export default Shop;