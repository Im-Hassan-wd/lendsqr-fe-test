// static files
import { Helmet } from 'react-helmet-async';
import loginImg from '../../img/login.svg'
import logo from '../../img/logo.svg'
import "./Login.scss"

const Login = () => {
  return (
    <div className="login">
      <Helmet>
        <title>Lendsqr | Login</title>
        <meta name="description" content="Login reach over half a million customers" />
        <link rel="canonical" href="/login" />
      </Helmet>
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
            <input className='font-sm' type="text" placeholder="name" />
          </label>

          <label className="form-label">
            <div className="input-div">
              <input className="form-input font-sm" type="password" placeholder="password" />
              <span>Show</span>
            </div>
          </label>

          <button className='login-button'>Log in</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;