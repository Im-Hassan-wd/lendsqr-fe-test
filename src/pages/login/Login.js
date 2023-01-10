// static files
import loginImg from '../../img/login.svg'
import logo from '../../img/logo.svg'


const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className='login-container'>
        <div className="login-img-container">
          <img src={loginImg} alt="login" />
        </div>

        <form>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          
          <label>
            <input type="text" placeholder="name" />
          </label>

          <label className="form-label">
            <input className="form-input" type="password" placeholder="password" />
            <span>Show</span>
          </label>

          <button className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;