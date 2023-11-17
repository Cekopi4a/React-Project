const AdminUser = ({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    imageUrl,
}) =>{
   return(
    <tbody>
					<tr>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1" />
								<label htmlFor="checkbox1"></label>
							</span>
						</td>
                        <td> 
                        </td>
						<td>{firstName} {lastName}</td>
						<td>{email}</td>
						<td>{}</td>
						<td>{phoneNumber}</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
				</tbody>
   );
};

export default AdminUser;