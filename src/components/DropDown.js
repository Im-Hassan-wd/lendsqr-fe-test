import eye from "../icon/eye.svg"
import auser from "../icon/buser.svg"
import buser from "../icon/auser.svg"

const DropDown = () => {
    return (
      <div className="drop-down p-3 br-sm">
        <div className="display-f mb-1">
          <img className="mr-1" src={eye} alt="view details" />
          <p className="text-primary font-sm">View Details</p>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    );
}
 
export default DropDown;