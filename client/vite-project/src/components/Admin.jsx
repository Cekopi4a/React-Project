import style from './Admin.module.css'
import * as userService from "../service/userService";
import { useEffect,useState } from 'react';
import AdminUser from './AdminUsers';

const Admin = () => {
const [users, setUsers] = useState([]);

console.log(users);

useEffect(() => {
   userService.getAll()
   .then(result => setUsers(result));
},[]);

const onUserCreate = () =>{
	console.log("USer Create!");

	//До тук съм!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

    return(
  <>
  <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-6">
						<a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
						<a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
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
						<th>Picture</th>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				{users.map(user =>(
				<AdminUser 
				key={user._id}
				firstName={user.firstName}
				lastName={user.lastName}
				email={user.email}
				address={user.address}
				phoneNumber={user.phoneNumber}
				imageUrl={user.imageUrl}
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

<div id="addEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form onSubmit={onUserCreate}>
				<div className="modal-header">						
					<h4 className="modal-title">Add Employee</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">	
				<label>Picture</label>
					<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01"/>
                   </div>					
					<div className="form-group">
						<label>First Name</label>
						<input type="text" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input type="text" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea className="form-control" required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" className="form-control" required/>
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

<div id="editEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form>
				<div className="modal-header">						
					<h4 className="modal-title">Edit Employee</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea className="form-control" required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" className="form-control" required/>
					</div>					
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" className="btn btn-info" value="Save"/>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="deleteEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form>
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

export default Admin;