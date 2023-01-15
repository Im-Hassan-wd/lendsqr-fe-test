import eye from "../icon/eye.svg"
import auser from "../icon/buser.svg"
import buser from "../icon/auser.svg"
import { Link } from "react-router-dom";

const DropDown = ({ top }) => {
    return (
      <div style={{
        position: "absolute",
        top: top + 20,
        right: "10px"
      }} className="drop-down bg-white p-2 br-sm">
        <div className="display-f">
          <img className="mr-1" src={eye} alt="view details" />
          <p className="text-primary font-sm"><Link to={`user/${1}`}>View Details</Link> </p>
        </div>
        <div className="display-f">
          <img className="mr-1" src={auser} alt="blacklist user" />
          <p className="text-primary font-sm">Blacklist User</p>
        </div>
        <div className="display-f">
          <img className="mr-1" src={buser} alt="activate details" />
          <p className="text-primary font-sm">Activate User</p>
        </div>
      </div>
    );
}
 
export default DropDown;