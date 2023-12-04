import style from './UserListItem.module.css'
import UserItem from './UserItem';
import * as itemService from "../service/itemService";
import { create } from '../service/itemService';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';



const UsersItems = () => {
	const navigate= useNavigate();
	const [items, setItems] = useState([]);
   

console.log(items);

useEffect(() => {
   itemService.getAll()
   .then(result => setItems(result));
},[]);


const createItemHandler = async (e) => {
    e.preventDefault();

	const itemData = Object.fromEntries(new FormData(e.currentTarget))

	const result = await create(itemData);
	
	setItems(items => [...items,result])

}

const deleteItem = (id) => {
    fetch(`http://localhost:3030/data/cars/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
     
	  setItems(state => state.filter(x => x._id !==id))
  }


    return(
  <>
  <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Item</b></h2>
					</div>
					<div className="col-sm-6">
						<a href="#addItemModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Item</span></a>
						<a href="" onClick={deleteItem} className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
					</div>
				</div>
			</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll" />
								<label htmlFor="selectAll"></label>
							</span>
						</th>
						<th>Pictute</th>
						<th>Brand</th>
						<th>Model</th>
						<th>Price</th>
						<th>Description</th>
						<th>Actions</th>
					</tr>
				</thead>
				{items.map(item =>(
				<UserItem
				_ownerId={item._ownerId}
				deleteItem={deleteItem}
				key={item._id}
				brand={item.brand}
				model={item.model}
				price={item.price}
				description={item.description}
				imageUrl={item.imageUrl}
				/>))}
			</table>
			<div className="clearfix">
				<div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul className="pagination">
					<li className="page-item disabled"><a href="#">Previous</a></li>
					<li className="page-item"><a href="#" className="page-link">1</a></li>
					<li className="page-item"><a href="#" className="page-link">2</a></li>
					<li className="page-item active"><a href="#" className="page-link">3</a></li>
					<li className="page-item"><a href="#" className="page-link">4</a></li>
					<li className="page-item"><a href="#" className="page-link">5</a></li>
					<li className="page-item"><a href="#" className="page-link">Next</a></li>
				</ul>
			</div>
		</div>
	</div>        
</div>

<div id="addItemModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form onSubmit={createItemHandler}>
				<div className="modal-header">						
					<h4 className="modal-title">Add Employee</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">	
					<div className="form-group">
						<label>Brand</label>
						<input type="text" name="brand" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Model</label>
						<input type="text" name="model" className="form-control" required/>
					</div>
					<div className="form-group">
					<label>Price</label>
					<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <span className="input-group-text">0.00</span>
  <input type="text" name='price' className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
</div>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea className="form-control" name="description" required></textarea>
					</div>
					<label>Picture</label>
				<input type="text" name="imageUrl" className="form-control" required/>						
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" className="btn btn-success" value="Add"/>
				</div>
			</form>
		</div>
	</div>
</div>


<div id="editEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
		<form>
				<div className="modal-header">						
					<h4 className="modal-title">Add Employee</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" required/>
					</div>
					<label>Price</label>
					<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <span className="input-group-text">0.00</span>
  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
</div>
					<div className="form-group">
						<label>Description</label>
						<textarea className="form-control" required></textarea>
					</div>
					<label>Picture</label>
					<div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
  <input type="file" className="form-control" id="inputGroupFile01"/>
</div>			
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" className="btn btn-success" value="Add"/>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="deleteEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form >
				<div className="modal-header">						
					<h4 className="modal-title">Delete Employee</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<p>Are you sure you want to delete these Records?</p>
					<p className="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" className="btn btn-danger" value="Delete"/>
				</div>
			</form>
		</div>
	</div>
</div>
</>
    );
};

export default UsersItems;