import style from './Login.module.css'
import useForm from '../hooks/useForm';

const LoginFormKeys ={
   Email:'email',
   Password: 'password',
};

const Login = ({
  loginSubmitHandler
}) => {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,{
      [LoginFormKeys.Email]:'',
      [LoginFormKeys.Password]:'',
    });

    return(
      <>
  <h1>Login</h1>

<form action="/action_page.php" method="post" onSubmit={onSubmit}>
  <div className="imgcontainer">
    <img src="avatar.jpg" alt="Avatar" className="snimka" />
  </div>

  <div className="container">
    <label htmlFor="username"><b>Email</b></label>
    <input type="email"
     placeholder="Enter Email"
      name={LoginFormKeys.Email} 
      onChange={onChange}
       value={values[LoginFormKeys.Email]} required />

    <label htmlFor="password"><b>Password</b></label>
    <input type="password" 
    placeholder="Enter Password"
     name={LoginFormKeys.Password}
      onChange={onChange} 
      value={values[LoginFormKeys.Password]} required />
        
    <button type="submit" onSubmit={onSubmit}>Login</button>
  </div>
</form>
</>
    );
};

export default Login;