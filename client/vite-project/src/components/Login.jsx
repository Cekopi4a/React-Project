import style from './Login.module.css'

const Login = () => {
    return(
      <>
  <h1>Login</h1>

<form action="/action_page.php" method="post">
  <div className="imgcontainer">
    <img src="avatar.jpg" alt="Avatar" className="snimka" />
  </div>

  <div className="container">
    <label htmlFor="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required />

    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required />
        
    <button type="submit">Login</button>
  </div>
</form>
</>
    );
};

export default Login;