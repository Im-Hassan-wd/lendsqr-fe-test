// static files
import logo from "../img/logo.svg"
import notification from "../icon/notification.svg"
import dropdown from "../icon/dropdown.svg"
import avatar from "../img/avatar.png"
import "./Navbar.scss"

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <h1 className='site-title logo'><img src={logo} alt="site logo" /></h1>
          <div className="display-f align-center">
            <input type="text" className="form-input form-input-half" />
            <button className='btn-blue border-half-radius text-white'>search</button>
          </div>
          <ul className="display-f align-center">
            <li className="ml-1 text-md text-hover-primary"><a className="text-primary" href="#">Docs</a></li>
            <li className="ml-1 text-md text-hover-primary"><img src={notification} alt="notification"/></li>
            <li className="ml-1 text-md text-hover-primary display-f">
                <img src={avatar} alt="avatar" />
                <p className="text-primary">Adedeji</p>
                <img src={dropdown} alt="drop down" />
            </li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navbar;