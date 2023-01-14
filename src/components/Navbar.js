import { useState } from "react"
import { Link } from "react-router-dom"
// static files
import logo from "../img/logo.svg"
import notification from "../icon/notification.svg"
import dropdown from "../icon/dropdown.svg"
import search from "../icon/search.svg"
import avatar from "../img/avatar.png"
import "./Navbar.scss"

const Navbar = () => {
  const [showOption, setShowOption] = useState('')

  return (
    <nav className="navbar">
      <div className="container">
        <div className="container">
          <Link to="/" className='site-title logo'><img src={logo} alt="site logo" /></Link>
          <div className="display-f align-center">
            <input type="text" placeholder="search for anything" className="form-input form-input-half m-0 ml-4 text-primary p-1"/>
            <button className='btn-blue border-half-radius text-white p-2'><img src={search} alt="search icon" /></button>
          </div>
        </div>
        <ul className="display-f align-center">
          <div className="li active display-f align-center">
            <li className="ml-2 text-md text-hover-primary"><a className="text-primary" href="#">Docs</a></li>
            <li className="ml-3 text-md text-hover-primary"><img className="notification" src={notification} alt="notification"/></li>
            <li className="text-md text-hover-primary display-f align-center">
              <div className="display-f align-center">
                <img className="ml-1 br-full avatar" src={avatar} alt="avatar" />
                <p className="avatar-p text-primary ml-1">Adedeji</p>
              </div>
            </li>
          </div>
          <button ><img src={dropdown} alt="drop down" /></button>
        </ul>
      </div>
    </nav>
  );
}
 
export default Navbar;