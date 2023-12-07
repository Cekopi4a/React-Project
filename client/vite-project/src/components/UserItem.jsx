import * as itemService from '../service/itemService'
import authContext from '../context/authContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({
	id,
	ownerId,
	ondelete,
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
		ondelete(id)
	}
	
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
						<td>${price}</td>
						<td>{description}</td>
                     

						<td>
						<Link to={`/edit/${id}`} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
				            
							<a href="" onClick={onDeleteItem} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
				</tbody>
		 )}
         </>
    );
};

export default UserItem;

