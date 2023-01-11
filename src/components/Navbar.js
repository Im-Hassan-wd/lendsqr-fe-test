// static files
import logo from "../img/logo.svg"
import "./Navbar.scss"

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <h1 className='site-title logo'><img src={logo} alt="site logo" /></h1>
          <div className="display-f">
            <input type="text" className="form-input" />
            <button className='btn-blue border-half-radius text-white'>search</button>
          </div>
          <div>
            <a className="text-primary font-sm" href="#">Docs</a>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;