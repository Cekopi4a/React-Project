const Register = () => {
    return(
		<>
		<div class="container-md">
			<form>
			<div class="container text-center">					
					<h1 className="modal-title">Register</h1>
				</div>
				<div className="form-group">
						<label>Email</label>
						<input type="email" name="email" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="text" name="firstName" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Confirm Password</label>
						<input type="text" name="lastName" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>FirstName</label>
						<input type="text" name="phoneNumber" className="form-control" required/>
					</div>		
					<div className="form-group">
						<label>LastName</label>
						<input type="text" name="phoneNumber" className="form-control" required/>
					</div>		
					<div className="form-group">
						<label>ImageUrl</label>
						<input type="text" name="phoneNumber" className="form-control" required/>
					</div>		
					<div className="form-group">
						<label>Address</label>
						<textarea className="form-control" name="address" required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" name="phoneNumber" className="form-control" required/>
					</div>					
				<div className="modal-footer">
					<input type="submit"  class="btn btn-primary" value="Submit"/>
				</div>
			</form>
			</div>
</>

    );
};

export default Register;