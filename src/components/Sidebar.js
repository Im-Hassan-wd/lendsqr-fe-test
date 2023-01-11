// static files
import briefcase from "../icon/briefcase.svg"
import caretdown from "../icon/caretdown.svg"
import home from "../icon/home.svg"

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h5 className="display-f align-center">
          <img className="mr-1" src={briefcase} alt="briefcase icon" />
          <div className="font-sm text-gray">Switch Organization</div>
          <img className="ml-1" src={caretdown} alt="caret down icon" />
        </h5>
        <h5 className="text-gray-light-3">
          <img src={home} alt="dashboard icon" />
          <div className="font-sm text-gray-light-3">Dashboard</div>
        </h5>
      </div>
    );
}
 
export default Sidebar;