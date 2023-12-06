import { useNavigate, useParams } from "react-router-dom";
import * as itemService from "../service/itemService"
import { useEffect, useState } from 'react';

const EditItem = () => {
    const { id } = useParams();
	const navigate = useNavigate();
    const [item,setItem] = useState({
        brand: '',
        model: '',
        price: '',
        description: '',
        imageUrl: '',
       
    });
    
    useEffect(() => {
        itemService.getOne(id)
        .then(result => { setItem(result)
        });
        },[id]);


    const editItemHandler = async (e) => {
		e.preventDefault();

		const values = Object.fromEntries(new FormData(e.currentTarget));

        try{
             await itemService.edit(id,values);
			 
            navigate('/myItem');
        }
        catch(err){
            console.log(err)
        }
    }

	const onChange = (e) => {
        setItem(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };


return (
		<div className="container">
			<form onSubmit={editItemHandler}>
				<div className="modal-header">						
					<h4 className="modal-title">Edit Item</h4>
				</div>
				<div className="modal-body">	
					<div className="form-group">
						<label>Brand</label>
						<input type="text" name="brand"  value={item.brand} onChange={onChange} className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Model</label>
						<input type="text" name="model" value={item.model} onChange={onChange} className="form-control" required/>
					</div>
					<div className="form-group">
					<label>Price</label>
					<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <span className="input-group-text">0.00</span>
  <input type="text" name='price'  value={item.price} onChange={onChange} className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
</div>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea className="form-control" name="description"  value={item.description} onChange={onChange} required></textarea>
					</div>
					<label>Picture</label>
				<input type="text" name="imageUrl" className="form-control"  value={item.imageUrl} onChange={onChange} required/>						
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" className="btn btn-success" value="Edit"/>
				</div>
			</form>
		</div>
)
}

export default EditItem;