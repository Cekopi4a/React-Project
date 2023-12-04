import { useContext } from "react";
import authContext from "../context/authContext";
import useForm from "../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
	Password: 'password',
	ConfirmPassword: 'confirm-password',
	FirstName: 'firstName',
	LastName: 'lastName',
	ImageUrl: 'imageUrl',
	PhoneNumber: 'phoneNumber',
	Address: 'address',
};

export default function Register () {
    const { registerSubmitHandler } = useContext(authContext);
	const {values, onChange, onSubmit } = useForm(registerSubmitHandler, {
		[RegisterFormKeys.Email]: '',
		[RegisterFormKeys.Password]: '',
		[RegisterFormKeys.ConfirmPassword]: '',
		[RegisterFormKeys.FirstName]: '',
		[RegisterFormKeys.LastName]: '',
		[RegisterFormKeys.ImageUrl]: '',
		[RegisterFormKeys.PhoneNumber]: '',
		[RegisterFormKeys.Address]: '',

	});

    return(
		<>
		<div className="container-md">
			<form onSubmit={onSubmit}>
			<div className="container text-center">					
					<h1 className="modal-title">Register</h1>
				</div>
				<div className="form-group">
						<label>Email</label>
						<input type="email" name="email" className="form-control"
						 onChange={onChange}
						 values={values[RegisterFormKeys.Email]}
						  required/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="text" name="password" className="form-control"
						 onChange={onChange}
						 values={values[RegisterFormKeys.Password]}
						  required/>
					</div>
					<div className="form-group">
						<label>Confirm Password</label>
						<input type="text" name="confirm-password" className="form-control"
						 onChange={onChange} 
						 values={values[RegisterFormKeys.ConfirmPassword]}
						 required/>
					</div>
					<div className="form-group">
						<label>FirstName</label>
						<input type="text" name="firstName" className="form-control"
						 onChange={onChange}
						 values={values[RegisterFormKeys.FirstName]}
						  required/>
					</div>		
					<div className="form-group">
						<label>LastName</label>
						<input type="text" name="lastName" className="form-control"
						 onChange={onChange}
						 values={values[RegisterFormKeys.LastName]}
						  required/>
					</div>		
					<div className="form-group">
						<label>ImageUrl</label>
						<input type="text" name="imageUrl" className="form-control" 
						onChange={onChange}
						values={values[RegisterFormKeys.ImageUrl]}
						 required/>
					</div>		
					<div className="form-group">
						<label>Address</label>
						<textarea className="address" name="address" 
						onChange={onChange} 
						values={values[RegisterFormKeys.Address]}
						required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" name="phoneNumber" className="form-control"
						 onChange={onChange} 
						 values={values[RegisterFormKeys.PhoneNumber]}
						 required/>
					</div>				
				<div className="modal-footer">
					<button type="submit" name="btnsubmit"  className="btn btn-primary" value="Register">Register</button>
				</div>
			</form>
			</div>
</>

    );
};
