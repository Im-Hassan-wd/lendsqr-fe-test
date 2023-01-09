// static files
import loginImg from '../../img/login.svg'
import logo from '../../img/logo.svg'


const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className='login-content'>
        <div className="login-img">
          <img src={loginImg} alt="login" />
        </div>

        <form>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          
          <label>
            <input type="text" placeholder="name" />
          </label>

          <label>
            <input type="password" placeholder="pasword" />
            <span>Show</span>
          </label>

          <button></button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;