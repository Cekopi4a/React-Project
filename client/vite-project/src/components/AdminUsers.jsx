const AdminUser = ({
	id,
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    imageUrl,
	deleteUser,
}) =>{
	const onDeleteUser = () =>{
		deleteUser(id)
	}
   return(
    <tbody>
					<tr>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1" />
								<label htmlFor="checkbox1"></label>
							</span>
						</td>
                        <td><img src={imageUrl} style={{width: "80px",height:"40%"}}/></td>
						<td>{firstName} {lastName}</td>
						<td>{email}</td>
						<td>{}</td>
						<td>{phoneNumber}</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="bi bi-info-square"></i></a>
							<a href="" onClick={onDeleteUser} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>

						</td>
					</tr>
				</tbody>
   );
};

export default AdminUser;