import * as itemService from '../service/itemService'
import authContext from '../context/authContext';
import { useContext } from 'react';

const UserItem = ({
	id,
	ownerId,
	deleteItem,
    brand,
    model,
    price,
    imageUrl,
    description,
}) => {
	const {
		userId,
		isAuthenticated
	   } = useContext(authContext);

	const onDeleteItem = () =>{
		deleteItem(id)
	}

	console.log(ownerId);
	console.log(userId);
	console.log(userId);
	
    return(
         <>
		 {userId === ownerId &&(
          <tbody>
		 
					<tr>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1" />
								<label htmlFor="checkbox1"></label>
							</span>
						</td>
                       
                        <td><img src={imageUrl} style={{width: "100px"}}/></td>
						<td>{brand} </td>
						<td>{model}</td>
						<td>{price}</td>
						<td>{description}</td>
                     

						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
				            
							<a href="" onClick={onDeleteItem} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
				</tbody>
		 )}
         </>
    );
};

export default UserItem;

